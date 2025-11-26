// Hero Slideshow
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Auto-advance slides every 4 seconds
setInterval(nextSlide, 4000);

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Only prevent default for same-page anchors
        if (href.includes('#')) {
            e.preventDefault();
            const targetId = href.split('#')[1];
            const target = document.getElementById(targetId);
            if (target) {
                const offset = 100; // navbar height
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
});

// Contact card hover effects
const contactCards = document.querySelectorAll('.contact-card');
contactCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Project card click handlers - use direct event listeners
const projectCards = document.querySelectorAll('.project-card[data-project]');
projectCards.forEach(card => {
    card.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const projectType = this.getAttribute('data-project');
        console.log('Project card clicked:', projectType);
        if (projectType) {
            openProjectModal(projectType);
        }
    });
});

// Skill card click handlers - use direct event listeners  
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const onclickAttr = this.getAttribute('onclick');
        if (onclickAttr) {
            const match = onclickAttr.match(/openSkillModal\('(\w+)'\)/);
            console.log('Skill card clicked:', match ? match[1] : 'no match');
            if (match) {
                openSkillModal(match[1]);
            }
        }
    });
});

// Skill Modal Functions
const skillDetails = {
    programming: {
        icon: '{ }',
        title: 'Programming Languages',
        sections: [
            {
                title: 'JavaScript - Full-Stack Mastery',
                content: 'Expert in modern JavaScript (ES6+) for both frontend and backend development. On the backend, I\'ve built robust Node.js applications using Express.js framework, implementing RESTful APIs with proper routing, middleware, authentication, and error handling. Frontend expertise includes DOM manipulation, event handling, async/await patterns, Promises, and fetch API for seamless client-server communication. I understand JavaScript\'s event loop, closures, prototypal inheritance, and functional programming concepts. Projects include: Wukong Education salary calculator (live at wukong.zyvior.com), Arplox game development platform (arplox.zyvior.com), and this portfolio website with interactive features.',
                image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&h=600&fit=crop'
            },
            {
                title: 'Python - Versatile Development',
                content: 'Comprehensive Python knowledge spanning application development, scripting, automation, and data processing. Skilled in using Python for creating practical utilities, automating repetitive tasks, file I/O operations, data structure manipulation (lists, dictionaries, sets), and object-oriented programming. Experience with Python\'s standard library, exception handling, and writing clean, maintainable code following PEP 8 style guidelines. Built the Conversation Saver MCP Tool for managing and saving conversations, demonstrating practical application of Python for real-world utility development. Comfortable with virtual environments, package management with pip, and writing modular, reusable code.',
                image: 'https://images.unsplash.com/photo-1526379879527-8559ecfca2be?w=800&h=600&fit=crop'
            },
            {
                title: 'Java - Object-Oriented Excellence',
                content: 'Strong foundation in Java and object-oriented programming principles (encapsulation, inheritance, polymorphism, abstraction). Developed complex applications including the Space Werewolf multiplayer game (dao3.fun) in 4th grade, showcasing early understanding of game logic, state management, and user interaction. Proficient in Java syntax, data structures (ArrayList, HashMap), exception handling, file I/O, and multi-threading concepts. Understanding of design patterns (Singleton, Factory, Observer) and their practical applications. Experience with both console and graphical applications, demonstrating versatility in Java development.',
                image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=600&fit=crop'
            },
            {
                title: 'C# - Professional Application Development',
                content: 'Proficient in C# for building professional-grade applications, particularly in business and utility contexts. Strong understanding of C# syntax, .NET framework, Windows Forms or WPF for GUI applications, LINQ for data queries, async/await for asynchronous programming, and proper memory management. Experience with event-driven programming, delegates, and creating maintainable, scalable application architectures. Built the ACC Admin Assistant tool for workflow automation, demonstrating practical business application development skills with real-world utility and professional-grade code quality.',
                image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop'
            }
        ],
        experience: 'Started programming journey in 4th grade with the dao3.fun Space Werewolf game project, demonstrating early aptitude for software development. Over the years, progressed from basic game development to creating professional-grade applications serving real users in production environments. By 8th grade, developed enterprise-level software including financial management systems (Wukong Education Calculator), engineering tools (Geotechnical BIM with complex calculations), and administrative platforms (ACC Admin Assistant). Self-taught and continuously learning, with hands-on experience deploying and maintaining live web applications. Strong problem-solving abilities, debugging skills, and understanding of software development lifecycle from concept to deployment.'
    },
    web: {
        icon: '</>',
        title: 'Web Development',
        sections: [
            {
                title: 'Full-Stack Development - Complete Web Solutions',
                content: 'Comprehensive expertise in building complete web applications from scratch. Backend development includes Node.js with Express.js for server-side logic, API development, middleware implementation, session management, and authentication systems. Frontend development covers HTML5 semantic markup, modern CSS3 (including animations, transitions, and transforms), and vanilla JavaScript for interactive features. Understanding of the entire request-response cycle, client-server architecture, state management, and data flow. Built production applications with proper separation of concerns, modular code structure, and scalable architecture. Experience with development tools including npm/package managers, Git version control (GitHub), and deployment platforms. Created multiple live applications serving real users with reliable performance and professional user experiences.',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
            },
            {
                title: 'RESTful API Design & Implementation',
                content: 'Expert in designing and implementing RESTful APIs following industry best practices. Built APIs with proper HTTP methods (GET, POST, PUT, DELETE), status codes, error handling, and response formatting. Implemented features including input validation, data sanitization, CORS configuration for cross-origin requests, and comprehensive error handling with meaningful error messages. Experience with API endpoint organization, route parameterization, query parameters, and request body parsing. Built contact form API with email integration (Nodemailer), portfolio data endpoints, and health check endpoints. Understanding of API security principles, authentication mechanisms, and protecting sensitive endpoints. APIs serve multiple frontend applications with reliable performance and proper documentation.',
                image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop'
            },
            {
                title: 'Responsive Web Design - Mobile-First Approach',
                content: 'Expert in creating responsive, mobile-first websites that provide optimal user experience across all devices (desktop, tablet, mobile). Proficient in modern CSS layout techniques including CSS Grid for two-dimensional layouts, Flexbox for one-dimensional layouts, and media queries for breakpoint management. Understanding of responsive design principles: fluid grids, flexible images, viewport meta tags, and relative units (rem, em, %, vw/vh). Built websites with smooth animations using CSS transitions and transforms, hover effects for interactivity, and touch-friendly interfaces for mobile devices. Experience with cross-browser compatibility, performance optimization, and accessibility best practices. Created navigation systems that adapt to different screen sizes, including mobile hamburger menus and responsive navigation bars.',
                image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop'
            },
            {
                title: 'Database Management & Data Handling',
                content: 'Experience with database design, data modeling, and efficient data storage solutions. Understanding of relational database concepts including tables, relationships (one-to-many, many-to-many), primary/foreign keys, and normalization. Skilled in writing queries for data retrieval, insertion, updates, and deletion. Experience with JSON data structures for API responses and configuration. Built applications requiring complex data handling including the Wukong Education salary calculator with financial data processing, geotechnical BIM software with engineering calculation storage, and admin systems with user data management. Understanding of data validation, sanitization for security, and efficient data retrieval patterns.',
                image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=600&fit=crop'
            },
            {
                title: 'Modern Development Workflow',
                content: 'Proficient in professional development workflows and tools. Expert with Git version control for code management, branching strategies, commit best practices, and collaborative development through GitHub. Experience with npm for package management, dependency handling, and script automation. Understanding of project structure organization, environment variables for configuration, and deployment processes. Built this portfolio with proper .gitignore configuration, README documentation, and organized file structure. Familiar with debugging techniques, browser developer tools, server logs analysis, and systematic problem-solving approaches.',
                image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop'
            }
        ],
        experience: 'Built and deployed multiple production websites serving real users. Live projects include wukong.zyvior.com (Wukong Education salary calculator with complex financial logic), arplox.zyvior.com (game development platform with AI agents), and this portfolio website (portfolio-website on GitHub). Experience spans the complete development lifecycle from initial planning and design to deployment and maintenance. All projects feature responsive design, professional UI/UX, working APIs, and are hosted on custom domains. Demonstrated ability to translate user requirements into functional, scalable web applications. Comfortable working independently and managing entire projects from conception to production deployment.'
    },
    ai: {
        icon: '◆',
        title: 'AI Agents & MCP Tools',
        sections: [
            {
                title: 'AI Agent Development',
                content: 'Building intelligent AI agents integrated into applications. Developed AI agents for Arplox game development platform that assist developers with code generation, debugging suggestions, and game design recommendations. These agents use natural language processing to understand developer intent and provide contextual assistance. Experience includes prompt engineering, agent behavior design, context management, and creating conversational interfaces that enhance user productivity.',
                image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop'
            },
            {
                title: 'MCP (Model Context Protocol) Tools',
                content: 'Expert in creating MCP tools that extend AI capabilities with custom functionality. MCP tools allow AI systems to access external data, perform specialized operations, and maintain context across conversations. Built the Dialog Manager MCP tool using Python, demonstrating understanding of MCP architecture, protocol implementation, and building tools that enhance AI assistant capabilities.',
                image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop'
            },
            {
                title: 'Dialog Manager MCP Tool',
                content: 'Created a sophisticated Dialog Manager MCP tool that enables saving, loading, and managing conversation contexts. This tool allows AI assistants to preserve important discussions, retrieve past conversations, tag and organize dialogue history, and maintain context across sessions. Implemented using Python with proper data serialization, file management, search functionality, and metadata handling. The tool demonstrates practical application of MCP protocol for conversation management and persistent storage.',
                image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop'
            },
            {
                title: 'Integration & Automation',
                content: 'Skilled in integrating AI capabilities into existing applications and workflows. Experience includes connecting AI agents to application backends, implementing intelligent automation features, managing API interactions with AI services, and designing user interfaces for AI-powered tools. Understanding of how to make AI practical and useful rather than just impressive, focusing on solving real problems and enhancing user experience.',
                image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop'
            }
        ],
        experience: 'Advanced into AI development by building practical tools that solve real problems. The Dialog Manager MCP tool is actively used for conversation management and demonstrates ability to implement complex protocols. AI agents in Arplox assist game developers with intelligent suggestions and automation. This represents the cutting edge of my technical skills, combining programming expertise with understanding of AI systems, natural language processing, and intelligent automation. Continuously learning about AI capabilities, limitations, and best practices for building responsible, useful AI-powered applications.'
    },
    tennis: {
        icon: '★',
        title: 'Tennis Achievements',
        sections: [
            {
                title: 'Yonex Sponsorship',
                content: 'Proud to be sponsored by Yonex, one of the world\'s leading tennis equipment manufacturers. This sponsorship recognizes my achievements and potential in competitive tennis.',
                image: 'images/397c664f624995fe3b81c21c42024842.jpg'
            },
            {
                title: '2024 National Tennis Open A1000 - Singles Champion (Baoshan)',
                content: 'Won the singles championship at the prestigious A1000 level national tournament in Baoshan, competing against top players from across the country. This victory demonstrates my competitive excellence and strategic gameplay.',
                image: 'images/3d9cb6ee27d199c1b5591708059dd161.jpg'
            },
            {
                title: '2024 National Tennis Open A1200 - Doubles Champion (Jiaxing)',
                content: 'Secured the doubles championship at the A1200 level national tournament in Jiaxing, showcasing strong teamwork, communication, and partnership skills on the court.',
                image: 'images/65793e3f214f0d43cf3ac1308b7c59b4.jpg'
            },
            {
                title: '2020 Shanghai 10th Games - Team Gold Medal',
                content: 'Contributed to team victory at the Shanghai 10th Games, earning a gold medal in team competition. Demonstrated ability to perform under pressure in high-stakes team environments.',
                image: 'images/838f82db13506716614906f324e808da.jpg'
            },
            {
                title: '2020 Shanghai 10th Games - Doubles Silver Medal',
                content: 'Achieved silver medal in doubles competition at the Shanghai 10th Games, showing consistent high-level performance in both individual and team events.',
                image: 'images/9267c5dedaeca330cc6266246990f82a.jpg'
            },
            {
                title: 'UTR 8 Rating',
                content: 'Maintains a Universal Tennis Rating (UTR) of 8, placing among competitive junior players. UTR is a globally recognized rating system that accurately measures tennis skill level.',
                image: 'images/a43ee3e809e64008f70a648fbf576d2e.jpg'
            }
        ],
        experience: 'Competitive tennis player since childhood with numerous tournament victories across Canada and China. Training regimen includes technical skill development, strategic game planning, physical conditioning, and mental toughness training.'
    }
};

function openSkillModal(skillType) {
    const modal = document.getElementById('skillModal');
    const modalBody = document.getElementById('modalBody');
    const skill = skillDetails[skillType];
    
    if (!skill || !modal || !modalBody) return;
    
    let html = `
        <div class="modal-header">
            <div class="modal-icon">${skill.icon}</div>
            <h2 class="modal-title">${skill.title}</h2>
        </div>
    `;
    
    skill.sections.forEach(section => {
        html += `
            <div class="modal-section">
                <h4>${section.title}</h4>
                ${section.image ? `
                    <div class="section-image-container">
                        <img src="${section.image}" alt="${section.title}" class="section-image" loading="lazy">
                    </div>
                ` : ''}
                <p>${section.content}</p>
            </div>
        `;
    });
    
    html += `
        <div class="modal-section">
            <h4>Experience & Background</h4>
            <p>${skill.experience}</p>
        </div>
    `;
    
    modalBody.innerHTML = html;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Function to open skill from dropdown menu - must be global
window.openSkillFromDropdown = function(skillType, event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    // Check if we're on skills page
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';
    const isSkillsPage = currentPage === 'skills.html' || currentPath.includes('skills.html');
    
    if (isSkillsPage) {
        // Already on skills page - open modal directly
        const modal = document.getElementById('skillModal');
        if (modal) {
            // Small delay to ensure everything is ready
            setTimeout(() => {
                openSkillModal(skillType);
            }, 150);
        } else {
            // Modal doesn't exist yet, wait a bit more
            setTimeout(() => {
                const modalCheck = document.getElementById('skillModal');
                if (modalCheck) {
                    openSkillModal(skillType);
                } else {
                    // Still doesn't exist, navigate with parameter
                    window.location.href = `skills.html?skill=${skillType}`;
                }
            }, 500);
        }
    } else {
        // Navigate to skills page with query parameter
        window.location.href = `skills.html?skill=${skillType}`;
    }
};

// Check for skill parameter on page load and open modal
function checkAndOpenSkillModal() {
    const urlParams = new URLSearchParams(window.location.search);
    const skillParam = urlParams.get('skill');
    
    if (skillParam && skillDetails[skillParam]) {
        // Ensure modal exists before trying to open
        const modal = document.getElementById('skillModal');
        if (modal) {
            setTimeout(() => {
                openSkillModal(skillParam);
                // Clean up URL by removing query parameter (optional)
                // window.history.replaceState({}, document.title, window.location.pathname);
            }, 500);
        }
    }
}

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkAndOpenSkillModal);
} else {
    // DOM is already loaded
    checkAndOpenSkillModal();
}

function closeSkillModal() {
    const modal = document.getElementById('skillModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const skillModal = document.getElementById('skillModal');
    const projectModal = document.getElementById('projectModal');
    if (event.target === skillModal) {
        closeSkillModal();
    }
    if (event.target === projectModal) {
        closeProjectModal();
    }
}

// Project Details
const projectDetails = {
    wukong: {
        title: 'Wukong Education Salary Calculator',
        grade: '8th Grade',
        status: 'Live in Production',
        url: 'http://wukong.zyvior.com',
        technologies: ['JavaScript', 'Node.js', 'Express', 'HTML/CSS'],
        overview: 'A comprehensive financial management system built for Wukong Education to handle complex salary calculations and payroll processing. This production application serves real users and handles sensitive financial data with accuracy and reliability.',
        features: [
            {
                title: 'Automated Salary Calculations',
                description: 'Implemented complex algorithms to calculate teacher salaries based on hours worked, class types, student attendance, and various bonus structures. The system handles multiple payment tiers and automatically applies the correct rates.'
            },
            {
                title: 'Payroll Processing System',
                description: 'Built a complete payroll processing workflow that tracks employee hours, calculates deductions, generates pay stubs, and produces detailed financial reports for accounting purposes.'
            },
            {
                title: 'Financial Data Management',
                description: 'Developed robust data handling for storing and retrieving financial records, transaction history, and employee payment information with proper validation and error handling.'
            },
            {
                title: 'User-Friendly Interface',
                description: 'Designed an intuitive web interface that allows administrators to easily input data, review calculations, and generate reports without technical knowledge required.'
            }
        ],
        challenges: 'Working with real financial data required extreme attention to accuracy and detail. I had to account for edge cases, implement comprehensive validation, and ensure calculations were always correct to the cent. Security and data privacy were also critical considerations.',
        impact: 'This system is actively used by Wukong Education to process payroll for multiple teachers. It has significantly reduced manual calculation time and eliminated human error in salary computations, saving hours of administrative work each pay period.',
        learning: 'This project taught me the importance of precision in financial software, proper error handling, and building user-friendly interfaces for non-technical users. I learned to write defensive code that validates all inputs and handles edge cases gracefully.'
    },
    acc: {
        title: 'ACC Admin Assistant',
        grade: '8th Grade',
        status: 'Enterprise Tool',
        technologies: ['C#', '.NET Framework', 'Windows Forms'],
        overview: 'An administrative automation tool designed to streamline workflow management and reduce repetitive tasks. Built as a desktop application to help administrators manage daily operations more efficiently.',
        features: [
            {
                title: 'Workflow Automation',
                description: 'Automated repetitive administrative tasks that previously required manual data entry and processing. The system can handle batch operations, file organization, and routine data management tasks with a single click.'
            },
            {
                title: 'Task Management System',
                description: 'Implemented a task tracking system that helps administrators organize, prioritize, and complete their daily responsibilities. Includes reminders, deadlines, and progress tracking.'
            },
            {
                title: 'Data Processing Tools',
                description: 'Created utilities for processing and transforming data between different formats, generating reports, and performing calculations on administrative data sets.'
            },
            {
                title: 'User-Friendly Desktop Interface',
                description: 'Designed a Windows desktop application with an intuitive GUI that makes complex operations accessible through simple button clicks and form inputs.'
            }
        ],
        challenges: 'Designing an application that could handle diverse administrative needs while remaining simple to use was challenging. I had to balance powerful features with ease of use, ensuring the tool enhanced productivity rather than adding complexity.',
        impact: 'The ACC Admin Assistant has streamlined administrative workflows, reducing the time spent on routine tasks and allowing staff to focus on more important responsibilities. It demonstrates practical problem-solving through software development.',
        learning: 'This project deepened my understanding of C# and desktop application development. I learned about event-driven programming, file I/O operations, and creating professional software tools for business use.'
    },
    spacewolf: {
        title: 'dao3.fun Space Werewolf',
        grade: '4th Grade - My First Major Project',
        status: 'Live & Playable',
        url: 'http://dao3.fun',
        technologies: ['Java', 'Game Development', 'Multiplayer Logic'],
        overview: 'A multiplayer social deduction game inspired by Among Us, built when I was in 4th grade. This was my first significant programming project that introduced me to game development, multiplayer logic, and user interaction design.',
        features: [
            {
                title: 'Multiplayer Game Mechanics',
                description: 'Implemented core multiplayer functionality allowing multiple players to join the same game session. The game supports simultaneous players with real-time interactions and game state synchronization.'
            },
            {
                title: 'Social Deduction Gameplay',
                description: 'Created the classic social deduction game loop where players must identify impostors among them through discussion, observation, and voting. Includes role assignment, task systems, and voting mechanisms.'
            },
            {
                title: 'Game State Management',
                description: 'Developed systems to track game phases (preparation, play, discussion, voting), player states (alive, eliminated, impostor, crewmate), and game progression through different rounds.'
            },
            {
                title: 'User Interface Design',
                description: 'Designed intuitive game controls and visual feedback so players can easily understand game status, perform actions, and interact with other players.'
            }
        ],
        challenges: 'As my first major project in 4th grade, everything was a learning experience. Understanding multiplayer logic, managing game states, and debugging complex interactions were all new challenges. I learned through trial and error and persistence.',
        impact: 'This project sparked my passion for programming and showed me that I could create real, playable software that people enjoy. It proved that age is just a number when it comes to coding ability and gave me the confidence to pursue more ambitious projects.',
        learning: 'Building this game taught me fundamental programming concepts: loops, conditionals, variables, functions, and object-oriented thinking. More importantly, it taught me problem-solving, debugging, and the satisfaction of creating something from nothing. This project set the foundation for my programming journey.'
    },
    arplox: {
        title: 'Arplox Game Development Platform',
        grade: '8th Grade',
        status: 'In Active Development',
        url: 'http://arplox.zyvior.com',
        technologies: ['JavaScript', 'Node.js', 'AI Agents', 'Web Technologies', 'Game Dev Tools'],
        overview: 'An ambitious AI-powered game development platform currently under construction. Arplox aims to provide intelligent tools and resources for game developers to create, test, and share their games using modern web technologies enhanced with AI assistance.',
        features: [
            {
                title: 'AI Agent Integration',
                description: 'Built intelligent AI agents that assist game developers with code generation, debugging suggestions, and game design recommendations. These agents understand developer intent through natural language and provide contextual, helpful assistance throughout the development process, making game creation more accessible and efficient.'
            },
            {
                title: 'Game Development Tools',
                description: 'Building a suite of AI-enhanced tools that help developers create browser-based games more easily. This includes utilities for game logic, asset management, testing frameworks, and intelligent code completion.'
            },
            {
                title: 'Web-Based Game Engine',
                description: 'Developing a lightweight game engine that runs in the browser, allowing developers to create games using JavaScript with simplified APIs for common game development tasks and AI-powered optimization suggestions.'
            },
            {
                title: 'Intelligent Resource Library',
                description: 'Creating a collection of reusable code snippets, templates, and examples that game developers can access through natural language queries. The AI agent helps find relevant resources and suggests implementations based on developer needs.'
            },
            {
                title: 'Developer Platform',
                description: 'Building the infrastructure for developers to host, share, and showcase their games created with Arplox tools, with AI-powered recommendations and community features.'
            }
        ],
        challenges: 'Building a platform for other developers is complex - it needs to be powerful enough for advanced users while remaining accessible for beginners. Adding AI capabilities introduces additional complexity around prompt engineering, context management, and ensuring AI suggestions are helpful and accurate. Balancing features, performance, and ease of use while integrating cutting-edge AI technology is an ongoing challenge.',
        currentProgress: 'The core architecture is in place with AI agents integrated and functional. Basic game development tools are working alongside intelligent assistance features. Currently refining the AI agent behavior, expanding the knowledge base, and improving natural language understanding. The platform is live at arplox.zyvior.com for preview and testing of AI-enhanced features.',
        futureGoals: 'Planning to enhance AI capabilities with better code understanding, add collaborative features where AI assists multiple developers simultaneously, create a community showcase, and develop tutorials for aspiring game developers. The goal is to make game development accessible through AI assistance while providing power tools for experienced developers. Future versions will include more sophisticated AI agents that can understand entire projects and provide architectural suggestions.',
        learning: 'This ongoing project is teaching me about AI integration, prompt engineering, platform design, API development, and building software for other developers. Working with AI agents has deepened my understanding of natural language processing, context management, and how to make AI practical and useful rather than just impressive. It\'s also improving my skills in project management, long-term planning, and iterative development with cutting-edge technologies.'
    }
};

// Add MCP Dialog Manager as a highlighted project in experience
const mcpToolHighlight = {
    name: 'Dialog Manager MCP Tool',
    description: 'Python-based MCP tool for AI conversation management',
    link: 'https://github.com/Jasper-wu22/ConversationSaver_MCPTool'
};

function openProjectModal(projectType) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('projectModalBody');
    const project = projectDetails[projectType];
    
    let html = `
        <div class="modal-header">
            <h2 class="modal-title">${project.title}</h2>
        </div>
        <div class="modal-section">
            <p><strong>Grade:</strong> ${project.grade}</p>
            <p><strong>Status:</strong> ${project.status}</p>
            ${project.url ? `<p><strong>Live URL:</strong> <a href="${project.url}" target="_blank">${project.url}</a></p>` : ''}
            <p><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
        </div>
        <div class="modal-section">
            <h4>Project Overview</h4>
            <p>${project.overview}</p>
        </div>
    `;
    
    if (project.features) {
        html += '<div class="modal-section"><h4>Key Features & Implementation</h4>';
        project.features.forEach(feature => {
            html += `
                <div style="margin-bottom: 1.5rem;">
                    <strong style="color: var(--primary-color);">${feature.title}</strong>
                    <p style="margin-top: 0.5rem;">${feature.description}</p>
                </div>
            `;
        });
        html += '</div>';
    }
    
    if (project.challenges) {
        html += `
            <div class="modal-section">
                <h4>Technical Challenges</h4>
                <p>${project.challenges}</p>
            </div>
        `;
    }
    
    if (project.impact) {
        html += `
            <div class="modal-section">
                <h4>Impact & Results</h4>
                <p>${project.impact}</p>
            </div>
        `;
    }
    
    if (project.currentProgress) {
        html += `
            <div class="modal-section">
                <h4>Current Progress</h4>
                <p>${project.currentProgress}</p>
            </div>
        `;
    }
    
    if (project.futureGoals) {
        html += `
            <div class="modal-section">
                <h4>Future Goals</h4>
                <p>${project.futureGoals}</p>
            </div>
        `;
    }
    
    if (project.learning) {
        html += `
            <div class="modal-section">
                <h4>What I Learned</h4>
                <p>${project.learning}</p>
            </div>
        `;
    }
    
    modalBody.innerHTML = html;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Achievement Explanation Modal Functions
const achievementExplanations = {
    yonex: {
        title: 'Yonex Sponsored Athlete',
        icon: '⭐',
        explanation: 'Proud to be sponsored by Yonex, one of the world\'s leading tennis equipment manufacturers. This sponsorship recognizes my achievements and potential in competitive tennis, providing professional-grade equipment and support for my training and competitions.',
        images: [
            'images/397c664f624995fe3b81c21c42024842.jpg',
            'images/3d9cb6ee27d199c1b5591708059dd161.jpg',
            'images/65793e3f214f0d43cf3ac1308b7c59b4.jpg'
        ]
    },
    a1000: {
        title: '2024 National Tennis Open A1000 - Singles Champion',
        icon: '🏆',
        explanation: 'Won the singles championship at the prestigious A1000 level national tournament in Baoshan, competing against top players from across the country. This victory demonstrates my competitive excellence, strategic gameplay, and ability to perform under pressure in high-stakes matches.',
        images: [
            'images/397c664f624995fe3b81c21c42024842.jpg',
            'images/838f82db13506716614906f324e808da.jpg',
            'images/9267c5dedaeca330cc6266246990f82a.jpg'
        ]
    },
    a1200: {
        title: '2024 National Tennis Open A1200 - Doubles Champion',
        icon: '🥇',
        explanation: 'Secured the doubles championship at the A1200 level national tournament in Jiaxing, showcasing strong teamwork, communication, and partnership skills on the court. This achievement highlights my ability to work effectively with a partner and adapt to different playing styles.',
        images: [
            'images/3d9cb6ee27d199c1b5591708059dd161.jpg',
            'images/a43ee3e809e64008f70a648fbf576d2e.jpg',
            'images/e5ddfdb49490fd5d16ec1554b52fccea.jpg'
        ]
    },
    gold: {
        title: '2020 Shanghai 10th Games - Team Gold Medal',
        icon: '🥇',
        explanation: 'Contributed to team victory at the Shanghai 10th Games, earning a gold medal in team competition. Demonstrated ability to perform under pressure in high-stakes team environments, working together with teammates to achieve collective success.',
        images: [
            'images/65793e3f214f0d43cf3ac1308b7c59b4.jpg',
            'images/ef40ce03d29b7b22b5ac1ea315b4dd5c.jpg',
            'images/fb833294aece2736ae014acd4ff5ad82.jpg'
        ]
    },
    silver: {
        title: '2020 Shanghai 10th Games - Doubles Silver Medal',
        icon: '🥈',
        explanation: 'Achieved silver medal in doubles competition at the Shanghai 10th Games, showing consistent high-level performance in both individual and team events. This accomplishment reflects dedication to improving doubles strategy and partnership dynamics.',
        images: [
            'images/838f82db13506716614906f324e808da.jpg',
            'images/9267c5dedaeca330cc6266246990f82a.jpg',
            'images/a43ee3e809e64008f70a648fbf576d2e.jpg'
        ]
    },
    utr: {
        title: 'UTR 8 Rating',
        icon: '🎾',
        explanation: 'Maintains a Universal Tennis Rating (UTR) of 8, placing among competitive junior players. UTR is a globally recognized rating system that accurately measures tennis skill level based on match results. A UTR 8 rating indicates strong competitive ability and consistent performance against skilled opponents.',
        images: [
            'images/397c664f624995fe3b81c21c42024842.jpg',
            'images/3d9cb6ee27d199c1b5591708059dd161.jpg',
            'images/65793e3f214f0d43cf3ac1308b7c59b4.jpg'
        ]
    }
};

function showAchievementExplanation(achievementId) {
    const modal = document.getElementById('achievementModal');
    const modalBody = document.getElementById('achievementModalBody');
    const achievement = achievementExplanations[achievementId];
    
    if (!achievement) return;
    
    let imagesHtml = '';
    if (achievement.images && achievement.images.length > 0) {
        imagesHtml = `
            <div class="achievement-modal-images">
                ${achievement.images.map(img => `
                    <div class="achievement-modal-image-item">
                        <img src="${img}" alt="${achievement.title}">
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    const html = `
        <div class="achievement-modal-header">
            <div class="achievement-modal-icon">${achievement.icon}</div>
            <h2 class="achievement-modal-title">${achievement.title}</h2>
        </div>
        <div class="achievement-modal-body">
            ${imagesHtml}
            <p>${achievement.explanation}</p>
        </div>
    `;
    
    modalBody.innerHTML = html;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeAchievementModal() {
    const modal = document.getElementById('achievementModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const achievementModal = document.getElementById('achievementModal');
    if (e.target === achievementModal) {
        closeAchievementModal();
    }
});

// Add animation to skill cards and project cards on hover
const cards = document.querySelectorAll('.skill-card, .project-card, .stat-item');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinksArray = Array.from(navLinks);

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinksArray.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add typing effect to hero title (optional enhancement)
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            heroTitle.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    // Uncomment the line below to enable typing effect
    // typeWriter();
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

