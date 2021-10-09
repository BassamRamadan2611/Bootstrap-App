$(function(){
'use strict';


var winH = $(window).height();

var upperH = $('.upper-bar').innerHeight();
var navH = $('.navbar').innerHeight();
$('.slider ,.carousel-item').height(winH- (upperH+navH));

$('.feature-work ul li').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
    if($(this).data('class') ==='all'){
        $('.total-img .row .col-md').css('opacity',1);


    }
    else{
        
        $('.total-img .row .col-md').css('opacity',.08);
       $($(this).data('class')).parent().css('opacity',1);
        
    }
})

$('.navbar-nav .nav-item').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');


});


})