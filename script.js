// Wait for the webpage to fully load before running any code
// This prevents errors from trying to use elements that aren't ready yet
document.addEventListener('DOMContentLoaded', function() {
  // ===== MOBILE MENU FUNCTIONALITY =====
  
  // Get the hamburger menu button and navigation menu
  let bars = document.querySelector('#bars');        // Menu button
  let navbar = document.querySelector('.navbar');    // Navigation menu

  // When menu button is clicked, toggle the mobile menu
  bars.onclick = () => {
    // Toggle the 'active' class on the navbar
    // This switches between showing and hiding the menu
    navbar.classList.toggle('active');
    
    // If menu is active, show it fully
    if(navbar.classList.contains('active')) {
      // Show full menu by creating a rectangle shape
      navbar.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
    } 
    else {
      // Hide menu by creating a line at the top
      navbar.style.clipPath = 'polygon(0 0, 100% 0, 0 0)';
    }
  }

  // ===== SEARCH FUNCTIONALITY =====
  
  // When search icon is clicked, show the search form
  document.querySelector('#search-icon').onclick = () => {
    // Toggle the search form's visibility
    document.querySelector('#search-form').classList.toggle('active');
  }
  
  // When close button is clicked, hide the search form
  document.querySelector('#search-form .close').onclick = () => {
    // Hide the search form
    document.querySelector('#search-form').classList.remove('active');
  }

  // ===== IMAGE SLIDER FUNCTIONALITY =====
  
  // Get the slider elements
  const wrapper = document.querySelector('.home-slider .wrapper');    // Container for all slides
  const slides = document.querySelectorAll('.home-slider .slide');    // Individual slides
  let currentSlide = 0;                                              // Track current slide

  // Create navigation dots container
  const navContainer = document.createElement('div');
  navContainer.className = 'slider-nav';
  
  // Create a dot for each slide
  slides.forEach((_, index) => {
    const button = document.createElement('button');
    // When dot is clicked, go to that slide
    button.addEventListener('click', () => goToSlide(index));
    navContainer.appendChild(button);
  });
  // Add dots to the slider
  document.querySelector('.home-slider').appendChild(navContainer);

  // Function to show a specific slide
  function goToSlide(index) {
    // Update current slide number
    currentSlide = index;
    // Move slider to show the correct slide
    wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
    // Update which dot is active
    document.querySelectorAll('.slider-nav button').forEach((btn, i) => {
      btn.classList.toggle('active', i === currentSlide);
    });
  }

  // Automatically move to next slide every 5 seconds
  setInterval(() => {
    // Calculate next slide number (loop back to start if at end)
    currentSlide = (currentSlide + 1) % slides.length;
    // Show the next slide
    goToSlide(currentSlide);
  }, 5000);

  // Show first slide when page loads
  goToSlide(0);
}); // End of page load event listener
