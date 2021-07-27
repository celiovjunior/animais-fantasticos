function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li')
    const tabContent = document.querySelectorAll('.js-tabcontent section')
    
    if(tabMenu.length && tabContent.length) {
        tabContent[0].classList.add("ativo")
        
        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo')
            })
            tabContent[index].classList.add('ativo', tabContent[index].dataset.anima)
        }
        
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', function(){
                activeTab(index)
            })
        })
    }
}

initTabNav()

function initAccordion(){
    const accordionList = document.querySelectorAll('.js-accordion dt')
    const classAtivo = 'ativo'
    
    if(accordionList.length) {
            accordionList[0].classList.add(classAtivo)
            accordionList[0].nextElementSibling.classList.add(classAtivo)
            function activeAccordion() {
                this.classList.toggle(classAtivo)
                this.nextElementSibling.classList.toggle(classAtivo)
            }
            
            accordionList.forEach((item) => {
                item.addEventListener('click', activeAccordion)
            })
    }
}

initAccordion()

function initScroll(){
    const linksInternos = document.querySelectorAll(".js-menu a[href^='#']")
    
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

initScroll()

function initScrollAnima(){
    const sections = document.querySelectorAll(".js-scroll")
    const windowPercent = window.innerHeight * 0.6
    
    if(sections.length) {
        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top - windowPercent
        
                if(sectionTop < 0) {
                    section.classList.add('ativo')
                }
            })
        }
        
        animaScroll()
        
        window.addEventListener("scroll", animaScroll)
    }
}

initScrollAnima()