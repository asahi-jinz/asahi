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
