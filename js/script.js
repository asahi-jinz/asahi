document.addEventListener('DOMContentLoaded', function () {

const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 2500,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

});

$(function () {
  $(window).on("scroll", function () {
    mvHeight = $(".fv").height();
    if ($(window).scrollTop() > mvHeight) {
      $(".navi").addClass("transform");
    } else {
      $(".navi").removeClass("transform");
    }
  });
});

  $(document).ready(function(){
    $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if(target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 1500);
      }
    });
  });
