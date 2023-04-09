const portfolioContainers = document.querySelectorAll('.portfolio_container');
portfolioContainers.forEach(container => {
  container.addEventListener('click', (event) => {
    console.log('clicked')
    const portfolioItem = container.querySelector('.portfolio_item');
    const portfolioItemDescription = container.querySelector('.portfolio_item--description');
    
    portfolioItem.classList.toggle('show');
    portfolioItemDescription.classList.toggle('hide');
  });
});