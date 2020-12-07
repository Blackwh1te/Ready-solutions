(function ($) {
   $(document).ready(function() {

 
      
      let slideUpLink = $('.slide-up');    
      slideUpLink.hide();
      $(window).scroll(function () {
           if ($(this).scrollTop() > 400) {
          slideUpLink.fadeIn();
           } else {
              slideUpLink.fadeOut();
           }
        });
      slideUpLink.click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: '0px'}, 800);
      });
      


   });
})(jQuery);