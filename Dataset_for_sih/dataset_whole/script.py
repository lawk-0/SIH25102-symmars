import pandas as pd
import numpy as np
import random
from datetime import datetime, timedelta
import uuid

# Set random seed for reproducibility
np.random.seed(42)
random.seed(42)

print("Regenerating comprehensive databases with authentic Indian names...")
print("=" * 70)

# Comprehensive Indian names from different regions
indian_male_names = [
    "Aarav", "Vivaan", "Aditya", "Vihaan", "Arjun", "Sai", "Reyansh", "Ayaan", "Krishna", "Ishaan",
    "Shaurya", "Atharv", "Advik", "Rudra", "Riyansh", "Rohan", "Aryan", "Karan", "Rahul", "Amit",
    "Suresh", "Deepak", "Rajesh", "Vikram", "Nitin", "Ankit", "Ashish", "Akash", "Abhishek", "Anil",
    "Raj", "Ravi", "Sanjay", "Manoj", "Vinod", "Yogesh", "Harsh", "Dev", "Yash", "Varun",
    "Arjit", "Arnav", "Dhruv", "Shivansh", "Veer", "Om", "Advait", "Kabir", "Samar", "Laksh"
]

indian_female_names = [
    "Aadhya", "Ananya", "Kavya", "Anika", "Diya", "Priya", "Saanvi", "Ishika", "Khushi", "Aarohi",
    "Sneha", "Riya", "Pooja", "Meera", "Shreya", "Preeti", "Sunita", "Kavita", "Rekha", "Sapna",
    "Neha", "Seema", "Rashmi", "Nidhi", "Swati", "Divya", "Shweta", "Anjali", "Shalini", "Manisha",
    "Deepika", "Priyanka", "Shriya", "Aditi", "Tanvi", "Sana", "Maya", "Isha", "Avni", "Tanya",
    "Kriti", "Arya", "Myra", "Kiara", "Sara", "Riya", "Navya", "Zara", "Ira", "Pihu"
]

# Combine for email generation
indian_first_names = indian_male_names + indian_female_names

# Comprehensive Indian surnames from various regions
indian_surnames = [
    # North Indian surnames
    "Sharma", "Verma", "Singh", "Kumar", "Gupta", "Agarwal", "Mishra", "Jain", "Arora", "Malhotra",
    "Kapoor", "Chopra", "Bhatia", "Sethi", "Aggarwal", "Bansal", "Goel", "Mittal", "Jindal", "Singhal",
    "Goyal", "Bhardwaj", "Saxena", "Tiwari", "Pandey", "Dubey", "Chaturvedi", "Srivastava", "Mathur", "Khanna",
    
    # South Indian surnames
    "Patel", "Shah", "Modi", "Desai", "Joshi", "Reddy", "Rao", "Nair", "Menon", "Iyer",
    "Krishnan", "Pillai", "Kumar", "Raman", "Subramanian", "Venkatesh", "Gowda", "Hegde", "Shetty", "Bhat",
    "Kamath", "Kulkarni", "Joshi", "Deshpande", "Patil", "Shinde", "Jadhav", "More", "Pawar", "Kale",
    
    # East Indian surnames
    "Das", "Roy", "Banerjee", "Chakraborty", "Mukherjee", "Sen", "Ghosh", "Bose", "Saha", "Dutta",
    "Bhattacharya", "Ganguly", "Mitra", "Chowdhury", "Biswas", "Sarkar", "Mandal", "Mondal", "Pal", "Kar",
    
    # West Indian surnames
    "Mehta", "Thakkar", "Trivedi", "Vyas", "Dave", "Shukla", "Parikh", "Bhatt", "Panchal", "Suthar"
]

# Updated constants
STUDENTS_PER_INSTITUTE = 2000
STUDENTS_PER_MENTOR = 85
MENTORS_PER_INSTITUTE = int(np.ceil(STUDENTS_PER_INSTITUTE / STUDENTS_PER_MENTOR))

print(f"Students per institute: {STUDENTS_PER_INSTITUTE}")
print(f"Students per mentor: {STUDENTS_PER_MENTOR}")
print(f"Mentors per institute: {MENTORS_PER_INSTITUTE}")
print()

# Indian subjects and educational context
indian_subjects = ["Mathematics", "Science", "English", "Hindi", "Social Studies", "Computer Science", 
                  "Physics", "Chemistry", "Biology", "Sanskrit", "Economics", "Accountancy"]
grades = ["9th", "10th", "11th", "12th"]
risk_levels = ["Low", "Medium", "High"]

# Indian cities for addresses
indian_cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad", 
                "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Indore", "Bhopal", "Visakhapatnam", "Patna"]

# Indian occupations
indian_occupations_male = ["Engineer", "Doctor", "Teacher", "Businessman", "Government Employee", "Farmer", 
                          "Shopkeeper", "Lawyer", "Accountant", "Bank Manager", "IAS Officer", "Police Officer", 
                          "Contractor", "Software Developer", "Consultant"]

indian_occupations_female = ["Homemaker", "Teacher", "Nurse", "Engineer", "Doctor", "Government Employee", 
                           "Businesswoman", "Lawyer", "Software Developer", "Bank Employee", "Principal", 
                           "Professor", "Consultant", "Designer"]

def generate_indian_name(gender=None):
    """Generate authentic Indian names"""
    if gender == 'Male':
        first_name = random.choice(indian_male_names)
    elif gender == 'Female':
        first_name = random.choice(indian_female_names)
    else:
        first_name = random.choice(indian_first_names)
    
    last_name = random.choice(indian_surnames)
    return first_name, last_name

def generate_realistic_email(first_name, last_name, domain_suffix=""):
    """Generate realistic email addresses with Indian context"""
    email_formats = [
        f"{first_name.lower()}.{last_name.lower()}",
        f"{first_name.lower()}{last_name.lower()}",
        f"{first_name.lower()}_{last_name.lower()}",
        f"{first_name[0].lower()}{last_name.lower()}",
        f"{first_name.lower()}{random.randint(1, 999)}"
    ]
    domains = ["gmail.com", "yahoo.com", "outlook.com", "rediffmail.com", "hotmail.com", "yahoo.co.in"]
    base_email = random.choice(email_formats)
    domain = random.choice(domains)
    return f"{base_email}{domain_suffix}@{domain}"

def generate_indian_phone_number():
    """Generate Indian phone numbers with proper format"""
    prefixes = ["98", "97", "96", "95", "94", "93", "92", "91", "90", "89", "88", "87", "86", "85", "84", "83", "82", "81", "80", "79"]
    prefix = random.choice(prefixes)
    number = ''.join([str(random.randint(0, 9)) for _ in range(8)])
    return f"+91-{prefix}{number}"

def generate_indian_address(city):
    """Generate Indian-style addresses"""
    house_types = ["House No.", "Flat No.", "Plot No.", "Villa No."]
    area_types = ["Sector", "Block", "Colony", "Nagar", "Vihar", "Enclave", "Extension", "Market"]
    
    house_type = random.choice(house_types)
    house_num = random.randint(1, 999)
    area_type = random.choice(area_types)
    area_num = random.randint(1, 50)
    
    return f"{house_type} {house_num}, {area_type} {area_num}, {city}"

def assign_risk_level(attendance, gpa, behavioral_score):
    """Assign risk level based on multiple factors"""
    risk_score = 0
    
    # Attendance factor
    if attendance < 70:
        risk_score += 3
    elif attendance < 85:
        risk_score += 2
    elif attendance < 95:
        risk_score += 1
    
    # GPA factor (converted to Indian percentage system understanding)
    if gpa < 2.0:  # Below 50%
        risk_score += 3
    elif gpa < 2.5:  # Below 62.5%
        risk_score += 2
    elif gpa < 3.0:  # Below 75%
        risk_score += 1
    
    # Behavioral factor
    if behavioral_score > 5:
        risk_score += 3
    elif behavioral_score > 3:
        risk_score += 2
    elif behavioral_score > 1:
        risk_score += 1
    
    if risk_score >= 6:
        return "High"
    elif risk_score >= 3:
        return "Medium"
    else:
        return "Low"

print("Starting database generation with authentic Indian names...")
print()