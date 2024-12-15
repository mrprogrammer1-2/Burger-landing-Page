const menu = document.getElementById('nav-menu');
const openBtn = document.getElementById('open-menu')
const closeBtn = document.getElementById('close-menu')

openBtn.addEventListener("click", ()=> {
    menu.classList.add("show")
})
closeBtn.addEventListener("click", ()=> {
    menu.classList.remove("show")
})

// ============= SCROLLREVEAL ===============

const sr = ScrollReveal({
    distance: '100px',
    duration: 1000,
    easing: 'ease-in-out',
})

sr.reveal('.hero__image img', {duration: 2400 , delay: 400,distance: 0, rotate: {z: -90}})
sr.reveal('.about__plate', {origin: 'left', delay: 300})
sr.reveal('.about__burger', {origin: 'left', delay: 200})
sr.reveal('.popular__container .card', {origin: 'top', delay: 300, interval: 200})
sr.reveal('.products__container .card', {origin: 'top', delay: 300, interval: 200})
sr.reveal('.recipe__ingredient', {origin: 'right', delay: 300, interval: 200})
sr.reveal('.recipe__image', {origin: 'left', delay: 300, interval: 200})
sr.reveal('.contact__text', {origin: 'left', delay: 300, interval: 200})
sr.reveal('.contact__image', {origin: 'right', delay: 300, interval: 200})


// ====== CHANGING ACTIVE LINK ========

const scrollActive = ()=> {
    const sections = document.querySelectorAll("section[id]")
    const scrollDown = window.scrollY;

    sections.forEach((section)=> {
        const secHeight = section.offsetHeight;
        const top = section.offsetTop - 50
        const sectionId = section.id;
        const sectionLink = document.querySelector(`.header .menu a[href='#${sectionId}']`)

        if (scrollDown >= top - 30 && scrollDown < top + secHeight - 80) {
            sectionLink.classList.add("active")
        } else {
            sectionLink.classList.remove("active")
        }
    })
}

window.addEventListener("scroll", scrollActive)

// ===== CLOSE  MENU ========
const links = document.querySelectorAll(".menu a")

links.forEach(link=> {
    link.addEventListener("click", ()=> {
        menu.classList.remove('show')
    })
})
// =============================================
