// Scrolling Effect
$(window).on("scroll", function() {
  if($(window).scrollTop()) {
        $('.navbar').addClass('light');
  }

  else {
        $('.navbar').removeClass('light');
  }
})