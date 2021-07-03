const navToggler = document.getElementById('nav-toggler')
const mobNav = document.getElementById('mob-nav')
const tabNav = document.getElementById('tab-nav')
const readMore = document.getElementById('more')
const moreBtn = document.getElementById('more-btn')
const logo = document.getElementById("more-btn-logo")

navToggler.addEventListener('click' , ()=>{
    navToggler.classList.toggle('fa-times') ;

    navigationResponsiveness()
})


const navigationResponsiveness = ()=>{
    tabNav.classList.toggle('hide')
    mobNav.classList.toggle('mob-nav')
}

moreBtn.addEventListener('click' , ()=>{
    readMore.classList.toggle('show')
    logo.classList.toggle('fa-angle-double-up')
})














