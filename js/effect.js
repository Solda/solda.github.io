
        // <!-- jquery + 動態背景色 -->
        // <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
        // <script src="js/jquery.adaptive-backgrounds.js"></script>
        // <script src="js/effect.js"></script>



        <!-- jQuery -->
        // <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
        // <script src="js/jquery.lazyload.min.js"></script>
        // <script src="js/effect.js"></script>


$(document).ready(function(){

// for article

// var article      = {
//   selector:             '.backdrop',
//   parent:               '.big-bg',
//   exclude:              [ 'rgb(0,0,0)', 'rgba(255,255,255)' ],
//   normalizeTextColor:   false,
//   normalizedTextColors:  {
//     light:      "#fff",
//     dark:       "#000"
//   },
//   lumaClasses:  {
//     light:      "ab-light",
//     dark:       "ab-dark"
//   }
// };
// $.adaptiveBackground.run(article);

// $.adaptiveBackground.run();


  $("img").lazyload();
  $("div.mdl-card").lazyload({
      effect : "fadeIn"
  });

});