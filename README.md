# Ready-solutions
 Ready solutions


Drupal link to node (product) page:
 $url = url('node/' . $node->nid);
 <a href="<?php print $url; ?>">link</a>


Scroll animations:
https://michalsnik.github.io/aos/
$('.view-projects .views-row:nth-child(3n + 1)').each(function() {
  $(this).attr('data-aos', 'flip-left');
});
$('.view-projects .views-row:nth-child(3n + 2)').each(function() {
  $(this).attr('data-aos', 'flip-up');
});
$('.view-projects .views-row:nth-child(3n + 3)').each(function() {
  $(this).attr('data-aos', 'flip-right');
});
AOS.init();

Animations:
https://lottiefiles.com/
https://github.com/airbnb/lottie-web/blob/master/build/player/lottie.min.js
 let animation404 = lottie.loadAnimation({
   container: document.querySelector('.error404__animation'), // DOM элемент, на который будет повешен Lottie
   renderer: 'svg', // тип рендера ('svg' / 'canvas')
   loop: true, // зацикливание (true / false / number)
   autoplay: true, // автовоспроизведение (true / false)
   path: 'sites/all/themes/main_theme/animations/404.json' // путь до json, сгенерированного с помощью Bodymovin
 });
