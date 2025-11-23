# Personal Portfolio Website

A modern, professional full-stack portfolio website for Jasper with Node.js backend and responsive frontend.

## 🚀 Features

- **Full-Stack Architecture**: Node.js/Express backend with static frontend
- **Working Contact Form**: Real API integration for contact form submissions
- **Responsive Design**: Works perfectly on all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Easy to Customize**: Simple structure with clear placeholders for your content
- **API Endpoints**: RESTful API for portfolio data and contact form
- **Email Integration**: Ready-to-configure email sending with Nodemailer

## 📁 Project Structure

```
├── server.js              # Express backend server
├── package.json           # Node.js dependencies
├── .env.example          # Environment variables template
├── .gitignore            # Git ignore rules
├── README.md             # This file
└── frontend/             # Frontend files
    ├── index.html        # Main HTML file
    ├── styles.css        # All styling and design
    └── script.js         # Interactive features and API calls
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Configure Environment Variables

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. (Optional) Edit `.env` to add your email credentials if you want to enable email sending:
```
PORT=3000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
```

### Step 3: Start the Server

For development (with auto-restart):
```bash
npm run dev
```

For production:
```bash
npm start
```

The server will start at `http://localhost:3000`

## 🎨 Sections

1. **Hero Section**: Eye-catching introduction with your name and title
2. **About**: Tell your story and showcase your background
3. **Skills**: Display your technical and soft skills in organized categories
4. **Projects**: Showcase your best work with descriptions and tags
5. **Contact**: Working contact form with backend API integration

## 📡 API Endpoints

### GET `/api/health`
Health check endpoint to verify server is running.

**Response:**
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

### POST `/api/contact`
Submit contact form data.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to connect!"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your message! I'll get back to you soon."
}
```

### GET `/api/portfolio`
Get portfolio data (for future use with dynamic content).

**Response:**
```json
{
  "name": "Jasper",
  "title": "Your Title",
  "about": { ... },
  "skills": [ ... ],
  "projects": [ ... ],
  "contact": { ... }
}
```

## ✏️ How to Customize

### 1. Update Your Information

Open `frontend/index.html` and replace the placeholder text marked with `[brackets]`:

- **Hero Section**: Update your title and description
- **About Section**: Add your photo and background story
- **Skills Section**: Replace with your actual skills
- **Projects Section**: Add your projects with images and descriptions
- **Contact Section**: Update your email and social media links

### 2. Add Your Photo

Replace this line in the About section:
```html
<div class="image-placeholder">
    <span>Your Photo</span>
</div>
```

With:
```html
<img src="path/to/your/photo.jpg" alt="Jasper" style="width: 100%; border-radius: 20px;">
```

### 3. Customize Colors

In `frontend/styles.css`, modify the CSS variables:
```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --primary-dark: #4f46e5;       /* Darker shade */
    --secondary-color: #8b5cf6;    /* Accent color */
}
```

## 📧 Email Setup

To enable actual email sending through the contact form:

1. Open `server.js` and find the commented email configuration section
2. Uncomment the Nodemailer code
3. Set up your email credentials in `.env`:

**For Gmail:**
- Enable 2-factor authentication on your Google account
- Generate an "App Password" from [Google Account Settings](https://myaccount.google.com/security)
- Use that app password in `.env` (not your regular password)

**For other email services:**
- Update the `service` field in the transporter configuration
- Or use SMTP settings for custom email servers

## 🌐 Deployment

### Deploy to Heroku:
```bash
heroku create your-portfolio-name
git push heroku main
```

### Deploy to Vercel/Netlify:
- These platforms support Node.js applications
- Connect your GitHub repository
- Set environment variables in the platform's dashboard

### Deploy to a VPS (Ubuntu):
```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone your repository
git clone your-repo-url
cd your-repo

# Install dependencies
npm install

# Use PM2 for process management
sudo npm install -g pm2
pm2 start server.js
pm2 save
pm2 startup
```

## 🔧 Development Scripts

- `npm start` - Start the production server
- `npm run dev` - Start development server with auto-restart (requires nodemailer)

## 💡 Features Explained

### Contact Form
- Client-side validation
- Server-side validation
- Beautiful notification system
- Email integration ready
- Error handling

### Responsive Design
- Mobile-first approach
- Breakpoints: Mobile (<768px), Tablet (768-1199px), Desktop (1200px+)
- Touch-friendly navigation

### Performance
- Optimized animations
- Lazy loading support ready
- Minimal dependencies
- Fast load times

## 🛡️ Security

- CORS enabled for API security
- Input validation on both client and server
- Environment variables for sensitive data
- Express security best practices

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📄 License

MIT License - feel free to use this for your personal portfolio.

---

**Ready to launch?** 

1. Install dependencies: `npm install`
2. Start the server: `npm start`
3. Open `http://localhost:3000`
4. Customize your content in `frontend/index.html`
5. Deploy to your favorite hosting platform!

**Need help?** Check the code comments or reach out anytime! 🚀
