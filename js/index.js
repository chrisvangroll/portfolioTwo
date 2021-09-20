const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav_link');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () =>{
    document.body.classList.toggle('nav-open')
})

navLinks.forEach(link =>{
    link.addEventListener('click', ()=>{
        document.body.classList.remove('nav-open');
    }) 
});