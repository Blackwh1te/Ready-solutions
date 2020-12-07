(function ($) {
   $(document).ready(function() {

 
      
      $('a').click(function(e) {
         e.preventDefault();
         let id  = $(this).attr('href');
         let top = $(id).offset().top;
         $('body, html').animate({scrollTop: top - 50}, 800);
      });



   });
})(jQuery);