        // Smooth scroll to anchor links
        document.querySelectorAll('a.nav').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
    
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    
        // Highlight the active link on scroll
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            let currentSection = '';
    
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
    
                if (pageYOffset >= sectionTop - sectionHeight / 3) {
                    currentSection = section.getAttribute('id');
                }
            });
    
            document.querySelectorAll('a.nav').forEach(link => {
                link.classList.remove('nav-active');
                if (link.getAttribute('href').substring(1) === currentSection) {
                    link.classList.add('nav-active');
                }
            });
        });