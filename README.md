# Student Early Warning System

A comprehensive React-based student risk monitoring dashboard with dark theme UI.

## Features

- **Multi-Role Authentication**: Admin, Mentor, and Parent dashboards
- **Dark Theme UI**: Modern, professional interface
- **Student Risk Monitoring**: Color-coded risk levels with detailed analytics
- **Real-time Alerts**: Notification system for immediate attention
- **Advanced Filtering**: Filter by grade, risk level, and subject
- **Responsive Design**: Works on desktop, tablet, and mobile

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Open in Browser**
   - Navigate to `http://localhost:3000`

## Login Credentials

For testing, use these credentials:
- **Username**: demo
- **Password**: demo
- **Role**: Select Admin, Mentor, or Parent

## Project Structure

```
src/
├── components/        # Reusable React components
│   ├── shared/       # Common UI components
│   ├── forms/        # Form components
│   ├── student/      # Student-related components
│   ├── admin/        # Admin-specific components
│   └── alerts/       # Alert and notification components
├── pages/            # Main dashboard pages
├── contexts/         # React Context providers
├── hooks/            # Custom React hooks
├── utils/            # Utility functions
├── data/             # Mock data
└── styles/           # CSS styles
```

## Dark Theme

The application uses a dark theme with:
- Dark backgrounds (#1a1d23, #2d3748)
- Colored risk indicators (red, yellow, green)
- Modern card-based layout
- Subtle shadows and borders

## Features by Role

### Admin Dashboard
- System statistics overview
- User management
- Configuration settings
- System alerts

### Mentor Dashboard  
- Student risk overview
- Detailed student cards
- Filtering and search
- Alert management

### Parent Dashboard
- Child progress tracking
- Attendance monitoring
- Academic performance
- Communication tools

## Technology Stack

- React 18
- React Router
- CSS3 with CSS Variables
- Font Awesome Icons
- Mock Data (no backend required)

## Development

This project was bootstrapped with Create React App and follows React best practices for component organization and state management.
