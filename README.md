<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="Readysolutions_0"></a>Ready-solutions</h1>
<p class="has-line-data" data-line-start="1" data-line-end="2">Ready solutions</p>
<p class="has-line-data" data-line-start="4" data-line-end="7">Drupal link to node (product) page:<br>
$url = url(‘node/’ . $node-&gt;nid);<br>
&lt;a href=&quot;&lt;?php print $url; ?&gt;&quot;&gt;link&lt;/a&gt;</p>
<p class="has-line-data" data-line-start="9" data-line-end="21">Scroll animations:<br>
<a href="https://michalsnik.github.io/aos/">https://michalsnik.github.io/aos/</a><br>
$(’.view-projects .views-row:nth-child(3n + 1)’).each(function() {<br>
$(this).attr(‘data-aos’, ‘flip-left’);<br>
});<br>
$(’.view-projects .views-row:nth-child(3n + 2)’).each(function() {<br>
$(this).attr(‘data-aos’, ‘flip-up’);<br>
});<br>
$(’.view-projects .views-row:nth-child(3n + 3)’).each(function() {<br>
$(this).attr(‘data-aos’, ‘flip-right’);<br>
});<br>
AOS.init();</p>
<p class="has-line-data" data-line-start="22" data-line-end="32">Animations:<br>
<a href="https://lottiefiles.com/">https://lottiefiles.com/</a><br>
<a href="https://github.com/airbnb/lottie-web/blob/master/build/player/lottie.min.js">https://github.com/airbnb/lottie-web/blob/master/build/player/lottie.min.js</a><br>
let animation404 = lottie.loadAnimation({<br>
container: document.querySelector(’.error404__animation’), // DOM элемент, на который будет повешен Lottie<br>
renderer: ‘svg’, // тип рендера (‘svg’ / ‘canvas’)<br>
loop: true, // зацикливание (true / false / number)<br>
autoplay: true, // автовоспроизведение (true / false)<br>
path: ‘sites/all/themes/main_theme/animations/404.json’ // путь до json, сгенерированного с помощью Bodymovin<br>
});</p>
