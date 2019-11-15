let b = $(window).width();
if(b < '1000'){
  $('.mobileFixed').css({'display' : 'flex'});
  $('.listP').css({'display' : 'none'});
  $('.slick-next').css({'margin-right' : '0'});
}
if (b < '715'){
$('.slide2 img:first-child').css({'height' : '40%'});
$('header ul li').css({'display' : 'none'});
$('.listP').css({'display' : 'none'});
$('.ecoProblems').css({'display' : 'none'});
$('.mobileFixed').css({'display' : 'flex'});
$('.slider2').css({'max-width' : `${$(window).width()}px`});
$('.slide2').css({'max-width' : `270px`});
$('.moreInfo').css({'margin-right' : '0', 'width' : '60px', 'font-size' : '0.5em'});
$('.moreInfo2').css({'margin-right' : '0', 'width' : '60px', 'font-size' : '0.5em'});
}else if (b > '715'){
  $('.slider2').css({'max-width' : `${$(window).width() - $(window).width() * .3}px`});
$('header ul li').css({'display' : 'flex'});
$('.mobileFixed').css({'display' : 'none'});
};
$('.mobileFixed').click(function(){
  $('.listP').animate({ 'width': 'toggle'}, 200)
  });
$('.afterClick').click(function(){
$('.listP').css({'display' : 'none'});
});
$('section').css({'max-width' : '${b}'})

if(b < '450'){
  $('.slide2').css({'width' : '${b - 40px}'})
}
