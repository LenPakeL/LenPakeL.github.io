window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

const menuToggle = document.querySelector('.nav-menu'); 
const nav =document.querySelector('ul');

menuToggle.addEventListener('click',function() {
    nav.classList.toggle('slide')
} );