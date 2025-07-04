# CRM Super Mini Lite

A lightweight Customer Relationship Management (CRM) prototype built with HTML, CSS, and JavaScript.

## How to Run Locally

### Option 1: Using a Local Web Server (Recommended)

Since the application uses `fetch()` to load components, you need to serve it through a web server to avoid CORS issues.

#### Using Python (if you have Python installed):

\`\`\`bash
# For Python 3
python -m http.server 8000

# For Python 2
python -m SimpleHTTPServer 8000
\`\`\`

Then open your browser and go to: `http://localhost:8000`

#### Using Node.js (if you have Node.js installed):

\`\`\`bash
# Install a simple HTTP server globally
npm install -g http-server

# Run the server
http-server
\`\`\`

Then open your browser and go to: `http://localhost:8080`

#### Using PHP (if you have PHP installed):

\`\`\`bash
php -S localhost:8000
\`\`\`

Then open your browser and go to: `http://localhost:8000`

### Option 2: Using Live Server Extension (VS Code)

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 3: Using Browser (Limited Functionality)

You can open `index.html` directly in your browser, but some features may not work due to CORS restrictions when loading components.

## Project Structure

\`\`\`
├── index.html          # Main entry point
├── styles.css          # Global styles
├── script.js           # Main JavaScript functionality
├── sidebar.html        # Sidebar component
├── dashboard.html      # Dashboard page component
├── visit-planning.html # Visit planning page component
├── sales-plans.html    # Sales plans page component
├── customer-profile.html # Customer profile page component
├── login.html          # Login page component
├── modals.html         # All modal components
└── README.md           # This file
\`\`\`

## Features

- **Dashboard**: Overview of customers, visits, and sales plans
- **Customer Management**: Add, view, and manage customer information
- **Visit Planning**: Schedule and track customer visits
- **Sales Plans**: Create and manage sales opportunities
- **Customer Profiles**: Detailed customer information with tabs for different data
- **Pain Points Analysis**: Value chain-based customer analysis
- **Responsive Design**: Works on desktop and mobile devices

## Login Credentials

- **Email**: budi.am@telkom.co.id
- **Password**: password

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS (via CDN)
- **Icons**: Heroicons (inline SVG)
- **Fonts**: Inter (Google Fonts)

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Development Notes

- The application is built as a prototype/demo
- No backend database - all data is stored in memory
- Uses modular HTML components loaded via fetch API
- Responsive design with mobile-first approach
- Uses modern JavaScript features (ES6+)
