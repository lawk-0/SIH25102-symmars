# Function to create Indian institute database
def create_indian_institute_database(institute_id, institute_name):
    """Create comprehensive database for one Indian institute"""
    
    print(f"Creating database for {institute_name} (ID: {institute_id})...")
    
    # Select random city for this institute
    institute_city = random.choice(indian_cities)
    
    # 1. Admin table with Indian names
    admin_first, admin_last = generate_indian_name()
    admin_data = {
        'admin_id': [f"ADM_{institute_id}_001"],
        'institute_id': [institute_id],
        'institute_name': [institute_name],
        'admin_name': [f"Dr. {admin_first} {admin_last}"],
        'email': [generate_realistic_email("principal", f"institute{institute_id}")],
        'phone': [generate_indian_phone_number()],
        'city': [institute_city],
        'total_students': [STUDENTS_PER_INSTITUTE],
        'total_mentors': [MENTORS_PER_INSTITUTE],
        'created_date': [datetime.now().strftime('%Y-%m-%d %H:%M:%S')]
    }
    admin_df = pd.DataFrame(admin_data)
    
    # 2. Mentors/Teachers table with Indian names
    mentor_data = []
    for i in range(MENTORS_PER_INSTITUTE):
        # Random gender for mentor
        mentor_gender = random.choice(['Male', 'Female'])
        mentor_first, mentor_last = generate_indian_name(mentor_gender)
        
        mentor_data.append({
            'mentor_id': f"MEN_{institute_id}_{i+1:03d}",
            'institute_id': institute_id,
            'name': f"{mentor_first} {mentor_last}",
            'gender': mentor_gender,
            'email': generate_realistic_email(mentor_first, mentor_last),
            'phone': generate_indian_phone_number(),
            'department': random.choice(indian_subjects),
            'experience_years': random.randint(1, 25),
            'qualification': random.choice(['B.Ed', 'M.Ed', 'M.A.', 'M.Sc.', 'Ph.D']),
            'assigned_students': STUDENTS_PER_MENTOR if i < MENTORS_PER_INSTITUTE-1 else STUDENTS_PER_INSTITUTE - (i * STUDENTS_PER_MENTOR)
        })
    mentors_df = pd.DataFrame(mentor_data)
    
    # 3. Parents table with Indian names and context
    parents_data = []
    parent_id_counter = 1
    
    # Calculate families (70% single child, 30% two children)
    single_child_families = int(0.7 * STUDENTS_PER_INSTITUTE)
    double_child_families = int((STUDENTS_PER_INSTITUTE - single_child_families) / 2)
    
    # Create single-child families
    for i in range(single_child_families):
        father_first, family_surname = generate_indian_name('Male')
        mother_first, _ = generate_indian_name('Female')
        
        parents_data.append({
            'parent_id': f"PAR_{institute_id}_{parent_id_counter:04d}",
            'institute_id': institute_id,
            'father_name': f"{father_first} {family_surname}",
            'mother_name': f"{mother_first} {family_surname}",
            'primary_contact': f"{father_first} {family_surname}",
            'email': generate_realistic_email(father_first, family_surname),
            'phone_primary': generate_indian_phone_number(),
            'phone_secondary': generate_indian_phone_number(),
            'address': generate_indian_address(institute_city),
            'occupation_father': random.choice(indian_occupations_male),
            'occupation_mother': random.choice(indian_occupations_female),
            'income_bracket': random.choice(["< 2 LPA", "2-5 LPA", "5-10 LPA", "10-15 LPA", "15-25 LPA", "25+ LPA"]),
            'children_count': 1,
            'religion': random.choice(["Hindu", "Muslim", "Christian", "Sikh", "Buddhist", "Jain"]),
            'caste_category': random.choice(["General", "OBC", "SC", "ST"])
        })
        parent_id_counter += 1
    
    # Create double-child families
    for i in range(double_child_families):
        father_first, family_surname = generate_indian_name('Male')
        mother_first, _ = generate_indian_name('Female')
        
        parents_data.append({
            'parent_id': f"PAR_{institute_id}_{parent_id_counter:04d}",
            'institute_id': institute_id,
            'father_name': f"{father_first} {family_surname}",
            'mother_name': f"{mother_first} {family_surname}",
            'primary_contact': f"{father_first} {family_surname}",
            'email': generate_realistic_email(father_first, family_surname),
            'phone_primary': generate_indian_phone_number(),
            'phone_secondary': generate_indian_phone_number(),
            'address': generate_indian_address(institute_city),
            'occupation_father': random.choice(indian_occupations_male),
            'occupation_mother': random.choice(indian_occupations_female),
            'income_bracket': random.choice(["< 2 LPA", "2-5 LPA", "5-10 LPA", "10-15 LPA", "15-25 LPA", "25+ LPA"]),
            'children_count': 2,
            'religion': random.choice(["Hindu", "Muslim", "Christian", "Sikh", "Buddhist", "Jain"]),
            'caste_category': random.choice(["General", "OBC", "SC", "ST"])
        })
        parent_id_counter += 1
    
    parents_df = pd.DataFrame(parents_data)
    
    # 4. Students table with Indian names
    students_data = []
    
    # Assign students to parents
    parent_index = 0
    for i in range(STUDENTS_PER_INSTITUTE):
        # Determine student gender
        student_gender = random.choice(['Male', 'Female'])
        
        # Get parent info
        if parent_index < len(parents_data):
            parent_info = parents_data[parent_index]
            parent_id = parent_info['parent_id']
            family_surname = parent_info['father_name'].split()[-1]
            
            # Check if this parent should have 2 children
            if parent_info['children_count'] == 2:
                existing_children = len([s for s in students_data if s['parent_id'] == parent_id])
                if existing_children >= 1:
                    parent_index += 1
            else:
                parent_index += 1
        else:
            parent_id = f"PAR_{institute_id}_{random.randint(1, len(parents_data)):04d}"
            family_surname = random.choice(indian_surnames)
        
        # Generate student name based on gender
        student_first, _ = generate_indian_name(student_gender)
        
        # Generate realistic academic data
        attendance = max(40, min(100, np.random.normal(82, 15)))
        gpa = max(1.0, min(4.0, np.random.normal(2.8, 0.6)))
        behavioral_incidents = max(0, int(np.random.poisson(1.2)))
        
        # Assign mentor (round-robin)
        mentor_index = i % MENTORS_PER_INSTITUTE
        mentor_id = f"MEN_{institute_id}_{mentor_index+1:03d}"
        
        risk_level = assign_risk_level(attendance, gpa, behavioral_incidents)
        
        # Indian academic year format
        current_year = datetime.now().year
        academic_year = f"{current_year}-{str(current_year + 1)[2:]}"
        
        students_data.append({
            'student_id': f"STU_{institute_id}_{i+1:04d}",
            'institute_id': institute_id,
            'parent_id': parent_id,
            'mentor_id': mentor_id,
            'name': f"{student_first} {family_surname}",
            'gender': student_gender,
            'grade': random.choice(grades),
            'section': random.choice(['A', 'B', 'C', 'D', 'E']),
            'roll_number': f"{random.choice(grades)[:2]}{random.randint(1001, 9999)}",
            'date_of_birth': (datetime.now() - timedelta(days=random.randint(14*365, 18*365))).strftime('%Y-%m-%d'),
            'admission_date': (datetime.now() - timedelta(days=random.randint(30, 365*2))).strftime('%Y-%m-%d'),
            'academic_year': academic_year,
            'attendance_percentage': round(attendance, 1),
            'current_gpa': round(gpa, 2),
            'behavioral_incidents': behavioral_incidents,
            'risk_level': risk_level,
            'last_assessment_score': random.randint(35, 95),
            'fees_paid': random.choice(['Yes', 'No', 'Partial']),
            'transport_mode': random.choice(['School Bus', 'Private Vehicle', 'Walking', 'Bicycle', 'Auto Rickshaw']),
            'medium_of_instruction': random.choice(['English', 'Hindi', 'Regional Language']),
            'special_needs': random.choice(['None', 'Learning Disability', 'Physical Disability', 'ADHD', 'Dyslexia']) if random.random() < 0.08 else 'None'
        })
    
    students_df = pd.DataFrame(students_data)
    
    return admin_df, mentors_df, parents_df, students_df

# Create databases for both Indian institutes
print("Creating Institute 1: Bharatiya Vidya Mandir...")
admin1_df, mentors1_df, parents1_df, students1_df = create_indian_institute_database("INST_001", "Bharatiya Vidya Mandir")

print("Creating Institute 2: Saraswati International School...")  
admin2_df, mentors2_df, parents2_df, students2_df = create_indian_institute_database("INST_002", "Saraswati International School")

print("\nIndian databases created successfully!")
print("=" * 50)