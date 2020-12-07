(function ($) {
   $(document).ready(function() {

 
      
      $('a.btn').click(function(e) {
         e.preventDefault();
         $('.modal-wrapper').toggleClass('active');
      });

      $('.close').click(function(e) {
         e.preventDefault();
         $(this).closest('.modal-wrapper').toggleClass('active');
      })
      


   });
})(jQuery);