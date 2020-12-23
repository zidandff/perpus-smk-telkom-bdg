// navbar on scroll
const navbar = document.querySelector('.navbar')
const headline = document.querySelector('.headline')
window.addEventListener('scroll', ()=> {
    if(pageYOffset > headline.offsetTop - 80){
        navbar.style.backgroundColor = "#fff"
        navbar.style.transition = ".3s"
        navbar.style.boxShadow = "0 0px 15px rgba(0, 0, 0, 0.1)"
    }else {
        navbar.style.backgroundColor = "transparent"
        navbar.style.transition = ".3s"
        navbar.style.boxShadow = "0 0px 15px rgba(0, 0, 0, 0)"
    }
})

const navToggler = document.querySelector('.navbar-toggler')
navToggler.addEventListener('click', ()=> {
    navbar.style.backgroundColor = "#fff"
    navbar.style.transition = ".3s"
    navbar.style.boxShadow = "0 0px 15px rgba(0, 0, 0, 0.1)"
})


// Searchbar animation
const searchBar = document.querySelector('.input-group');
const inputbar = document.querySelector('input.form-control')

inputbar.addEventListener('focus', function(){
    searchBar.style.transform = "translate(4px, 4px)";
    searchBar.style.boxShadow = "0 0 black";
    navbar.style.transform = "translateY(-100px)"
})

inputbar.addEventListener('focusout', function(){
    searchBar.style.transform = "translate(0, 0)";
    searchBar.style.boxShadow = "5px 5px #CF1B1B";
    navbar.style.transform = "translateY(0)"
})

// light Gallery library
lightGallery(document.getElementById('lightbox'),{
    selector: '.item'
}); 


// AOS library
AOS.init({
    offset: 170,
    duration: 800
});