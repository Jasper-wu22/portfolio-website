const express = require('express');
const path = require('path');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, 'frontend')));

// API Routes

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running' });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Validate input
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: 'Please fill in all fields'
            });
        }

        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Please enter a valid email address'
            });
        }

        // Configure nodemailer (you'll need to set up your email credentials)
        // For now, we'll just log the message
        console.log('Contact Form Submission:');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        console.log('---');

        // Uncomment and configure this section when you're ready to send actual emails
        /*
        const transporter = nodemailer.createTransport({
            service: 'gmail', // or your email service
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `Portfolio Contact: ${name}`,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        };

        await transporter.sendMail(mailOptions);
        */

        res.json({
            success: true,
            message: 'Thank you for your message! I\'ll get back to you soon.'
        });

    } catch (error) {
        console.error('Error processing contact form:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred. Please try again later.'
        });
    }
});

// Get portfolio data endpoint (optional - for future dynamic content)
app.get('/api/portfolio', (req, res) => {
    const portfolioData = {
        name: {
            english: 'Liuze Wu',
            chinese: 'Liuze Wu',
            chineseCharacters: '吴刘泽',
            full: 'Liuze Wu'
        },
        age: 13,
        title: 'Developer & National Tennis Champion | Yonex Sponsored Athlete',
        location: 'Toronto, Canada',
        sponsorship: 'Yonex',
        about: {
            description: 'I\'m a 13-year-old developer and national tennis champion from Toronto, Canada. My passion lies in creating innovative software solutions using multiple programming languages while achieving excellence on the tennis court.',
            stats: {
                programmingLanguages: 4,
                tennisRating: 'UTR 8',
                nationalTitles: 3
            }
        },
        tennisAchievements: [
            {
                year: 2024,
                title: 'National Tennis Open A1000 Baoshan Singles Champion'
            },
            {
                year: 2024,
                title: 'National Tennis Open A1200 Jiaxing Doubles Champion'
            },
            {
                year: 2020,
                title: 'Shanghai 10th Games Team Gold Medal'
            },
            {
                year: 2020,
                title: 'Shanghai 10th Games Doubles Silver Medal'
            }
        ],
        skills: [
            {
                category: 'Programming Languages',
                icon: '{ }',
                description: 'Building robust solutions with multiple technologies',
                items: [
                    'JavaScript (Node.js, Express, Frontend)',
                    'Python (Development & Scripting)',
                    'Java (Object-Oriented Programming)',
                    'C# (Application Development)'
                ]
            },
            {
                category: 'Web Development',
                icon: '</>',
                description: 'Creating modern, full-stack applications',
                items: [
                    'Full-Stack Development',
                    'RESTful API Design',
                    'Responsive Web Design',
                    'Database Management'
                ]
            },
            {
                category: 'Tennis Achievements',
                icon: '★',
                description: 'Yonex sponsored athlete & national champion',
                items: [
                    'Yonex Sponsored Athlete',
                    '2024 National Open A1000 Singles Champion',
                    '2024 National Open A1200 Doubles Champion',
                    '2020 Shanghai Games Team Gold Medal',
                    '2020 Shanghai Games Doubles Silver Medal',
                    'UTR 8 Rating'
                ]
            }
        ],
        projects: [
            {
                name: 'Wukong Salary Calculator',
                grade: '8th Grade',
                description: 'Financial management system for Wukong Education with automated salary calculations, payroll processing, and comprehensive financial tracking capabilities.',
                tags: ['Finance', 'Automation'],
                link: 'http://wukong.zyvior.com',
                status: 'completed'
            },
            {
                name: 'ACC Admin Assistant',
                grade: '8th Grade',
                description: 'Administrative automation tool designed to streamline workflow management and administrative tasks with intelligent assistance features.',
                tags: ['Admin Tool', 'Productivity'],
                link: '#',
                status: 'completed'
            },
            {
                name: 'dao3.fun Space Werewolf',
                grade: '4th Grade',
                description: 'Multiplayer space-themed social deduction game inspired by Among Us. My first major development project showcasing early programming skills and game design.',
                tags: ['Game', 'Multiplayer'],
                link: 'http://dao3.fun',
                status: 'completed'
            },
            {
                name: 'Arplox',
                grade: '8th Grade',
                description: 'A game development platform currently under construction. Creating tools and resources for game developers with modern web technologies and interactive features.',
                tags: ['Game Dev', 'Platform'],
                link: 'http://arplox.zyvior.com',
                status: 'in-development'
            }
        ],
        contact: {
            email: 'jasperwu33@gmail.com',
            wechat: 'jasper-wu22',
            location: 'Toronto, Canada',
            social: {
                github: 'https://github.com/Jasper-wu22',
                email: 'mailto:jasperwu33@gmail.com'
            }
        }
    };

    res.json(portfolioData);
});

// Serve the frontend for all other routes (SPA support)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Something went wrong!'
    });
});

// Start server
app.listen(PORT, "127.0.0.1", () => {
    console.log(`
╔═══════════════════════════════════════════╗
║                                           ║
║   🚀 Portfolio Server Running!           ║
║                                           ║
║   📍 Local:    http://localhost:${PORT}     ║
║   📍 Network:  http://0.0.0.0:${PORT}       ║
║                                           ║
║   Press Ctrl+C to stop                    ║
║                                           ║
╚═══════════════════════════════════════════╝
    `);
});

module.exports = app;

