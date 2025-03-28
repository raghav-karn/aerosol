/* header*/
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* scroll animation*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home__header, .section__title`,{delay: 600})
sr.reveal(`.home__footer`,{delay: 700})
sr.reveal(`.home__img`,{delay: 900, origin: 'top'})

sr.reveal(`.sponsor__img, .products__card`,{origin: 'top', interval: 100})
sr.reveal(`.features__data, .instructions__animate`,{origin: 'left', interval: 100})
sr.reveal(`.features__img, .instructions__img`,{origin: 'right'})