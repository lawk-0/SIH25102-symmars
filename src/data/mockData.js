// Mock data for the Student Early Warning System
export const mockData = {
  students: [
    {
      id: 1,
      name: "Emma Johnson",
      grade: "8th Grade",
      riskLevel: "HIGH RISK",
      attendance: 65,
      gpa: 2.1,
      gpaChange: "declining",
      recentScore: 58,
      activeAlerts: 2,
      status: "Declining",
      mentor: "Ms. Sarah Wilson",
      lastActive: "3 days ago",
      subjects: ["Math", "Science", "English"],
      profileImage: null
    },
    {
      id: 2,
      name: "Marcus Chen", 
      grade: "8th Grade",
      riskLevel: "MEDIUM RISK",
      attendance: 82,
      gpa: 2.8,
      gpaChange: "stable",
      recentScore: 74,
      activeAlerts: 1,
      status: "Stable",
      mentor: "Ms. Sarah Wilson",
      lastActive: "Today",
      subjects: ["Math", "Science", "English"],
      profileImage: null
    },
    {
      id: 3,
      name: "Sophia Rodriguez",
      grade: "9th Grade", 
      riskLevel: "LOW RISK",
      attendance: 94,
      gpa: 3.6,
      gpaChange: "improving",
      recentScore: 89,
      activeAlerts: 0,
      status: "Improving",
      mentor: "Mr. David Brown",
      lastActive: "Today",
      subjects: ["Physics", "Chemistry", "Math"],
      profileImage: null
    },
    {
      id: 4,
      name: "Jamal Williams",
      grade: "9th Grade",
      riskLevel: "HIGH RISK", 
      attendance: 71,
      gpa: 1.9,
      gpaChange: "declining",
      recentScore: 52,
      activeAlerts: 3,
      status: "Critical",
      mentor: "Mr. David Brown",
      lastActive: "2 days ago",
      subjects: ["Physics", "Chemistry", "Math"],
      profileImage: null
    },
    {
      id: 5,
      name: "Isabella Martinez",
      grade: "7th Grade",
      riskLevel: "LOW RISK",
      attendance: 96,
      gpa: 3.8,
      gpaChange: "stable", 
      recentScore: 92,
      activeAlerts: 0,
      status: "Excellent",
      mentor: "Ms. Jennifer Lee",
      lastActive: "Today",
      subjects: ["Math", "Science", "History"],
      profileImage: null
    },
    {
      id: 6,
      name: "Tyler Anderson",
      grade: "7th Grade",
      riskLevel: "MEDIUM RISK",
      attendance: 78,
      gpa: 2.6,
      gpaChange: "improving",
      recentScore: 68,
      activeAlerts: 1,
      status: "Improving",
      mentor: "Ms. Jennifer Lee", 
      lastActive: "1 day ago",
      subjects: ["Math", "Science", "History"],
      profileImage: null
    },
    {
      id: 7,
      name: "Aisha Patel",
      grade: "8th Grade",
      riskLevel: "HIGH RISK",
      attendance: 58,
      gpa: 1.7,
      gpaChange: "declining",
      recentScore: 45,
      activeAlerts: 4,
      status: "Critical",
      mentor: "Ms. Sarah Wilson",
      lastActive: "5 days ago",
      subjects: ["Math", "Science", "English"],
      profileImage: null
    },
    {
      id: 8,
      name: "Kevin Liu",
      grade: "9th Grade", 
      riskLevel: "LOW RISK",
      attendance: 91,
      gpa: 3.4,
      gpaChange: "stable",
      recentScore: 85,
      activeAlerts: 0,
      status: "Good",
      mentor: "Mr. David Brown",
      lastActive: "Today",
      subjects: ["Physics", "Chemistry", "Math"],
      profileImage: null
    }
  ],

  alerts: [
    {
      id: 1,
      studentName: "Emma Johnson", 
      message: "missed 3 consecutive days",
      timestamp: "2 hours ago",
      type: "attendance",
      severity: "High",
      isRead: false
    },
    {
      id: 2,
      studentName: "Jamal Williams",
      message: "failed Math test",
      timestamp: "1 day ago", 
      type: "academic",
      severity: "Medium",
      isRead: false
    },
    {
      id: 3,
      studentName: "Isabella Martinez",
      message: "attendance below 60%",
      timestamp: "3 days ago",
      type: "attendance", 
      severity: "High",
      isRead: true
    },
    {
      id: 4,
      studentName: "Tyler Anderson",
      message: "GPA dropped below 2.0",
      timestamp: "1 week ago",
      type: "academic",
      severity: "Medium",
      isRead: false
    }
  ],

  systemStats: {
    totalStudents: 8,
    highRiskStudents: 3,
    mediumRiskStudents: 3,
    lowRiskStudents: 2,
    averageAttendance: 79.4,
    averageGPA: 2.7,
    alertsToday: 5,
    activeAlerts: 12
  },

  parentChild: {
    childName: "Emma Johnson",
    childGrade: "8th Grade",
    mentorName: "Ms. Sarah Wilson",
    mentorContact: "sarah.wilson@school.edu",
    mentorPhone: "(555) 123-4567",
    currentAttendance: 65,
    currentGPA: 2.1,
    riskStatus: "HIGH RISK",
    recentScores: [
      { subject: "Math", score: 58, status: "Below Average", date: "2024-01-15" },
      { subject: "Science", score: 62, status: "Below Average", date: "2024-01-12" }, 
      { subject: "English", score: 71, status: "Average", date: "2024-01-10" }
    ],
    trend: "declining",
    alerts: [
      "Missed 3 consecutive days - immediate attention required",
      "Math grade dropped below passing threshold",
      "Overall attendance below 70%"
    ],
    mentorNotes: [
      "Emma has been struggling with consistent attendance. Please ensure she gets adequate rest and support at home.",
      "Her math performance needs additional tutoring. I recommend after-school help sessions.",
      "Please schedule a parent-teacher conference to discuss intervention strategies."
    ],
    upcomingAssignments: [
      { subject: "Math", assignment: "Chapter 5 Test", dueDate: "2024-01-20" },
      { subject: "Science", assignment: "Lab Report", dueDate: "2024-01-22" },
      { subject: "English", assignment: "Essay Draft", dueDate: "2024-01-25" }
    ]
  },

  grades: ["All Grades", "7th Grade", "8th Grade", "9th Grade"],
  subjects: ["All Subjects", "Math", "Science", "English", "Physics", "Chemistry", "History"],
  riskLevels: ["All Risk Levels", "HIGH RISK", "MEDIUM RISK", "LOW RISK"],

  mentors: [
    {
      id: 1,
      name: "Ms. Sarah Wilson",
      email: "sarah.wilson@school.edu",
      subjects: ["Math", "Science", "English"],
      students: [1, 2, 7]
    },
    {
      id: 2,
      name: "Mr. David Brown",
      email: "david.brown@school.edu", 
      subjects: ["Physics", "Chemistry", "Math"],
      students: [3, 4, 8]
    },
    {
      id: 3,
      name: "Ms. Jennifer Lee",
      email: "jennifer.lee@school.edu",
      subjects: ["Math", "Science", "History"], 
      students: [5, 6]
    }
  ]
};