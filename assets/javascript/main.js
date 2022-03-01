//  ================== MENU ==================

window.addEventListener('scroll', () =>{
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
    let logo = document.querySelector('.logo');
    logo.classList.toggle('logo2', window.scrollY > 0)
})

//  ================== TYPED JS ==================

const typed = new Typed('.title',{
    strings: [
        '<span class="title2">C H E R N O B Y L</span>'
    ],
    typeSpeed: 60,
    starDelay: 5000,
    backDelay: 1500,
    loop: false,
    cursorChar: ''
})

//  ================== GSAP ANIMATION ==================



let animated = gsap.timeline({
    repeat: 0
});
animated.from('.logo', {
    delay: 1,
    y: -300,
    duration: 2.5,
    opacity: 0,
    ease: 'ease.out'
})
animated.from('.ul-menu', {
    y: -300,
    duration: 2.5,
    opacity: 0,
    ease: 'ease.out'
}, '-=2.5')
animated.from('.info', {
    y: -50,
    duration: 2,
    opacity: 0,
    ease: 'ease.InOut'
})
animated.from('.infoS', {
    delay: 0,
    y: -25,
    duration: 2,
    opacity: 0,
    ease: 'ease.out'
}, '-=1')
animated.from('.more-info', {
    delay: 0,
    y: -50,
    duration: 2,
    opacity: 0,
    ease: 'ease.out'
}, '-=1')
animated.from('.show-more', {
    delay: 0,
    y: -50,
    duration: 2,
    opacity: 0,
    ease: 'ease.out'
}, '-=1.5')
animated.from('.bottom_nav', {
    delay: 0,
    y: -50,
    duration: 2,
    opacity: 0,
    ease: 'ease.out'
}, '-=1.5')

