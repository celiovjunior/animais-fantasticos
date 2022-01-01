export default function initScrollAnima(){
    const sections = document.querySelectorAll('[data-anime="scroll"]')
    const windowPercent = window.innerHeight * 0.6
    
    if(sections.length) {
        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowPercent < 0)
        
                if(isSectionVisible) 
                    section.classList.add('ativo')
            })
        }
        
        animaScroll()
        
        window.addEventListener("scroll", animaScroll)
    }
}