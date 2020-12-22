(function ($) {
   $(document).ready(function() {

 
      
      $('.header__burger-button').click(function() {
         $(this).toggleClass('active');
         $('.header__nav').toggleClass('active');
         $('body').toggleClass('lock');
      });
      
      


   });
})(jQuery);