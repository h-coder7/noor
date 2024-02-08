$(document).ready(function() {

    var wind = $(window);

    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: false,
        live: false
    });
    wow.init();




    // ---------- to top -----------
    $('.to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });


});


// ------------ swiper sliders -----------
$(document).ready(function() {
    // ------------ tc-header-slider4 -----------


});


$(document).ready(function() {
    
})
