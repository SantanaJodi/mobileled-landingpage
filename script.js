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
    } else {
      $(this).next('div').css('height','0px');
    }
  })
})
