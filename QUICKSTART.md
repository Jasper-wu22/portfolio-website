# Quick Start Guide 🚀

Get your portfolio website up and running in 3 simple steps!

## Step 1: Install Dependencies ✅

Already done! Your dependencies are installed.

## Step 2: Start the Server

Run this command in your terminal:

```bash
npm start
```

Or for development with auto-restart:

```bash
npm run dev
```

## Step 3: View Your Website

Open your browser and go to:

**http://localhost:8080**

---

## What You'll See

✨ A beautiful, professional portfolio website with:
- Hero section with your name
- About section
- Skills showcase
- Projects gallery
- Working contact form

## Next Steps

### Add Your Information

1. Open `frontend/index.html`
2. Replace all text in `[brackets]` with your information:
   - Your title/profession
   - Your background story
   - Your skills
   - Your projects
   - Your contact info

### Add Your Photo

Find this section in `frontend/index.html`:

```html
<div class="image-placeholder">
    <span>Your Photo</span>
</div>
```

Replace it with:

```html
<img src="your-photo.jpg" alt="Jasper" style="width: 100%; border-radius: 20px;">
```

(Put your photo in the `frontend/` folder)

### Customize Colors

Open `frontend/styles.css` and change these at the top:

```css
:root {
    --primary-color: #6366f1;      /* Your brand color */
    --secondary-color: #8b5cf6;    /* Accent color */
}
```

Pick colors from [Coolors.co](https://coolors.co) or [Color Hunt](https://colorhunt.co)

### Test the Contact Form

1. Go to the Contact section on your site
2. Fill out the form
3. Click "Send Message"
4. Check your terminal - you'll see the message logged there!

To make it actually send emails, see the README.md file.

---

## Troubleshooting

**Port already in use?**
```bash
# Change the port in server.js or create a .env file
PORT=3001
```

**Server won't start?**
```bash
# Make sure you're in the right directory
cd "/Users/zhongwu/Documents/Websites/Liuze Wu"

# Check if Node.js is installed
node --version

# Reinstall dependencies if needed
npm install
```

**Changes not showing?**
- Refresh your browser (Cmd+R on Mac, Ctrl+R on Windows)
- Hard refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

---

## Project Structure

```
📦 Your Portfolio
├── 📁 frontend/          # Your website files
│   ├── index.html        # Main page (edit this!)
│   ├── styles.css        # All the styling
│   └── script.js         # Interactive features
├── 📄 server.js          # Backend server
├── 📄 package.json       # Dependencies
└── 📄 .env               # Configuration
```

---

## Commands Cheat Sheet

| Command | What it does |
|---------|-------------|
| `npm start` | Start the server |
| `npm run dev` | Start with auto-restart |
| `Ctrl+C` | Stop the server |

---

## Ready to Deploy?

When you're happy with your site, check out the README.md for deployment options:
- Heroku
- Vercel
- Netlify
- Your own server

---

**Need help?** All the detailed instructions are in README.md

**Have fun building your portfolio! 🎨✨**

