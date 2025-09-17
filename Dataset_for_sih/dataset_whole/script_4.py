# Save all Indian databases to CSV files
print("Saving Indian databases to CSV files...")
print("=" * 50)

# Institute 1 - Bharatiya Vidya Mandir
print("\nSaving Bharatiya Vidya Mandir database files...")
admin1_df.to_csv('BharatiyaVidya_Admin.csv', index=False)
mentors1_df.to_csv('BharatiyaVidya_Mentors.csv', index=False)
parents1_df.to_csv('BharatiyaVidya_Parents.csv', index=False)
students1_df.to_csv('BharatiyaVidya_Students.csv', index=False)
attendance1_df.to_csv('BharatiyaVidya_Attendance.csv', index=False)
assessment1_df.to_csv('BharatiyaVidya_Assessments.csv', index=False)
behavioral1_df.to_csv('BharatiyaVidya_Behavioral.csv', index=False)
fee1_df.to_csv('BharatiyaVidya_Fees.csv', index=False)
alerts1_df.to_csv('BharatiyaVidya_Alerts.csv', index=False)
mapping1_df.to_csv('BharatiyaVidya_Mentor_Mapping.csv', index=False)
activities1_df.to_csv('BharatiyaVidya_Activities.csv', index=False)

# Institute 2 - Saraswati International School
print("Saving Saraswati International School database files...")
admin2_df.to_csv('Saraswati_Admin.csv', index=False)
mentors2_df.to_csv('Saraswati_Mentors.csv', index=False)
parents2_df.to_csv('Saraswati_Parents.csv', index=False)
students2_df.to_csv('Saraswati_Students.csv', index=False)
attendance2_df.to_csv('Saraswati_Attendance.csv', index=False)
assessment2_df.to_csv('Saraswati_Assessments.csv', index=False)
behavioral2_df.to_csv('Saraswati_Behavioral.csv', index=False)
fee2_df.to_csv('Saraswati_Fees.csv', index=False)
alerts2_df.to_csv('Saraswati_Alerts.csv', index=False)
mapping2_df.to_csv('Saraswati_Mentor_Mapping.csv', index=False)
activities2_df.to_csv('Saraswati_Activities.csv', index=False)

print("\nAll Indian CSV files saved successfully!")

# Create a sample view to show the data quality with Indian names
print("\n" + "="*80)
print("SAMPLE INDIAN DATA PREVIEW")
print("="*80)

print("\n1. SAMPLE STUDENTS (Bharatiya Vidya Mandir):")
sample_students = students1_df.head(5)[['student_id', 'name', 'gender', 'grade', 'mentor_id', 'parent_id', 'risk_level', 'attendance_percentage', 'current_gpa']]
print(sample_students.to_string(index=False))

print("\n2. SAMPLE HIGH-RISK STUDENTS:")
high_risk = students1_df[students1_df['risk_level'] == 'High'].head(3)[['student_id', 'name', 'gender', 'attendance_percentage', 'current_gpa', 'behavioral_incidents']]
print(high_risk.to_string(index=False))

print("\n3. SAMPLE MENTORS:")
sample_mentors = mentors1_df.head(3)[['mentor_id', 'name', 'gender', 'department', 'experience_years', 'assigned_students']]
print(sample_mentors.to_string(index=False))

print("\n4. SAMPLE PARENTS:")
sample_parents = parents1_df.head(3)[['parent_id', 'father_name', 'mother_name', 'occupation_father', 'occupation_mother', 'children_count']]
print(sample_parents.to_string(index=False))

print("\n5. SAMPLE ALERTS:")
sample_alerts = alerts1_df.head(5)[['alert_id', 'student_id', 'alert_type', 'priority', 'status', 'parent_notified']]
print(sample_alerts.to_string(index=False))

print("\n6. SAMPLE ACTIVITIES:")
sample_activities = activities1_df.head(5)[['activity_id', 'student_id', 'activity_name', 'performance_rating', 'achievements']]
print(sample_activities.to_string(index=False))

print("\n7. FAMILY STRUCTURES (Sample - Parents with Multiple Children):")
multi_child_parents = parents1_df[parents1_df['children_count'] == 2].head(5)[['parent_id', 'father_name', 'mother_name', 'children_count']]
print(multi_child_parents.to_string(index=False))

print("\n8. DIVERSE INDIAN NAMES SAMPLE:")
diverse_names = students1_df.sample(10)[['name', 'gender', 'grade']]
print(diverse_names.to_string(index=False))

print("\n9. REGIONAL DIVERSITY:")
parent_occupations = parents1_df.groupby(['occupation_father', 'occupation_mother']).size().head(8)
print("Father Occupation | Mother Occupation | Count")
print("-" * 50)
for (father_occ, mother_occ), count in parent_occupations.items():
    print(f"{father_occ[:15]} | {mother_occ[:15]} | {count}")

print("\n10. STUDENT PERFORMANCE DISTRIBUTION:")
print("Risk Level Distribution:")
risk_dist = students1_df['risk_level'].value_counts()
for risk, count in risk_dist.items():
    percentage = (count / len(students1_df)) * 100
    print(f"  {risk}: {count} students ({percentage:.1f}%)")

print(f"\n🎯 COMPREHENSIVE INDIAN EDUCATIONAL DATABASE CREATED!")
print(f"📚 Total Files: 22 CSV files (11 per institute)")
print(f"👥 Total Students: 4,000 across both institutes")
print(f"🏫 Authentic Indian school context with regional diversity")
print(f"📊 Ready for machine learning and early warning system implementation")