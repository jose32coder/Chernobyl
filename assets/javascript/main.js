//  ==================    MENU    ==================

window.addEventListener('scroll', () =>{
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
    let logo = document.querySelector('.logo');
    logo.classList.toggle('logo2', window.scrollY > 0)
})
