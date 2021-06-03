const selectProp = {
  width: null,
  classes: {
    "ui-selectmenu-button": "select",
    "ui-selectmenu-menu": "select__item",
  }
}

$('.header__menu-btn').on('click', ()=>{
  $('.menu--mobile').css('right', 0);
})

$('.menu__btn--mobile').on('click', ()=>{
  $('.menu--mobile').css('right', '9999px');
})

$('.content__aside-btn--mobile').on('click', function (){
  $('.aside').addClass('aside--active');
  $('.aside__menu-btn').addClass('aside__item--active');
  $('.form-spares__wrapper-btn--mobile').addClass('aside--active');
})

$('.aside__menu-btn').on('click', function (){
  $('.aside').removeClass('aside--active');
  $('.aside__menu-btn').removeClass('aside__item--active');
  $('.form-spares__wrapper-btn--mobile').removeClass('aside--active');
})

$('#brands-select').selectmenu(selectProp);
$('#model-select').selectmenu({...selectProp, disabled: true});
$('#spares-select').selectmenu(selectProp);
$('#oem-select').selectmenu(selectProp);
$('#vendor-code-select').selectmenu(selectProp);

// $('.content__aside-btn--mobile').on('click',()=>{
//   $('.aside').css('left', '0');
//   $('.aside__menu-btn--mobile').css('right', '12px');
// })

// $('.aside__menu-btn--mobile').on('click',()=>{
//   $('.aside').removeAttr('style');
//   $('.aside__menu-btn--mobile').removeAttr('style');
// })

$('.header__menu-btn').on('click', ()=>{
  $('.menu').css('top', '0');
})

$('.menu__btn--mobile').on('click', ()=>{
  $('.menu').removeAttr('style');
})

if (window.innerWidth <= 649){
  $('.tags').appendTo('.content__card-items');
  console.log('OK');
}

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

$(".form-spares__reset").on('click', ()=>{
  $(".accordion__header").each(function(){
    $(this).attr('data-active', '');
  });
  
  $(".accordion__content").each(function(){
    $(".accordion").accordion( "option", "active", false );
  });

  setTimeout(() => {
    $(".slider-year__amount-value").val($( "#year" ).slider( "option", "min" ) + " - " + $( "#year" ).slider( "option", "max"));
    
    $(".slider-price__amount-input").val($( "#price" ).slider( "option", "min" ) + " - " + $( "#price" ).slider( "option", "max" ));
  }, 100);

  $( "#year" ).slider( "values", [1967, 2014] );

  $(".slider-price__amount-value").text($( "#price" ).slider( "option", "min" ) + 
  " - " + $( "#price" ).slider( "option", "max" ));

  $('.slider__currency-exchange').text("4 - 230 $")

  $( "#price" ).slider( "values", [100, 23014] );
})

function showList (item){
  item.each(function(){
    $(this).parent().addClass('card-list');
    // $(this).siblings('.content__card-btn').hide();
    // $(this).addClass('card-list__descr');
    // $(this).children('.card-list__subdescr').show();
    // $(this).siblings('.card__price').addClass('card-list__price');
    // $(this).siblings('.card__price').children('.card-list__btn').show();
  })
}

function showCard (item){
  item.each(function(){
    $(this).parent().removeClass('card-list');
    $(this).siblings('.content__card-btn').show();
    $(this).removeClass('card-list__descr');
    $(this).children('.card-list__subdescr').hide();
    $(this).siblings('.card__price').removeClass('card-list__price');
    $(this).siblings('.card__price').children('.card-list__btn').hide();
  })
}

$('#review-list').on('change', function(){
  // showList($('.card__descr'));
  $('.content__card-items').addClass('card-list')
})

$('#review-card').on('change', function(){
  // showCard($('.card__descr'));
  $('.content__card-items').removeClass('card-list')
})

$('.content__review-btn').on('click', function(){
  $(this).siblings('.content__review-filter').toggle();
})


$('.blog-card__text').each(function(){
  let words = $(this).text().split(' ');
  let wordCount = 18;
    if (words.length >= wordCount) {
    let newText = words.slice(0, wordCount);
    newText[newText.length-1] = `${newText[newText.length-1]} ...`;
    $(this).text(newText.join(' '));
  }else{
    $(this).text(words.join(' '));
  }
})

$('.brands-slider').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<button type="button" class="slider-slick-btn slider-slick-prev"></button>',
  nextArrow: '<button type="button" class="slider-slick-btn slider-slick-next"></button>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 620,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 340,
      settings: {
        slidesToShow: 2,
      }
    },
  ]
});

$('.product-slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<button type="button" class="slider-slick-btn product-slick-btn slider-slick-prev"></button>',
  nextArrow: '<button type="button" class="slider-slick-btn product-slick-btn slider-slick-next"></button>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 610,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});
$('.blog-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<button type="button" class="slider-slick-btn blog-slick-btn slider-slick-prev"></button>',
  nextArrow: '<button type="button" class="slider-slick-btn blog-slick-btn slider-slick-next"></button>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});
