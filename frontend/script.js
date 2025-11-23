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
        images: ['images/geotechnical-bim.png', 'images/wukong-finance.png', 'images/space-werewolf.png'],
        sections: [
            {
                title: 'JavaScript',
                content: 'Proficient in full-stack JavaScript development including Node.js backend with Express framework, modern frontend frameworks, asynchronous programming, and ES6+ features. Built multiple production applications including financial calculators and web platforms.'
            },
            {
                title: 'Python',
                content: 'Experienced in Python for application development, scripting, automation, and data processing. Created various tools and utilities for practical problem-solving and system automation.'
            },
            {
                title: 'Java',
                content: 'Strong foundation in object-oriented programming with Java. Developed complex applications including game projects and enterprise-level tools. Understanding of design patterns and best practices.'
            },
            {
                title: 'C#',
                content: 'Proficient in C# for application development, including desktop applications and software tools. Experience with .NET framework and modern C# features.'
            }
        ],
        experience: 'Started programming in 4th grade and have been continuously developing skills across multiple languages. Created real-world applications serving actual users.'
    },
    web: {
        icon: '</>',
        title: 'Web Development',
        images: ['images/acc-admin.png', 'images/arplox.png'],
        sections: [
            {
                title: 'Full-Stack Development',
                content: 'Complete expertise in building end-to-end web applications from database design to user interface. Experienced with modern development workflows, version control (Git), and deployment processes.'
            },
            {
                title: 'RESTful API Design',
                content: 'Skilled in designing and implementing RESTful APIs with proper routing, authentication, error handling, and documentation. Built APIs serving multiple frontend applications.'
            },
            {
                title: 'Responsive Web Design',
                content: 'Expert in creating mobile-first, responsive websites that work flawlessly across all devices. Proficient in CSS Grid, Flexbox, and modern layout techniques.'
            },
            {
                title: 'Database Management',
                content: 'Experience with database design, queries, and optimization. Understanding of data modeling, relationships, and efficient data storage solutions.'
            }
        ],
        experience: 'Built and deployed multiple live websites including wukong.zyvior.com and arplox.zyvior.com. Projects serve real users and handle production workloads.'
    },
    tennis: {
        icon: '★',
        title: 'Tennis Achievements',
        images: ['images/397c664f624995fe3b81c21c42024842.jpg', 'images/65793e3f214f0d43cf3ac1308b7c59b4.jpg', 'images/e5ddfdb49490fd5d16ec1554b52fccea.jpg', 'images/fb833294aece2736ae014acd4ff5ad82.jpg'],
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

