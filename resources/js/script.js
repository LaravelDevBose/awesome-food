$(document).ready(function(){
    
    /*Mobile Navigation */
    $('.js--mobile-nav-icon').on('click', function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--mobile-nav-icon i');
        
        nav.slideToggle(200);
        
        if(icon.hasClass('ion-ios-menu')){
                icon.addClass('ion-ios-close');
                icon.removeClass('ion-ios-menu');
           }else{
                icon.addClass('ion-ios-menu');
                icon.removeClass('ion-ios-close');
           }
    })
    
    /*Sticky Navigation */
    
    $('.js--section-features').waypoint(function(dir){
        if(dir === 'down'){
            $('nav').addClass('sticky');    
       }else{
           $('nav').removeClass('sticky');
       }
    },{
        offset: '60px;'
    });
    
    /*Scroll on Buttons */
    
    $('.js--scroll-to-plans').on('click', function(){
        $('html, body').animate({scrollTop: $('.js-section-plans').offset().top}, 1000);
    });
    
    $('.js--scroll-top').on('click', function(){
        $('html, body').animate({scrollTop: $('.js--header').offset().top}, 1000);
    });
    
    
    /*Navigation Smooth Scroll */
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
          }
        }
      });
    
    /*Js Animation using Waypoint*/
    
    $('.js--animation-1').waypoint(function(dir){
        $('.js--animation-1').addClass('animate__animated animate__backInRight');
    }, {
        offset: '70%'
    });
    $('.js--animation-2').waypoint(function(dir){
        $('.js--animation-2').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '70%'
    });
    $('.js--animation-3').waypoint(function(dir){
        $('.js--animation-3').addClass('animate__animated animate__zoomIn');
    }, {
        offset: '70%'
    });
    $('.js--animation-4').waypoint(function(dir){
        $('.js--animation-4').addClass('animate__animated animate__fadeInUpBig');
    }, {
        offset: '70%'
    });
    $('.js--animation-5').waypoint(function(dir){
        $('.js--animation-5').addClass('animate__animated animate__slideInDown');
    }, {
        offset: '70%'
    });
    
    $('.js--animation-6').waypoint(function(dir){
        $('.js--animation-6').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '70%'
    });
    
    $('.js--animation-7').waypoint(function(dir){
        $('.js--animation-7').addClass('animate__animated animate__lightSpeedInRight');
    }, {
        offset: '70%'
    });
    
    $('.js--animation-8').waypoint(function(dir){
        $('.js--animation-8').addClass('animate__animated animate__heartBeat');
    }, {
        offset: '70%'
    });
});