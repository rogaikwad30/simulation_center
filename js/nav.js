const navToggler = document.getElementById('nav-toggler')
const mobNav = document.getElementById('mob-nav')
const tabNav = document.getElementById('tab-nav')

navToggler.addEventListener('click' , ()=>{
    navToggler.classList.toggle('fa-times') ;

    navigationResponsiveness()
})


const navigationResponsiveness = ()=>{
    tabNav.classList.toggle('hide')
    mobNav.classList.toggle('mob-nav')
}
















