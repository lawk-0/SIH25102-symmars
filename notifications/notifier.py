import pandas as pd
import smtplib
from email.mime.text import MIMEText
from rules import compute_risk
from twilio.rest import Client

# ---------- CONFIG (edit before running) ----------
GMAIL_USER = "yourgmail@gmail.com"        # sender Gmail
GMAIL_PASS = "your-app-password"          # Gmail app password (not your login password!)

MENTOR_EMAIL = "mentor@example.com"
'''
# Twilio WhatsApp sandbox config
TWILIO_SID = "ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
TWILIO_AUTH = "your_twilio_auth_token"
TWILIO_WHATSAPP_FROM = "whatsapp:+14155238886"  # Twilio sandbox default number
MENTOR_WHATSAPP = "whatsapp:+91XXXXXXXXXX"    # Mentor WhatsApp
# -------------------------------------------------
'''

def send_email(subject, body, to_email=MENTOR_EMAIL):
    try:
        msg = MIMEText(body)
        msg["Subject"] = subject
        msg["From"] = GMAIL_USER
        msg["To"] = to_email

        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()
            server.login(GMAIL_USER, GMAIL_PASS)
            server.send_message(msg)

        print(f"✅ Email sent to {to_email}")
    except Exception as e:
        print(f"❌ Email failed: {e}")
        print("Fallback: printing instead:\n", body)


def send_whatsapp(body, to=MENTOR_WHATSAPP):
    try:
        client = Client(TWILIO_SID, TWILIO_AUTH)
        message = client.messages.create(
            from_=TWILIO_WHATSAPP_FROM,
            body=body,
            to=to
        )
        print(f"✅ WhatsApp sent to {to} (SID: {message.sid})")
    except Exception as e:
        print(f"❌ WhatsApp failed: {e}")
        print("Fallback: printing instead:\n", body)


def main():
    # Load data
    attendance = pd.read_csv("attendance.csv")
    tests = pd.read_csv("tests.csv")
    fees = pd.read_csv("fees.csv")

    # Preprocess tests
    tests["score_pct"] = tests["score"] / tests["max_score"] * 100
    tests_agg = tests.groupby("student_id").agg(
        last_score_pct=("score_pct", "last"),
        attempts=("attempts", "max")
    ).reset_index()

    # Merge
    merged = attendance.merge(tests_agg, on="student_id").merge(
        fees[["student_id", "due_amount", "overdue_days"]], on="student_id"
    )

    # Process each student
    for _, row in merged.iterrows():
        student = row.to_dict()
        risk, reasons = compute_risk(student)

        if risk > 0:  # At-risk only
            body = f"""
ALERT: {student['student_name']} ({student['student_id']})
Risk Score: {risk:.2f}
Reasons:
 - {'; '.join(reasons)}
"""

            # Send notifications
            send_email(f"ALERT: {student['student_name']} at risk", body)
            send_whatsapp(body)


if __name__ == "__main__":
    main()
