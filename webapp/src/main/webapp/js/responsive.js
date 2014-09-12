(function($){

  $(document).ready(function(){

    var homeLinkHtml = $("#HomeLink").html();
    var hamburgerHtml = "<div class='responsiveMenu'>&#9776;</div>";
    $("#HomeLink").html(hamburgerHtml + homeLinkHtml);

    $(".responsiveMenu").on("click", function(){
      var $leftNavigationTDContainer = $(".LeftNavigationTDContainer");
      if ($leftNavigationTDContainer.css("display")==="none") {
        $leftNavigationTDContainer.animate({width: 'show', duration: 50});
      } else {
        $leftNavigationTDContainer.animate({width: 'hide', duration: 50});
      }
    });

    resize();

    $( window ).resize(function() {
      resize();
    });

  });

})(jQuery);

function resize() {

      if ($(window).width() > 480 ) {
          var $leftNavigationTDContainer = $(".LeftNavigationTDContainer");
         if (!$leftNavigationTDContainer.is(":visible")) {
          $leftNavigationTDContainer.animate({width: 'show', duration: 50});
        }
      }
}