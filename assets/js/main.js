// showing nav menu
$(document).ready(function() {
  $('.navbar-toggler').click(function() {
    $('.mob-menu').toggleClass('mob-active');
    $(this).toggleClass('toggler-active');
    $('.menu-icon').toggle();
    $('.cross-icon').toggle();
  });
});
// Changing Hero Banner Images
document.addEventListener('DOMContentLoaded', function() {
  const images = [
    'assets/images/home-hero-2.jpg',
    'assets/images/home-hero-3.jpg',
    'assets/images/home-hero.jpg'
  ];

  let currentIndex = 0;
  let bg1 = document.getElementById('bg-img-1');
  let bg2 = document.getElementById('bg-img-2');

  function changeBackgroundImage() {
    // Alternate between bg1 and bg2
    if (bg1.style.opacity == 0) {
      bg1.style.backgroundImage = `linear-gradient(
        rgba(0, 0, 0, 0.5), 
        rgba(0, 0, 0, 0.5)
      ), url('${images[currentIndex]}')`;
      bg1.style.opacity = 1;
      bg2.style.opacity = 0;
    } else {
      bg2.style.backgroundImage = `linear-gradient(
        rgba(0, 0, 0, 0.5), 
        rgba(0, 0, 0, 0.5)
      ), url('${images[currentIndex]}')`;
      bg2.style.opacity = 1;
      bg1.style.opacity = 0;
    }

    // Move to the next image
    currentIndex = (currentIndex + 1) % images.length;
  }

  // Change background image every 3 seconds
  setInterval(changeBackgroundImage, 6000);
});

// Swiper JS
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
      delay: 5000,
      disableOnInteraction: false
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true
  },
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
      shadow: false,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94
  }
});
$('#sourcingModal').on('shown.bs.modal', function () {
  swiper.update();
});
// owl carousel query
$(document).ready(function() {
 
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})
$('.prev-btn').click(function(){
  $('.owl-prev').click();
})
$('.next-btn').click(function(){
  $('.owl-next').click();
})
});
