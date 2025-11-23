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
            english: 'Jasper Wu',
            chinese: 'Liuze Wu',
            chineseCharacters: '吴刘泽',
            full: 'Jasper Wu (Liuze Wu)'
        },
        age: 13,
        title: 'Developer & Competitive Tennis Player',
        location: 'Toronto, Canada',
        about: {
            description: 'I\'m a 13-year-old developer and competitive tennis player from Toronto, Canada. My passion lies in creating innovative software solutions using multiple programming languages while maintaining excellence on the tennis court with a UTR 8 rating.',
            stats: {
                programmingLanguages: 4,
                tennisRating: 'UTR 8',
                passion: 'Infinite'
            }
        },
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
                category: 'Tennis Excellence',
                icon: '★',
                description: 'Competitive player with proven tournament success',
                items: [
                    'UTR 8 Rating',
                    'Tournament Winner (Toronto)',
                    'Strategic Game Analysis',
                    'Mental Toughness'
                ]
            }
        ],
        projects: [
            {
                name: 'Wukong Education Calculator',
                description: 'A financial management tool for Wukong Education. Features automated money calculations, data processing, and intuitive interface for educational financial tracking.',
                tags: ['Finance Tool', 'Calculator'],
                link: 'http://wukong.zyvior.com',
                status: 'completed'
            },
            {
                name: 'Arplox',
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

