export default function initAnimaScroll() {
    const sections = document.querySelectorAll('.js-scroll');
    const windowUser = window.innerHeight * 0.6;

    function animaScroll() {    
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top - windowUser;
            
            if(sectionTop < 0) {
                section.classList.add('animation')
            }
        })
    }

    window.addEventListener('scroll', animaScroll);
}