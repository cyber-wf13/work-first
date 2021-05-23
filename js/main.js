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

$( "#slider" ).slider();