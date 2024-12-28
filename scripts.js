$(document).ready(function() {


jQuery('.nav-items li a').on('click', function() {
    
    $detailsSection = $(this).attr('href');
    jQuery('section').removeClass('active');
    jQuery('section' + $detailsSection).toggleClass('active');
});


});