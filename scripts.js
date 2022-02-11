const menubar = document.querySelector('.nav-wrapper-bar')
const closebutton = document.querySelector('.nav-wrapper-close')
const info = document.querySelector('.nav-wrapper-info')
const hero = document.querySelector('.hero')
const navcontent = document.querySelector('.nav-content')

menubar.addEventListener('click', () => {
    //hide info
    //hide bar
    //hide hero
    //show navcontent
    info.classList.add('hide')
    menubar.classList.add('hide')
    hero.classList.add('hide')
    closebutton.classList.add('show')
    navcontent.classList.add('show-flex')
})

closebutton.addEventListener('click', () => {
    //show info
    //show menubar
    //show hero
    //hide navcontent
    //hide closebutton
    info.classList.remove('hide')
    menubar.classList.remove('hide')
    hero.classList.remove('hide')
    navcontent.classList.remove('show-flex')
    closebutton.classList.remove('show')
})