$(document).ready(function(){
  $('.carouse').slick({
    infinite: false,
    centerMode: true,
    dots: true,
    variableWidth: true,
    focusOnSelect: true,
    arrows: false
  })

  $('.carouse-route').slick({
    infinite: false,
    centerMode: true,
    dots: false,
    variableWidth: true,
    focusOnSelect: true,
    arrows: false
  })

  $('.carouse-featuredon').slick({
    infinite: true,
    centerMode: true,
    dots: false,
    variableWidth: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  })

  $('#footer-accordion h3').click(function(){
    if ($(this).next().css('height') == '0px'){
      $(this).next('div').css('height', 'auto');
      $(this).css('color', '#ec1f7f');
    } else {
      $(this).next('div').css('height','0px');
      $(this).css('color', '#fafafa');
    }
  })

  $('#product').click(function(){
    if ($('.content-menu ul').css('visibility') == 'hidden'){
      $('.content-menu ul').css('visibility','visible')
      $('.content-menu ul').css('opacity','1')
    } else {
      $('.content-menu ul').css('visibility','hidden')
      $('.content-menu ul').css('opacity','0')
    }
  })

  $('#hamburger').click(function(){
    $('.blackout').css('display', 'block');
    $('.navmenu').css('right', '0rem');
  })

  $('.blackout').click(function(){
    $('.blackout').css('display', 'none');
    $('.navmenu').css('right', '-15rem');
    $('.content-menu ul').css('visibility','hidden')
    $('.content-menu ul').css('opacity','0')
  })

  $('#close-navmenu').click(function(){
    $('.blackout').css('display', 'none');
    $('.navmenu').css('right', '-15rem');
    $('.content-menu ul').css('visibility','hidden')
    $('.content-menu ul').css('opacity','0')
  })
})
