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
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // navbar height
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
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

// Skill Modal Functions
const skillDetails = {
    programming: {
        icon: '{ }',
        title: 'Programming Languages',
        sections: [
            {
                title: 'JavaScript - Full-Stack Mastery',
                content: 'Expert in modern JavaScript (ES6+) for both frontend and backend development. On the backend, I\'ve built robust Node.js applications using Express.js framework, implementing RESTful APIs with proper routing, middleware, authentication, and error handling. Frontend expertise includes DOM manipulation, event handling, async/await patterns, Promises, and fetch API for seamless client-server communication. I understand JavaScript\'s event loop, closures, prototypal inheritance, and functional programming concepts. Projects include: Wukong Education salary calculator (live at wukong.zyvior.com), Arplox game development platform (arplox.zyvior.com), and this portfolio website with interactive features.'
            },
            {
                title: 'Python - Versatile Development',
                content: 'Comprehensive Python knowledge spanning application development, scripting, automation, and data processing. Skilled in using Python for creating practical utilities, automating repetitive tasks, file I/O operations, data structure manipulation (lists, dictionaries, sets), and object-oriented programming. Experience with Python\'s standard library, exception handling, and writing clean, maintainable code following PEP 8 style guidelines. Built the Conversation Saver MCP Tool for managing and saving conversations, demonstrating practical application of Python for real-world utility development. Comfortable with virtual environments, package management with pip, and writing modular, reusable code.'
            },
            {
                title: 'Java - Object-Oriented Excellence',
                content: 'Strong foundation in Java and object-oriented programming principles (encapsulation, inheritance, polymorphism, abstraction). Developed complex applications including the Space Werewolf multiplayer game (dao3.fun) in 4th grade, showcasing early understanding of game logic, state management, and user interaction. Proficient in Java syntax, data structures (ArrayList, HashMap), exception handling, file I/O, and multi-threading concepts. Understanding of design patterns (Singleton, Factory, Observer) and their practical applications. Experience with both console and graphical applications, demonstrating versatility in Java development.'
            },
            {
                title: 'C# - Professional Application Development',
                content: 'Proficient in C# for building professional-grade applications, particularly in engineering and business contexts. Developed the Geotechnical BIM software featuring foundation design calculations, support structure analysis, and comprehensive geotechnical engineering computations. Strong understanding of C# syntax, .NET framework, Windows Forms or WPF for GUI applications, LINQ for data queries, async/await for asynchronous programming, and proper memory management. Experience with event-driven programming, delegates, and creating maintainable, scalable application architectures. Built the ACC Admin Assistant tool for workflow automation, demonstrating practical business application development skills.'
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
                content: 'Comprehensive expertise in building complete web applications from scratch. Backend development includes Node.js with Express.js for server-side logic, API development, middleware implementation, session management, and authentication systems. Frontend development covers HTML5 semantic markup, modern CSS3 (including animations, transitions, and transforms), and vanilla JavaScript for interactive features. Understanding of the entire request-response cycle, client-server architecture, state management, and data flow. Built production applications with proper separation of concerns, modular code structure, and scalable architecture. Experience with development tools including npm/package managers, Git version control (GitHub), and deployment platforms. Created multiple live applications serving real users with reliable performance and professional user experiences.'
            },
            {
                title: 'RESTful API Design & Implementation',
                content: 'Expert in designing and implementing RESTful APIs following industry best practices. Built APIs with proper HTTP methods (GET, POST, PUT, DELETE), status codes, error handling, and response formatting. Implemented features including input validation, data sanitization, CORS configuration for cross-origin requests, and comprehensive error handling with meaningful error messages. Experience with API endpoint organization, route parameterization, query parameters, and request body parsing. Built contact form API with email integration (Nodemailer), portfolio data endpoints, and health check endpoints. Understanding of API security principles, authentication mechanisms, and protecting sensitive endpoints. APIs serve multiple frontend applications with reliable performance and proper documentation.'
            },
            {
                title: 'Responsive Web Design - Mobile-First Approach',
                content: 'Expert in creating responsive, mobile-first websites that provide optimal user experience across all devices (desktop, tablet, mobile). Proficient in modern CSS layout techniques including CSS Grid for two-dimensional layouts, Flexbox for one-dimensional layouts, and media queries for breakpoint management. Understanding of responsive design principles: fluid grids, flexible images, viewport meta tags, and relative units (rem, em, %, vw/vh). Built websites with smooth animations using CSS transitions and transforms, hover effects for interactivity, and touch-friendly interfaces for mobile devices. Experience with cross-browser compatibility, performance optimization, and accessibility best practices. Created navigation systems that adapt to different screen sizes, including mobile hamburger menus and responsive navigation bars.'
            },
            {
                title: 'Database Management & Data Handling',
                content: 'Experience with database design, data modeling, and efficient data storage solutions. Understanding of relational database concepts including tables, relationships (one-to-many, many-to-many), primary/foreign keys, and normalization. Skilled in writing queries for data retrieval, insertion, updates, and deletion. Experience with JSON data structures for API responses and configuration. Built applications requiring complex data handling including the Wukong Education salary calculator with financial data processing, geotechnical BIM software with engineering calculation storage, and admin systems with user data management. Understanding of data validation, sanitization for security, and efficient data retrieval patterns.'
            },
            {
                title: 'Modern Development Workflow',
                content: 'Proficient in professional development workflows and tools. Expert with Git version control for code management, branching strategies, commit best practices, and collaborative development through GitHub. Experience with npm for package management, dependency handling, and script automation. Understanding of project structure organization, environment variables for configuration, and deployment processes. Built this portfolio with proper .gitignore configuration, README documentation, and organized file structure. Familiar with debugging techniques, browser developer tools, server logs analysis, and systematic problem-solving approaches.'
            }
        ],
        experience: 'Built and deployed multiple production websites serving real users. Live projects include wukong.zyvior.com (Wukong Education salary calculator with complex financial logic), arplox.zyvior.com (game development platform), and this portfolio website (portfolio-website on GitHub). Experience spans the complete development lifecycle from initial planning and design to deployment and maintenance. All projects feature responsive design, professional UI/UX, working APIs, and are hosted on custom domains. Demonstrated ability to translate user requirements into functional, scalable web applications. Comfortable working independently and managing entire projects from conception to production deployment.'
    },
    tennis: {
        icon: '★',
        title: 'Tennis Achievements',
        images: [
            'images/397c664f624995fe3b81c21c42024842.jpg',
            'images/3d9cb6ee27d199c1b5591708059dd161.jpg',
            'images/65793e3f214f0d43cf3ac1308b7c59b4.jpg',
            'images/838f82db13506716614906f324e808da.jpg',
            'images/9267c5dedaeca330cc6266246990f82a.jpg',
            'images/a43ee3e809e64008f70a648fbf576d2e.jpg',
            'images/e5ddfdb49490fd5d16ec1554b52fccea.jpg',
            'images/ef40ce03d29b7b22b5ac1ea315b4dd5c.jpg',
            'images/fb833294aece2736ae014acd4ff5ad82.jpg'
        ],
        sections: [
            {
                title: 'Yonex Sponsorship',
                content: 'Proud to be sponsored by Yonex, one of the world\'s leading tennis equipment manufacturers. This sponsorship recognizes my achievements and potential in competitive tennis.'
            },
            {
                title: '2024 National Tennis Open A1000 - Singles Champion (Baoshan)',
                content: 'Won the singles championship at the prestigious A1000 level national tournament in Baoshan, competing against top players from across the country. This victory demonstrates my competitive excellence and strategic gameplay.'
            },
            {
                title: '2024 National Tennis Open A1200 - Doubles Champion (Jiaxing)',
                content: 'Secured the doubles championship at the A1200 level national tournament in Jiaxing, showcasing strong teamwork, communication, and partnership skills on the court.'
            },
            {
                title: '2020 Shanghai 10th Games - Team Gold Medal',
                content: 'Contributed to team victory at the Shanghai 10th Games, earning a gold medal in team competition. Demonstrated ability to perform under pressure in high-stakes team environments.'
            },
            {
                title: '2020 Shanghai 10th Games - Doubles Silver Medal',
                content: 'Achieved silver medal in doubles competition at the Shanghai 10th Games, showing consistent high-level performance in both individual and team events.'
            },
            {
                title: 'UTR 8 Rating',
                content: 'Maintains a Universal Tennis Rating (UTR) of 8, placing among competitive junior players. UTR is a globally recognized rating system that accurately measures tennis skill level.'
            }
        ],
        experience: 'Competitive tennis player since childhood with numerous tournament victories across Canada and China. Training regimen includes technical skill development, strategic game planning, physical conditioning, and mental toughness training.'
    }
};

function openSkillModal(skillType) {
    const modal = document.getElementById('skillModal');
    const modalBody = document.getElementById('modalBody');
    const skill = skillDetails[skillType];
    
    let html = `
        <div class="modal-header">
            <div class="modal-icon">${skill.icon}</div>
            <h2 class="modal-title">${skill.title}</h2>
        </div>
    `;
    
    // Add image gallery if images exist
    if (skill.images && skill.images.length > 0) {
        html += '<div class="modal-images">';
        skill.images.forEach(img => {
            html += `<img src="${img}" alt="${skill.title}" class="modal-image">`;
        });
        html += '</div>';
    }
    
    skill.sections.forEach(section => {
        html += `
            <div class="modal-section">
                <h4>${section.title}</h4>
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

function closeSkillModal() {
    const modal = document.getElementById('skillModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('skillModal');
    if (event.target === modal) {
        closeSkillModal();
    }
}

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

