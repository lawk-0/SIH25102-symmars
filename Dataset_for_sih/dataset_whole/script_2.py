# Create additional tables with Indian educational context

def create_indian_attendance_records(students_df, institute_id, days_back=30):
    """Create detailed attendance records with Indian context"""
    attendance_data = []
    start_date = datetime.now() - timedelta(days=days_back)
    
    for _, student in students_df.iterrows():
        student_id = student['student_id']
        base_attendance = student['attendance_percentage'] / 100
        
        for day in range(days_back):
            current_date = start_date + timedelta(days=day)
            # Skip weekends and Indian holidays
            if current_date.weekday() < 5:  # Monday = 0, Friday = 4
                # Check for Indian holidays (simplified)
                is_holiday = current_date.day in [15, 26] and current_date.month in [8, 1]  # Independence Day, Republic Day
                
                if not is_holiday:
                    is_present = random.random() < base_attendance
                    attendance_data.append({
                        'attendance_id': f"ATT_{institute_id}_{len(attendance_data)+1:06d}",
                        'student_id': student_id,
                        'date': current_date.strftime('%Y-%m-%d'),
                        'status': 'Present' if is_present else random.choice(['Absent', 'Late', 'Half Day', 'Excused']),
                        'period_1': is_present,  # Morning Assembly
                        'period_2': is_present and random.random() > 0.03,
                        'period_3': is_present and random.random() > 0.03,
                        'period_4': is_present and random.random() > 0.03,
                        'period_5': is_present and random.random() > 0.03,
                        'period_6': is_present and random.random() > 0.03,
                        'period_7': is_present and random.random() > 0.05,  # Sports/Activity period
                        'remarks': '' if is_present else random.choice(['Fever', 'Family Function', 'Medical Appointment', 'Transport Issue', 'Festival', 'No Reason Given'])
                    })
    
    return pd.DataFrame(attendance_data)

def create_indian_assessment_records(students_df, institute_id):
    """Create assessment records with Indian educational context"""
    assessment_data = []
    indian_assessment_types = ['Unit Test', 'Monthly Test', 'Half Yearly Exam', 'Final Exam', 'Assignment', 
                              'Project Work', 'Practical Exam', 'Viva Voce', 'Quiz', 'Internal Assessment']
    
    for _, student in students_df.iterrows():
        student_id = student['student_id']
        base_performance = student['current_gpa'] / 4.0
        
        # Generate 12-18 assessments per student (Indian academic system)
        num_assessments = random.randint(12, 18)
        for i in range(num_assessments):
            score_percentage = max(0, min(100, np.random.normal(base_performance * 75, 18)))
            max_marks = random.choice([20, 25, 50, 80, 100])
            obtained_marks = int(score_percentage * max_marks / 100)
            
            # Indian grading system
            if score_percentage >= 90:
                grade = 'A1'
            elif score_percentage >= 80:
                grade = 'A2'
            elif score_percentage >= 70:
                grade = 'B1'
            elif score_percentage >= 60:
                grade = 'B2'
            elif score_percentage >= 50:
                grade = 'C1'
            elif score_percentage >= 40:
                grade = 'C2'
            else:
                grade = 'D'
            
            assessment_data.append({
                'assessment_id': f"ASS_{institute_id}_{len(assessment_data)+1:06d}",
                'student_id': student_id,
                'subject': random.choice(indian_subjects),
                'assessment_type': random.choice(indian_assessment_types),
                'date': (datetime.now() - timedelta(days=random.randint(1, 120))).strftime('%Y-%m-%d'),
                'max_marks': max_marks,
                'obtained_marks': obtained_marks,
                'percentage': round(score_percentage, 1),
                'grade': grade,
                'term': random.choice(['First Term', 'Second Term', 'Final Term']),
                'remarks': 'Outstanding' if score_percentage >= 90 else 'Excellent' if score_percentage >= 80 else 'Very Good' if score_percentage >= 70 else 'Good' if score_percentage >= 60 else 'Satisfactory' if score_percentage >= 50 else 'Needs Improvement'
            })
    
    return pd.DataFrame(assessment_data)

def create_indian_behavioral_records(students_df, institute_id):
    """Create behavioral records with Indian school context"""
    behavioral_data = []
    indian_incident_types = ['Classroom Disruption', 'Late Coming', 'Incomplete Homework', 'Fighting', 
                           'Disrespect to Teacher', 'Mobile Phone Usage', 'Uniform Violation', 'Bunking Classes',
                           'Cheating in Exam', 'Verbal Abuse', 'Damage to Property', 'Bullying']
    severity_levels = ['Minor', 'Moderate', 'Major', 'Severe']
    indian_actions = ['Verbal Warning', 'Written Warning', 'Parent Meeting', 'After School Detention', 
                     'Suspension', 'Counseling', 'Community Service', 'Apology Letter', 'Behavior Contract']
    
    for _, student in students_df.iterrows():
        student_id = student['student_id']
        incident_count = student['behavioral_incidents']
        
        for i in range(incident_count):
            incident_type = random.choice(indian_incident_types)
            behavioral_data.append({
                'incident_id': f"BEH_{institute_id}_{len(behavioral_data)+1:06d}",
                'student_id': student_id,
                'date': (datetime.now() - timedelta(days=random.randint(1, 200))).strftime('%Y-%m-%d'),
                'incident_type': incident_type,
                'severity': random.choice(severity_levels),
                'description': f"Student involved in {incident_type.lower()} during {random.choice(['class hours', 'break time', 'assembly', 'sports period'])}",
                'reported_by': f"{random.choice(['Class Teacher', 'Subject Teacher', 'Principal', 'Discipline Incharge'])} {random.choice(indian_first_names)} {random.choice(indian_surnames)}",
                'action_taken': random.choice(indian_actions),
                'parent_informed': random.choice([True, False]),
                'follow_up_required': random.choice([True, False]),
                'resolved': random.choice([True, False]),
                'counselor_involved': random.choice([True, False]) if incident_type in ['Fighting', 'Bullying', 'Verbal Abuse'] else False
            })
    
    return pd.DataFrame(behavioral_data)

def create_indian_fee_records(students_df, institute_id):
    """Create fee records with Indian educational fee structure"""
    fee_data = []
    indian_fee_types = ['Tuition Fee', 'Admission Fee', 'Exam Fee', 'Lab Fee', 'Library Fee', 'Transport Fee', 
                       'Activity Fee', 'Sports Fee', 'Computer Fee', 'Development Fee', 'Annual Function Fee']
    
    for _, student in students_df.iterrows():
        student_id = student['student_id']
        
        # Generate fee records for different fee types
        for fee_type in random.sample(indian_fee_types, random.randint(4, 7)):
            # Indian fee structure (in INR)
            if fee_type == 'Tuition Fee':
                amount = random.randint(15000, 50000)
            elif fee_type == 'Transport Fee':
                amount = random.randint(8000, 20000)
            elif fee_type == 'Admission Fee':
                amount = random.randint(5000, 15000)
            else:
                amount = random.randint(2000, 8000)
            
            paid_amount = amount if student['fees_paid'] == 'Yes' else (amount // 2 if student['fees_paid'] == 'Partial' else 0)
            
            fee_data.append({
                'fee_id': f"FEE_{institute_id}_{len(fee_data)+1:06d}",
                'student_id': student_id,
                'fee_type': fee_type,
                'academic_year': '2024-25',
                'quarter': random.choice(['Q1', 'Q2', 'Q3', 'Q4']),
                'due_date': (datetime.now() + timedelta(days=random.randint(-45, 90))).strftime('%Y-%m-%d'),
                'amount_due': amount,
                'amount_paid': paid_amount,
                'balance': amount - paid_amount,
                'payment_status': 'Paid' if paid_amount == amount else 'Partial' if paid_amount > 0 else 'Pending',
                'last_payment_date': (datetime.now() - timedelta(days=random.randint(1, 120))).strftime('%Y-%m-%d') if paid_amount > 0 else None,
                'payment_method': random.choice(['Online Banking', 'Cash', 'Cheque', 'DD', 'UPI', 'Card Payment']) if paid_amount > 0 else None,
                'late_fee': random.randint(100, 500) if paid_amount < amount and random.random() < 0.3 else 0
            })
    
    return pd.DataFrame(fee_data)

# Generate additional tables for both institutes with Indian context
print("Generating additional tables with Indian educational context...")

print("Creating attendance records...")
attendance1_df = create_indian_attendance_records(students1_df, "INST_001")
attendance2_df = create_indian_attendance_records(students2_df, "INST_002")

print("Creating assessment records...")
assessment1_df = create_indian_assessment_records(students1_df, "INST_001")
assessment2_df = create_indian_assessment_records(students2_df, "INST_002")

print("Creating behavioral records...")
behavioral1_df = create_indian_behavioral_records(students1_df, "INST_001")
behavioral2_df = create_indian_behavioral_records(students2_df, "INST_002")

print("Creating fee records...")
fee1_df = create_indian_fee_records(students1_df, "INST_001")
fee2_df = create_indian_fee_records(students2_df, "INST_002")

print("\nAll additional tables with Indian context created successfully!")
print("=" * 50)