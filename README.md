# SIH25102-symmars
Smart India Hackathon 2025 Project - AI-based drop-out prediction and counseling system


## 📂 Project Structure

<details>
<summary>Click to view</summary>

```bash
SIH25102-symmars/
├── backend/                     # APIs + risk scoring logic
│   ├── app.py                   # Main FastAPI/Flask app
│   ├── models/                  # DB models (if using SQLAlchemy)
│   ├── routes/                  # API endpoints
│   └── database.db              # SQLite (or migrations if Postgres)
│
├── data/                        # Raw + processed datasets
│   ├── raw/                     # Attendance, test scores, fees (CSVs)
│   └── processed/               # Cleaned/merged datasets
│
├── ml/                          # ML models and experiments
│   ├── notebooks/               # Jupyter notebooks for training
│   ├── models/                  # Saved models (pkl/joblib)
│   └── train.py                 # Training script
│
├── frontend/                    # Dashboard UI
│   ├── app.py                   # Streamlit entry point
│   ├── components/              # Custom charts, widgets
│   └── assets/                  # Images, CSS
│
├── notifications/               # Alerts and integration
│   ├── notifier.py              # Email/WhatsApp/SMS logic
│   └── templates/               # Message templates
│
├── docs/                        # Presentation + documentation
│   ├── architecture.png
│   ├── SIH-pitch-deck.pptx
│   └── readme-extras.md
│
├── .gitignore
├── requirements.txt             # Dependencies
├── README.md
