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
})
