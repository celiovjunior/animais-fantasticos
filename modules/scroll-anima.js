export default function initScroll(){
    const linksInternos = document.querySelectorAll('[data-scroll="suave"] a[href^="#"]' )
    
    function scrollToSection(event) {
        event.preventDefault()
        
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        
        // const topSection = section.offsetTop
    
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    
        // window.scrollTo({
        //     top: topSection,
        //     behavior: 'smooth',
        // })
    }
    
    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    })
}