$(function() {
  "use strict";
  $(window).on('load', function(event) {
      $('.preloader').delay(500).fadeOut(500);
  });
  $(".navbar-toggler").on('click', function() {
      $(this).toggleClass('active');
  });
  $(".navbar-nav a").on('click', function() {
      $(".navbar-toggler").removeClass('active');
  });
  $(".navbar-nav a").on('click', function() {
      $(".navbar-collapse").removeClass("show");
  });
  $(window).on('scroll', function(event) {
      var scroll = $(window).scrollTop();
      if (scroll < 10) {
          $(".navigation-bar").removeClass("sticky");
      } else {
          $(".navigation-bar").addClass("sticky");
      }
  });

});
