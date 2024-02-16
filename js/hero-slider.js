document.addEventListener("DOMContentLoaded", function () {
    var slides = document.querySelectorAll('.hero-slide');
    var dotsContainer = document.querySelector('.dot-container');
    var currentSlide = 0;

    function showSlide(index) {
      slides[currentSlide].style.opacity = 0;
      slides[currentSlide].style.display = 'none';
      slides[index].style.display = 'block';
      setTimeout(() => {
        slides[index].style.opacity = 1;
      }, 10);
      currentSlide = index;
    }

    function nextSlide() {
      var nextIndex = (currentSlide + 1) % slides.length;
      showSlide(nextIndex);
      updateDots(nextIndex);
    }

    function updateDots(index) {
      dots.forEach(dot => dot.classList.remove('active-dot'));
      dots[index].classList.add('active-dot');
    }

    // Create dots
    var dots = [];
    for (var i = 0; i < slides.length; i++) {
      var dot = document.createElement('div');
      dot.classList.add('dot');
      dot.addEventListener('click', function (i) {
        return function () {
          showSlide(i);
          updateDots(i);
          clearInterval(intervalId);
        };
      }(i));
      dotsContainer.appendChild(dot);
      dots.push(dot);
    }

    // Initial setup
    showSlide(0);
    dots[0].classList.add('active-dot');

    // Set interval to change slides
    var intervalId = setInterval(nextSlide, 7000); // Change slide every 3000 milliseconds (3 seconds)

    // Stop interval on last slide
    // slides[slides.length - 1].addEventListener('transitionend', function () {
    //   clearInterval(intervalId);
    // });
  });