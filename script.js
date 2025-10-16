// Variáveis globais
let isMenuOpen = false;
let typedTextElement;
let cursorElement;
let currentTextIndex = 0;
let currentCharIndex = 0;
const typingTexts = [
    "Hendel Santos",
    "Backend Developer", 
    "Frontend Creator",
    "Full Stack Dev"
];

// Projetos adicionais para a seção "Outros Projetos"
const additionalProjectsData = [
    {
        title: "API de Microserviços",
        description: "Arquitetura de microserviços escalável com Python e Golang, integração com IA e processamento distribuído.",
        tech: ["Python", "Golang", "Docker", "Kubernetes", "Microservices"],
        icon: "fas fa-server",
        github: "https://github.com/hendelsantos",
        demo: "#"
    },
    {
        title: "Integração IA + Backend",
        description: "Sistema que integra IA generativa no workflow de desenvolvimento para otimização de código e produtividade (+40%).",
        tech: ["Python", "OpenAI API", "FastAPI", "Machine Learning", "AI Integration"],
        icon: "fas fa-robot",
        github: "https://github.com/hendelsantos",
        demo: "#"
    },
    {
        title: "Dashboard Analytics",
        description: "Dashboard interativo para análise de dados com gráficos dinâmicos, métricas em tempo real e filtros avançados.",
        tech: ["Python", "Pandas", "PostgreSQL", "Chart.js", "Analytics"],
        icon: "fas fa-chart-pie",
        github: "https://github.com/hendelsantos",
        demo: "#"
    },
    {
        title: "Portfolio Creative",
        description: "Este próprio portfolio! Desenvolvido com elementos de programação criativa e design inovador.",
        tech: ["HTML5", "CSS3", "JavaScript", "Particles.js", "Creative Coding"],
        icon: "fas fa-palette",
        github: "https://github.com/hendelsantos/Site_Hendel_v3",
        demo: "#"
    }
];

// Configuração do Particles.js
function initParticles() {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: ['#00d4ff', '#4ecdc4', '#ff6b6b']
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#00d4ff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 100,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });
}

// Função de typing animation
function typeText() {
    typedTextElement = document.querySelector('.typed-text');
    cursorElement = document.querySelector('.cursor');
    
    if (!typedTextElement) return;
    
    const currentText = typingTexts[currentTextIndex];
    
    if (currentCharIndex < currentText.length) {
        typedTextElement.textContent += currentText.charAt(currentCharIndex);
        currentCharIndex++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(eraseText, 2000);
    }
}

function eraseText() {
    if (currentCharIndex > 0) {
        typedTextElement.textContent = typingTexts[currentTextIndex].substring(0, currentCharIndex - 1);
        currentCharIndex--;
        setTimeout(eraseText, 50);
    } else {
        currentTextIndex = (currentTextIndex + 1) % typingTexts.length;
        setTimeout(typeText, 500);
    }
}

// Menu mobile
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        isMenuOpen = !isMenuOpen;
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            isMenuOpen = false;
            document.body.style.overflow = 'auto';
        });
    });
}

// Smooth scrolling
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Navbar scroll effect
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Intersection Observer para animações
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Elementos para animar
    const animatedElements = document.querySelectorAll(
        '.fade-in, .slide-in-left, .slide-in-right'
    );
    
    animatedElements.forEach(el => observer.observe(el));
}

function loadProjects() {
    console.log('Projetos já carregados no HTML - função não necessária');
    // Projetos agora estão direto no HTML
}

// Formulário de contato
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Loading state
        submitBtn.innerHTML = '<i class="loading"></i> Enviando...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            // Success state
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Enviado!';
            submitBtn.style.background = 'var(--accent-color)';
            
            // Show success message
            showNotification('Mensagem enviada com sucesso!', 'success');
            
            // Reset form
            form.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
            }, 3000);
        }, 2000);
    });
}

// Sistema de notificações
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'var(--accent-color)' : 'var(--primary-color)'};
        color: var(--bg-dark);
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: var(--shadow-strong);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 1rem;
        animation: slideIn 0.3s ease;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add notification animations to CSS
function addNotificationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            flex: 1;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: inherit;
            cursor: pointer;
            padding: 0.2rem;
            border-radius: 50%;
            transition: background 0.2s ease;
        }
        
        .notification-close:hover {
            background: rgba(0, 0, 0, 0.1);
        }
    `;
    document.head.appendChild(style);
}

// Efeitos de hover para cards
function initCardEffects() {
    const cards = document.querySelectorAll('.project-card, .skill-category, .contact-method');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

// Scroll to top functionality
function initScrollToTop() {
    // Create scroll to top button
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--gradient-primary);
        border: none;
        border-radius: 50%;
        color: var(--bg-dark);
        font-size: 1.2rem;
        cursor: pointer;
        box-shadow: var(--shadow-soft);
        transition: var(--transition-smooth);
        opacity: 0;
        visibility: hidden;
        z-index: 1000;
    `;
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top when clicked
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    scrollBtn.addEventListener('mouseenter', () => {
        scrollBtn.style.transform = 'translateY(-3px) scale(1.1)';
        scrollBtn.style.boxShadow = 'var(--shadow-glow)';
    });
    
    scrollBtn.addEventListener('mouseleave', () => {
        scrollBtn.style.transform = 'translateY(0) scale(1)';
        scrollBtn.style.boxShadow = 'var(--shadow-soft)';
    });
}

// Parallax effect
function initParallax() {
    const parallaxElements = document.querySelectorAll('.hero-visual, .code-window');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        
        parallaxElements.forEach(element => {
            element.style.transform = `translateY(${rate}px)`;
        });
    });
}

// Terminal typing effect
function initTerminalEffect() {
    const terminalLines = document.querySelectorAll('.terminal-line');
    let delay = 0;
    
    terminalLines.forEach((line, index) => {
        setTimeout(() => {
            line.style.opacity = '1';
            line.style.animation = 'fadeInUp 0.5s ease';
        }, delay);
        
        delay += 800;
    });
}

// Add terminal animation styles
function addTerminalStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .terminal-line {
            opacity: 0;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Skills animation
function initSkillsAnimation() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.5 });
    
    skillItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'all 0.5s ease';
        skillsObserver.observe(item);
    });
}

// Cursor trail effect
function initCursorTrail() {
    const trail = [];
    const trailLength = 10;
    
    for (let i = 0; i < trailLength; i++) {
        const dot = document.createElement('div');
        dot.className = 'cursor-trail';
        dot.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: var(--primary-color);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            opacity: ${1 - (i / trailLength)};
            transition: all 0.1s ease;
        `;
        document.body.appendChild(dot);
        trail.push(dot);
    }
    
    let mouse = { x: 0, y: 0 };
    
    document.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    
    function updateTrail() {
        trail.forEach((dot, index) => {
            const delay = index * 2;
            setTimeout(() => {
                dot.style.left = mouse.x + 'px';
                dot.style.top = mouse.y + 'px';
            }, delay);
        });
        requestAnimationFrame(updateTrail);
    }
    
    updateTrail();
}

// Loading screen
function createLoadingScreen() {
    const loader = document.createElement('div');
    loader.id = 'loading-screen';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-logo">
                <span class="code-bracket">&lt;</span>
                <span class="logo-text">Hendel</span>
                <span class="code-bracket">/&gt;</span>
            </div>
            <div class="loader-progress">
                <div class="progress-bar"></div>
            </div>
            <div class="loader-text">Carregando experiência criativa...</div>
        </div>
    `;
    
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--bg-dark);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity 0.5s ease;
    `;
    
    document.body.appendChild(loader);
    
    // Loading progress animation
    const progressBar = loader.querySelector('.progress-bar');
    progressBar.style.cssText = `
        width: 0%;
        height: 3px;
        background: var(--gradient-primary);
        border-radius: 2px;
        transition: width 0.3s ease;
    `;
    
    const loaderContent = loader.querySelector('.loader-content');
    loaderContent.style.cssText = `
        text-align: center;
        color: var(--text-primary);
    `;
    
    const loaderLogo = loader.querySelector('.loader-logo');
    loaderLogo.style.cssText = `
        font-family: 'JetBrains Mono', monospace;
        font-size: 3rem;
        font-weight: 700;
        color: var(--primary-color);
        margin-bottom: 2rem;
        animation: pulse 2s infinite;
    `;
    
    const loaderProgress = loader.querySelector('.loader-progress');
    loaderProgress.style.cssText = `
        width: 300px;
        height: 3px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 2px;
        margin: 2rem auto;
        overflow: hidden;
    `;
    
    // Simulate loading
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.remove();
                }, 500);
            }, 500);
        }
        progressBar.style.width = progress + '%';
    }, 200);
}

// Performance optimization
function optimizePerformance() {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Throttle scroll events
    let ticking = false;
    function updateOnScroll() {
        // Your scroll handling code here
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM carregado, iniciando componentes...');
    
    // Create loading screen first
    createLoadingScreen();
    
    // Initialize all components
    setTimeout(() => {
        initParticles();
        typeText();
        initMobileMenu();
        initSmoothScrolling();
        initNavbarScroll();
        initScrollAnimations();
        loadProjects();
        initContactForm(); // Inicializar formulário de contato
        initCardEffects();
        initScrollToTop();
        initParallax();
        initTerminalEffect();
        initSkillsAnimation();
        initCursorTrail();
        optimizePerformance();
        
        // Add custom styles
        addNotificationStyles();
        addTerminalStyles();
        
        console.log('%c🚀 Portfolio carregado com sucesso!', 'color: #00d4ff; font-size: 16px; font-weight: bold;');
        console.log('%c💻 Desenvolvido por Hendel Santos', 'color: #4ecdc4; font-size: 14px;');
        console.log('%c📧 Contato: hendelosantos@outlook.com', 'color: #ff6b6b; font-size: 12px;');
    }, 100);
});

// Handle window resize
window.addEventListener('resize', () => {
    // Recalculate parallax and other effects if needed
    if (window.innerWidth <= 768 && isMenuOpen) {
        document.querySelector('.hamburger').classList.remove('active');
        document.querySelector('.nav-menu').classList.remove('active');
        isMenuOpen = false;
        document.body.style.overflow = 'auto';
    }
});

// Service Worker for PWA capabilities (opcional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(() => console.log('SW Registered'))
            .catch(() => console.log('SW Failed'));
    });
}

// Easter egg - Konami Code
const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.keyCode === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            // Easter egg activated!
            document.body.classList.add('matrix-mode');
            showNotification('🎉 Modo Matrix ativado! Você encontrou o easter egg!', 'success');
            konamiIndex = 0;
            
            // Add matrix rain effect
            createMatrixRain();
        }
    } else {
        konamiIndex = 0;
    }
});

function createMatrixRain() {
    const matrixCanvas = document.createElement('canvas');
    matrixCanvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        opacity: 0.1;
    `;
    
    document.body.appendChild(matrixCanvas);
    
    const ctx = matrixCanvas.getContext('2d');
    matrixCanvas.width = window.innerWidth;
    matrixCanvas.height = window.innerHeight;
    
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");
    
    const fontSize = 10;
    const columns = matrixCanvas.width / fontSize;
    const drops = [];
    
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }
    
    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
        
        ctx.fillStyle = '#00d4ff';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    const matrixInterval = setInterval(drawMatrix, 35);
    
    // Remove matrix effect after 10 seconds
    setTimeout(() => {
        clearInterval(matrixInterval);
        matrixCanvas.remove();
        document.body.classList.remove('matrix-mode');
    }, 10000);
}

// Contact Form Functionality
function initContactForm() {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('form-success');
    const errorMessage = document.getElementById('form-error');
    
    if (!form) return;
    
    // Check for success parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        showFormMessage('success');
        // Remove success parameter from URL
        window.history.replaceState({}, document.title, window.location.pathname);
    }
    
    form.addEventListener('submit', async function(e) {
        // Se não estiver usando Formspree, prevenir envio padrão
        if (form.action.includes('YOUR_FORM_ID')) {
            e.preventDefault();
            alert('⚠️ Configure o Formspree primeiro!\n\n1. Acesse https://formspree.io/\n2. Crie uma conta\n3. Substitua YOUR_FORM_ID pelo ID real\n4. Teste novamente');
            return;
        }
        
        // Adicionar estado de loading
        form.classList.add('loading');
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        
        // Formspree handles the actual submission
        // The form will redirect automatically or show success message
    });
    
    // Handle form reset after submission
    form.addEventListener('reset', function() {
        hideFormMessages();
    });
}

function showFormMessage(type) {
    const successMessage = document.getElementById('form-success');
    const errorMessage = document.getElementById('form-error');
    
    hideFormMessages();
    
    if (type === 'success' && successMessage) {
        successMessage.style.display = 'block';
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else if (type === 'error' && errorMessage) {
        errorMessage.style.display = 'block';
        errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function hideFormMessages() {
    const successMessage = document.getElementById('form-success');
    const errorMessage = document.getElementById('form-error');
    
    if (successMessage) successMessage.style.display = 'none';
    if (errorMessage) errorMessage.style.display = 'none';
}

// Enhanced Form Validation
function validateForm(form) {
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();
    
    if (!name || name.length < 2) {
        showFormError('Nome deve ter pelo menos 2 caracteres');
        return false;
    }
    
    if (!email || !isValidEmail(email)) {
        showFormError('Email inválido');
        return false;
    }
    
    if (!message || message.length < 10) {
        showFormError('Mensagem deve ter pelo menos 10 caracteres');
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFormError(message) {
    // Create temporary error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-validation-error';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        background: rgba(231, 76, 60, 0.1);
        border: 1px solid #e74c3c;
        color: #e74c3c;
        padding: 1rem;
        border-radius: 8px;
        margin: 1rem 0;
        text-align: center;
        animation: slideIn 0.3s ease;
    `;
    
    const form = document.getElementById('contact-form');
    form.insertBefore(errorDiv, form.firstChild);
    
    // Remove after 5 seconds
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.remove();
        }
    }, 5000);
}

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        typeText,
        showNotification,
        loadProjects,
        initContactForm,
        validateForm
    };
}