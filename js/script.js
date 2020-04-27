$(document).ready(function(){
    
//    //smooth scroll
//    $('.nav-item a, .header-line, #back-to-top').click(function(link){
//        link.preventDefault();
//        
//        let target = $(this).attr('href');
//        
//        $('html, body').animate({
//            scroolTop: $(target).offset().top - 25
//        },3000);
//    });
    
    //ripples
    $("#header, .info").ripples({
        dropRadius: 10,
        perturbance: 0.002,
    });
    //magnific popup
    $('.parent-container').magnificPopup({
        delegate: 'a',
        type: 'image',
        
        gallery: {
            enabled: true
        }
    });
    
    
});