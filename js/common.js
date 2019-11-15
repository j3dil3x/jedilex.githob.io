$(document).ready(function() {
$('.preloader').fadeOut();
});
jQuery(function(){
  $('.slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false,
  });

  $('.slick-dots').click(function() {
      $('.slick-active').removeClass('slick-button');
    });

$('.slider2').slick({
  variableWidth: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 200,
  pauseOnFocus: false,
  pauseOnHover: false,
  arrows: true,
});
$('section').css({'height' : `${$(window).height()}px`});
$('.slide').css({'height' : `${$(window).height()}px`});
$('.slide').css({'width' : `${$(window).width()}px`});
$('.slide p').css({'height' : `${$(window).height()}px`});
$(window).resize(function(){
  $('section').css({'height' : `${$(window).height()}px`});
  $('.slide').css({'height' : `${$(window).height()}px`});
});
$('section').css({'max-width' : `${$('window').width()}`})
$('.wrap').Lazy();
$('.wrap0').Lazy();
$('.wrap2').Lazy();
$(".list1").click(function(){
$(".wrap0").slideDown(function(){
  $('.slider').slick('slickPlay');
  $('.moreInfo2').hide();
  $('.list2').css({'width':'90px', 'height':'30px', 'font-size' : '18px'});
  $('.list1').css({'width':'120px', 'height':'40px', 'font-size' : '24px'});
  $('.list3').css({'width':'90px', 'height':'30px', 'font-size' : '18px'});
});
$(".wrap2").slideUp();
$(".wrap").slideUp();
});
$(".moreInfo").click(function(){
$(".wrap").slideToggle(function(){
  $('.list2').css({'width':'120px', 'height':'40px', 'font-size' : '24px'});
  $('.list1').css({'width':'90px', 'height':'30px', 'font-size' : '18px'});
  $('.list3').css({'width':'90px', 'height':'30px', 'font-size' : '18px'});
});
$(".wrap0").slideToggle();
});
$(".list2").click(function(){
$(".wrap").slideDown(function(){
  $('.list2').css({'width':'120px', 'height':'40px', 'font-size' : '24px'});
  $('.list1').css({'width':'90px', 'height':'30px', 'font-size' : '18px'});
  $('.list3').css({'width':'90px', 'height':'30px', 'font-size' : '18px'});
});
$(".wrap0").slideUp();
$(".wrap2").slideUp();
});
$(".moreInfo2").click(function(){

$(".wrap2").slideToggle(function(){
  $('.list3').css({'width':'120px', 'height':'40px', 'font-size' : '24px'});
  $('.list2').css({'width':'90px', 'height':'30px', 'font-size' : '18px'});
  $('.list1').css({'width':'90px', 'height':'30px', 'font-size' : '18px'});
  $('.anim').addClass('wow bounceInLeft')
});
$(".wrap").slideToggle();
})
$(".list3").click(function(){
$(".wrap2").slideDown(function(){
  $('.list3').css({'width':'120px', 'height':'40px', 'font-size' : '24px'});
  $('.list2').css({'width':'90px', 'height':'30px', 'font-size' : '18px'});
  $('.list1').css({'width':'90px', 'height':'30px', 'font-size' : '18px'});
});
$(".wrap").slideUp();
$(".wrap0").slideUp();
})

$('.moreInfo').click(function(){
  $('.list').css({'color' : 'white', 'border-color' : 'white'})
  $('.listP div').css({'color' : 'white', 'border-color' : 'white'})
  $('.moreInfo').hide();
  $('.moreInfo2').show();
  $('.slider').slick('slickPause');
})
$('.moreInfo2').click(function(){
  $('.section3 ol li h4').addClass('wow bounceInUp');
  $('.moreInfo2').hide();
  $('.slider').slick('slickPause');
})
});
$('.list2').click(function(){
  $('.list').css({'color' : 'white', 'border-color' : 'white'})
  $('.listP div').css({'color' : 'white', 'border-color' : 'white'})
  $('.moreInfo2').show();
  $('.moreInfo').hide();
  $('.slider').slick('slickPause');
});
$('.list1').click(function(){
  $('.moreInfo').show();
  $('.moreInfo2').hide();
  $('.slider').slick('slickPlay');
});
$('.list3').click(function(){
  $('.list').css({'color' : 'white', 'border-color' : 'white'})
    $('.listP div').css({'color' : 'white', 'border-color' : 'white'})
  $('.moreInfo').hide()
  $('.moreInfo2').hide()
  $('.slider').slick('slickPause');
});

$('.moreInfo').click(function(){
  $('header').css({'display': 'none'});
});
$('.list2').click(function(){
  $('header').css({'display': 'none'});
});
$('.list3').click(function(){
  $('header').css({'display': 'none'});
});
$('.list1').click(function(){
  $('header').css({'display': 'flex'});
});
