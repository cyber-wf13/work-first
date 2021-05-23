$('.content__aside-btn--mobile').on('click',()=>{
  $('.aside').css('left', '0');
  $('.aside__menu-btn--mobile').css('right', '12px');
})

$('.aside__menu-btn--mobile').on('click',()=>{
  $('.aside').removeAttr('style');
  $('.aside__menu-btn--mobile').removeAttr('style');
})

$('.header__menu-btn').on('click', ()=>{
  $('.menu').css('top', '0');
})

$('.menu__btn--mobile').on('click', ()=>{
  $('.menu').removeAttr('style');
})

$('.accordion__radio').each(function(){
  $(this).on('change', ()=>{
    $(this).parents('.accordion__content').siblings('.accordion__header').attr('data-active', 'active');
  })
})

const accordProp = { 
  header: '.accordion__header',
  collapsible: true,
  active: false,
  heightStyle: 'content',
  classes: {
    "ui-accordion": "accordion",
    "ui-accordion-header": "accordion__header",
    "ui-accordion-content": "accordion__content"
  },
  icons: false,
}

$( "#brands" ).accordion(accordProp);
$( "#model" ).accordion(accordProp);
$( "#spares" ).accordion(accordProp);
$( "#carcase" ).accordion(accordProp);
$( "#engine" ).accordion(accordProp);
$( "#capacity" ).accordion(accordProp);
$( "#featuresEngine" ).accordion(accordProp);
$( "#transmission" ).accordion(accordProp);

$( "#year" ).slider({
  range: true,
  step: 1,
  min: 1967,
  max: 2014,
  values: [1967, 2014],
  classes: {
    "ui-slider": "slider",
    "ui-slider-handle": "slider__handle",
    "ui-slider-range": "slider__range",
  },
  slide( event, ui ) {
    $( ".slider-year__amount-value" ).val(ui.values[0] + " - " + ui.values[1]);
  }
});;

$(".slider-year__amount-value").val($( "#year" ).slider( "values", 0 ) + " - " + $( "#year" ).slider( "values", 1 ));

$( "#price" ).slider({
  range: true,
  step: 100,
  min: 100,
  max: 23000,
  values: [100, 23014],
  classes: {
    "ui-slider": "slider",
    "ui-slider-handle": "slider__handle",
    "ui-slider-range": "slider__range",
  },
  slide( event, ui ) {
    $( ".slider-price__amount-value" ).text(ui.values[0] + " - " + ui.values[1]);
    $( ".slider-price__amount-input" ).val(ui.values[0] + " - " + ui.values[1]);
    $('.slider__currency-exchange').text(`${ui.values[0]/10} - ${ui.values[1]/10} $`)
  }
});

$(".slider-price__amount-input").val($( "#price" ).slider( "values", 0 ) + " - " + $( "#price" ).slider( "values", 1 ));
$(".slider-price__amount-value").text($( "#price" ).slider( "values", 0 ) + 
" - " + $( "#price" ).slider( "values", 1 ));
$('.slider__currency-exchange').text("4 - 230 $")
