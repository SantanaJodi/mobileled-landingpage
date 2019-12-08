$(document).ready(function(){
  $('.carouse').slick({
    infinite: false,
    centerMode: true,
    dots: true,
    variableWidth: true,
    focusOnSelect: true,
    arrows: false,
    mobileFirst: true,

    // Responsive
    responsive: [{
      breakpoint: 600,
      settings: {
        initialSlide: 1,
      }
    }]
  })

  $('.carouse-route').slick({
    infinite: false,
    centerMode: true,
    variableWidth: true,
    focusOnSelect: false,
    arrows: false,
    mobileFirst: true,

    // Responsive
    responsive: [{
      breakpoint: 600,
      settings: {
        centerMode: false,
        infinite: true,
        dots: true,
        slidesToScroll: 2,
        slidesToShow: 3
      }
    }]
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

  // ACCORDION
  $('#footer-accordion > a').click(function(){
    if ($(this).next().css('max-height') == '0px'){
      $(this).next('div').css('max-height', '500px');
      $(this).css('color', '#ec1f7f');
      $(this).find('img').css('transform', 'rotate(180deg)');
    } else {
      $(this).next('div').css('max-height','0px');
      $(this).css('color', '#fafafa');
      $(this).find('img').css('transform', 'rotate(0deg)');
    }
  })

  // NAV SLIDE IN
  $('#product').click(function(){
    if ($('.content-menu ul').css('visibility') == 'hidden'){
      $('.content-menu ul').css('visibility','visible')
      $('.content-menu ul').css('opacity','1')
    } else {
      $('.content-menu ul').css('visibility','hidden')
      $('.content-menu ul').css('opacity','0')
    }
  })

  // HAMBURGER MENU
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

  // SCROLL TO ROUTE
  $('#scrollto-route').click(function(){
    var scroll = $('.slider-wrapper-route').offset().top;
    $('html, body').animate({
      scrollTop: scroll - 80
    }, 1000);
  })

  $('.buttons-wrapper').hover(function(){
    $('.primary-button').toggleClass('prime-btn-hover');
  })

  // !!! MEDIA QUERY !!!
  if ($(window).innerWidth() >= 900) {
    $('.carouse').slick('unslick');
    $('.carouse-featuredon').slick('unslick');

    $('.carouse').css({
      'display': 'flex',
      'justify-content':'center',
      'align-items': 'center',
    });
  }

  $(window).resize(function(){
    location.reload();
  })
})
