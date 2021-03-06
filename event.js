// icon.onclick = function(){
//    if(mySong.paused){
//     mySong.play();
    
//     icon.src="image/pause.png";
//     console.log("show icon");
//    }else{
//     mySong.pause();
 
//     icon.src="image/play.png";
//    }
// }
// function openNav(){
//    document.getElementById("mySidenav").style.height = "100%";
//   }
//   function closeNav(){
//    document.getElementById("mySidenav").style.height = "0%";
// console.log("open nav")  
// }
/* Description: Custom JS file */


(function($) {
   "use strict"; 
  
   /* Navbar Scripts */
   // jQuery to collapse the navbar on scroll
   $(window).on('scroll load', function() {
     if ($(".navbar").offset().top > 60) {
        $(".fixed-top").addClass("top-nav-collapse");
     } else {
        $(".fixed-top").removeClass("top-nav-collapse");
     }
   });
   
  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function() {
     $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
           scrollTop: $($anchor.attr('href')).offset().top
        }, 600, 'easeInOutExpo');
        event.preventDefault();
     });
   });

   // offcanvas script from Bootstrap + added element to close menu on click in small viewport
   $('[data-toggle="offcanvas"], .navbar-nav li a:not(.dropdown-toggle').on('click', function () {
       $('.offcanvas-collapse').toggleClass('open')
   })

   // hover in desktop mode
   function toggleDropdown (e) {
       const _d = $(e.target).closest('.dropdown'),
           _m = $('.dropdown-menu', _d);
       setTimeout(function(){
           const shouldOpen = e.type !== 'click' && _d.is(':hover');
           _m.toggleClass('show', shouldOpen);
           _d.toggleClass('show', shouldOpen);
           $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
       }, e.type === 'mouseleave' ? 300 : 0);
   }
   $('body')
   .on('mouseenter mouseleave','.dropdown',toggleDropdown)
   .on('click', '.dropdown-menu a', toggleDropdown);


   /* Move Form Fields Label When User Types */
   // for input and textarea fields
   $("input, textarea").keyup(function(){
     if ($(this).val() != '') {
        $(this).addClass('notEmpty');
     } else {
        $(this).removeClass('notEmpty');
     }
  });
  

   /* Back To Top Button */
   // create the back to top button
   $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
   var amountScrolled = 700;
   $(window).scroll(function() {
       if ($(window).scrollTop() > amountScrolled) {
           $('a.back-to-top').fadeIn('500');
       } else {
           $('a.back-to-top').fadeOut('500');
       }
   });


  /* Removes Long Focus On Buttons */
  $(".button, a, button").mouseup(function() {
     $(this).blur();
  });

})(jQuery);


// hew
jQuery.easing.jswing=jQuery.easing.swing;
jQuery.extend(jQuery.easing,{
   def:"easeOutQuad",swing:function(e,f,a,h,g){
      "use strict";return jQuery.easing[jQuery.easing.def](e,f,a,h,g)
   },easeInQuad:function(e,f,a,h,g){
      "use strict";return h*(f/=g)*f+a
   },easeOutQuad:function(e,f,a,h,g){
      "use strict";return -h*(f/=g)*(f-2)+a
   },easeInOutQuad:function(e,f,a,h,g){
      "use strict";if((f/=g/2)<1){
         return h/2*f*f+a
      }return -h/2*((--f)*(f-2)-1)+a
   },easeInCubic:function(e,f,a,h,g){"use strict";return h*(f/=g)*f*f+a
},easeOutCubic:function(e,f,a,h,g){
   "use strict";return h*((f=f/g-1)*f*f+1)+a
},easeInOutCubic:function(e,f,a,h,g){
   "use strict";if((f/=g/2)<1){
      return h/2*f*f*f+a
   }return h/2*((f-=2)*f*f+2)+a
},easeInQuart:function(e,f,a,h,g){
   "use strict";return h*(f/=g)*f*f*f+a
},easeOutQuart:function(e,f,a,h,g){"use strict";return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){"use strict";if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){"use strict";return h*(f/=g)*f*f*f*f+a}
,easeOutQuint:function(e,f,a,h,g){"use strict";return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){"use strict";if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){"use strict";return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){"use strict";return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){"use strict";return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){"use strict";return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){"use strict";return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){"use strict";if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){"use strict";return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){"use strict";return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){"use strict";if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){"use strict";var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){"use strict";var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){"use strict";var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){"use strict";if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){"use strict";if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){"use strict";if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){"use strict";return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){"use strict";if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){"use strict";if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});
