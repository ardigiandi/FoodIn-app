document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    let currentIndex = 0;
  
    function showNextSlide() {
      currentIndex = (currentIndex + 1) % totalItems;
      updateCarousel();
    }
  
    function showPrevSlide() {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      updateCarousel();
    }
  
    function updateCarousel() {
      const newTransformValue = -currentIndex * 100 + '%';
      carouselInner.style.transform = 'translateX(' + newTransformValue + ')';
    }
  
    function autoSlide() {
      showNextSlide();
    }
  
    let autoSlideInterval = setInterval(autoSlide, 3000);
  
    function pauseAutoSlide() {
      clearInterval(autoSlideInterval);
    }
  
    function resumeAutoSlide() {
      autoSlideInterval = setInterval(autoSlide, 3000);
    }
  
    prevButton.addEventListener('click', function () {
      showPrevSlide();
      pauseAutoSlide();
    });
  
    nextButton.addEventListener('click', function () {
      showNextSlide();
      pauseAutoSlide();
    });
  
    carousel.addEventListener('mouseover', pauseAutoSlide);
    carousel.addEventListener('mouseout', resumeAutoSlide);
  });