$(document).ready(function() {
    /*


        $('.btn-unveil').on('click', function() {
            $('.cover').addClass('woosh');

        });
    */


    var $window = $(window);
    $window.on('scroll resize', window_scrolled);

function window_scrolled(){
  check_if_in_view();
  //check_offset();

}
    function check_if_in_view() {
        console.log("scrolling");
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);


        var $element = $('.timeline');
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
        var animationState = false;
        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position) && !animationState) {

            $('.branch-content').addClass('branch-content-animated');
            $('.fill-branch').addClass('branch-animated');
            $('.progress').addClass('progress-done');
            $('.fill-circle').addClass('milestone-animated');
            animationState = true;
        }


    }
/*

    function check_offset(){
console.log($('.event-info').offset().top);
var scrollTop = $(window).scrollTop();
      var elementOffset = $('.event-info').offset().top;
      var currentElementOffset = (elementOffset - scrollTop);
      if (currentElementOffset >=200){
        $('.event-info').css({position:'fixed', top:'200px'});
      }
    }
*/

    $('.nav-icon').on('click', function() {
        $('.top-nav-menu').toggleClass('slide-in');
        $('.line2').toggleClass('line2-animated');
        $('.line1').toggleClass('line1-animated');
        $('.line3').toggleClass('line3-animated');
        $('main').toggleClass('main-dimmed');
    });





});
