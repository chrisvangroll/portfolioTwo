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

const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('skillsAnimation');
      }
    });
  });
  
  observer.observe(document.querySelector('skills_item'));