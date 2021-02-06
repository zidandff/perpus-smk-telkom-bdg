// navbar on scroll
const navbar = document.querySelector('.navbar')
const headline = document.querySelector('.headline')
window.addEventListener('scroll', ()=> {
    if(pageYOffset > headline.offsetTop - 30){
        navbar.classList.add('colored')
    }else {
        navbar.classList.remove('colored')
    }
})

// when navbar toggler on click
const navToggler = document.querySelector('.navbar-toggler')
navToggler.addEventListener('click', ()=> {
    // change background navbar
    navbar.classList.add('colored')
})

// media queries
const mediaQuery = window.matchMedia('(max-width: 575.98px)')

// Searchbar animation on focus
const searchBar = document.querySelector('.search-bar');
const inputbar = document.querySelector('input.form-control')

if(inputbar && searchBar ){
    inputbar.addEventListener('focus', function(){
        searchBar.classList.add('on-focus')
        // Check if the media query is true
        if (mediaQuery.matches) {
            // Then trigger an transform
            navbar.style.transform = "translateY(-100px)"
        }
    })
    
    inputbar.addEventListener('focusout', function(){
        searchBar.classList.remove('on-focus')
        // Check if the media query is true
        if (mediaQuery.matches) {
            // Then trigger an transform
            navbar.style.transform = "translateY(0)"
        }
    })

}

// modal img
const thumbs = document.querySelectorAll(".book-thumb")

if( thumbs.length !== 0 ){
    const modal = document.querySelector('.modal-img')
    const imgModal = document.querySelector('.modal-img img')
    const close = document.querySelector('.close')
    
    thumbs.forEach((thumb)=> {
        thumb.addEventListener('click', (e)=>{
            imgModal.setAttribute('src', `${e.target.getAttribute('src')}`)
            modal.classList.add('open')
        })
    })

    modal.addEventListener('click', (e)=>{
        e.target.classList.remove('open')
    })
    close.addEventListener('click', ()=>{
        modal.classList.remove('open')
    })
}

// swiper.js
if(document.querySelector('.swiper-kategori')){
    const mySwiper = new Swiper('.swiper-kategori', {
        // Optional parameters
        slidesPerView: 'auto',
        spaceBetween: 30,
        autoplay: {
            delay: 2000,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 'auto',
                spaceBetween: 20
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 40
            }
        }
    })
}

if(document.querySelector('.swiper-buku')){
    const mySwiper = new Swiper('.swiper-buku', {
        // Optional parameters
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        autoplay: {
            delay: 2000,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 'auto',
                spaceBetween: 20
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            992: {
                slidesPerView: 4
            }
        }
    })
}


// light Gallery library
lightGallery(document.getElementById('lightbox'),{
    selector: '.item'
}); 


// AOS library
AOS.init({
    offset: 170,
    duration: 800
});

