# Create alerts and mapping tables with Indian context
def create_indian_alert_notifications(students_df, institute_id):
    """Create alert and notification records with Indian educational context"""
    alert_data = []
    indian_alert_types = ['Low Attendance', 'Poor Academic Performance', 'Behavioral Issues', 'Fee Defaulter', 
                         'Academic Decline', 'Chronic Absenteeism', 'Uniform Violations', 'Homework Default',
                         'Parent Meeting Required', 'Counseling Needed', 'Medical Attention Required']
    priority_levels = ['Low', 'Medium', 'High', 'Critical']
    
    for _, student in students_df.iterrows():
        student_id = student['student_id']
        risk_level = student['risk_level']
        
        # Generate alerts based on risk level
        if risk_level == 'High':
            num_alerts = random.randint(3, 6)
        elif risk_level == 'Medium':
            num_alerts = random.randint(1, 3)
        else:
            num_alerts = random.randint(0, 1)
        
        for i in range(num_alerts):
            alert_type = random.choice(indian_alert_types)
            
            # Determine priority based on alert type and risk level
            if risk_level == 'High' and alert_type in ['Chronic Absenteeism', 'Poor Academic Performance']:
                priority = 'Critical'
            elif risk_level == 'High':
                priority = 'High'
            elif risk_level == 'Medium':
                priority = 'Medium'
            else:
                priority = 'Low'
            
            alert_data.append({
                'alert_id': f"ALT_{institute_id}_{len(alert_data)+1:06d}",
                'student_id': student_id,
                'alert_type': alert_type,
                'priority': priority,
                'message': f"{alert_type} flagged for student {student['name']} - Class {student['grade']} {student['section']}",
                'created_date': (datetime.now() - timedelta(days=random.randint(0, 30))).strftime('%Y-%m-%d %H:%M:%S'),
                'status': random.choice(['Active', 'Acknowledged', 'Resolved', 'In Progress']),
                'assigned_to': student['mentor_id'],
                'escalated': random.choice([True, False]) if priority in ['High', 'Critical'] else False,
                'parent_notified': random.choice([True, False]),
                'sms_sent': random.choice([True, False]),
                'email_sent': random.choice([True, False]),
                'action_required': random.choice([True, False]),
                'follow_up_date': (datetime.now() + timedelta(days=random.randint(1, 15))).strftime('%Y-%m-%d') if random.choice([True, False]) else None
            })
    
    return pd.DataFrame(alert_data)

def create_indian_mentor_student_mapping(students_df, mentors_df, institute_id):
    """Create detailed mentor-student mapping with Indian context"""
    mapping_data = []
    
    for _, student in students_df.iterrows():
        mapping_data.append({
            'mapping_id': f"MAP_{institute_id}_{len(mapping_data)+1:06d}",
            'mentor_id': student['mentor_id'],
            'student_id': student['student_id'],
            'assigned_date': student['admission_date'],
            'status': 'Active',
            'last_interaction': (datetime.now() - timedelta(days=random.randint(0, 21))).strftime('%Y-%m-%d'),
            'interaction_type': random.choice(['Parent Meeting', 'Counseling Session', 'Academic Review', 'Behavioral Discussion', 'Progress Update']),
            'interaction_frequency': random.choice(['Daily', 'Weekly', 'Bi-weekly', 'Monthly']),
            'communication_mode': random.choice(['In Person', 'Phone Call', 'WhatsApp', 'SMS', 'Email']),
            'parent_contact_frequency': random.choice(['Weekly', 'Fortnightly', 'Monthly', 'As Needed']),
            'academic_support_provided': random.choice([True, False]),
            'counseling_sessions': random.randint(0, 5)
        })
    
    return pd.DataFrame(mapping_data)

# Create additional specialized tables for Indian context
def create_indian_extracurricular_records(students_df, institute_id):
    """Create extracurricular activity records"""
    activity_data = []
    indian_activities = ['Cricket', 'Football', 'Basketball', 'Badminton', 'Table Tennis', 'Athletics', 
                        'Dance', 'Music', 'Drama', 'Debate', 'Quiz', 'Art & Craft', 'Yoga', 'Karate',
                        'Science Club', 'Literary Society', 'Environmental Club', 'Cultural Committee']
    
    for _, student in students_df.iterrows():
        student_id = student['student_id']
        
        # 60% students participate in activities
        if random.random() < 0.6:
            num_activities = random.randint(1, 3)
            for i in range(num_activities):
                activity_data.append({
                    'activity_id': f"ACT_{institute_id}_{len(activity_data)+1:06d}",
                    'student_id': student_id,
                    'activity_name': random.choice(indian_activities),
                    'participation_level': random.choice(['Beginner', 'Intermediate', 'Advanced']),
                    'start_date': (datetime.now() - timedelta(days=random.randint(30, 365))).strftime('%Y-%m-%d'),
                    'performance_rating': random.choice(['Excellent', 'Very Good', 'Good', 'Average', 'Needs Improvement']),
                    'achievements': random.choice(['', 'School Level Winner', 'District Level Participant', 'State Level Qualifier', 'Certificate of Participation']) if random.random() < 0.3 else '',
                    'attendance_percentage': random.randint(70, 100),
                    'instructor': f"{random.choice(indian_first_names)} {random.choice(indian_surnames)}"
                })
    
    return pd.DataFrame(activity_data)

# Generate final tables
print("Creating alert and notification records...")
alerts1_df = create_indian_alert_notifications(students1_df, "INST_001")
alerts2_df = create_indian_alert_notifications(students2_df, "INST_002")

print("Creating mentor-student mapping...")
mapping1_df = create_indian_mentor_student_mapping(students1_df, mentors1_df, "INST_001")
mapping2_df = create_indian_mentor_student_mapping(students2_df, mentors2_df, "INST_002")

print("Creating extracurricular activity records...")
activities1_df = create_indian_extracurricular_records(students1_df, "INST_001")
activities2_df = create_indian_extracurricular_records(students2_df, "INST_002")

print("\nFinal tables with Indian context created!")
print("=" * 50)

# Display summary statistics
print("INDIAN DATABASE SUMMARY")
print("=" * 50)

print(f"\nINSTITUTE 1: {admin1_df.iloc[0]['institute_name']}")
print(f"Admin: {admin1_df.iloc[0]['admin_name']}")
print(f"Location: {admin1_df.iloc[0]['city']}")
print(f"Students: {len(students1_df)}")
print(f"Mentors: {len(mentors1_df)}")
print(f"Parents: {len(parents1_df)}")
print(f"Risk Distribution:")
print(f"  - High Risk: {len(students1_df[students1_df['risk_level'] == 'High'])}")
print(f"  - Medium Risk: {len(students1_df[students1_df['risk_level'] == 'Medium'])}")
print(f"  - Low Risk: {len(students1_df[students1_df['risk_level'] == 'Low'])}")

print(f"\nINSTITUTE 2: {admin2_df.iloc[0]['institute_name']}")
print(f"Admin: {admin2_df.iloc[0]['admin_name']}")
print(f"Location: {admin2_df.iloc[0]['city']}")
print(f"Students: {len(students2_df)}")
print(f"Mentors: {len(mentors2_df)}")
print(f"Parents: {len(parents2_df)}")
print(f"Risk Distribution:")
print(f"  - High Risk: {len(students2_df[students2_df['risk_level'] == 'High'])}")
print(f"  - Medium Risk: {len(students2_df[students2_df['risk_level'] == 'Medium'])}")
print(f"  - Low Risk: {len(students2_df[students2_df['risk_level'] == 'Low'])}")

print(f"\nRECORD COUNTS PER INSTITUTE:")
print(f"Attendance Records: {len(attendance1_df):,} / {len(attendance2_df):,}")
print(f"Assessment Records: {len(assessment1_df):,} / {len(assessment2_df):,}")
print(f"Behavioral Records: {len(behavioral1_df):,} / {len(behavioral2_df):,}")
print(f"Fee Records: {len(fee1_df):,} / {len(fee2_df):,}")
print(f"Alert Records: {len(alerts1_df):,} / {len(alerts2_df):,}")
print(f"Activity Records: {len(activities1_df):,} / {len(activities2_df):,}")
print(f"Mentor-Student Mappings: {len(mapping1_df):,} / {len(mapping2_df):,}")