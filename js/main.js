let selectHeader = document.querySelectorAll('.select__header');
let selectItem = document.querySelectorAll('.select__item');
let headerItem = document.querySelectorAll('.form-spares__header-item');
let select = document.querySelectorAll('.select');
let inputRange = document.querySelectorAll('.input-range');
let rangeMin = document.querySelectorAll('.range__count-min');
let rangeMax = document.querySelectorAll('.range__count-max');
let rangeMinCurrency = document.querySelector('.range__count-min--currency');
let rangeMaxCurrency = document.querySelector('.range__count-max--currency');
let blogText = document.querySelectorAll('.blog-card__text');
let cardDescr = document.querySelectorAll('.card__descr');
let reviewList = document.querySelector('.content__label-list');
let reviewCard = document.querySelector('.content__label-card');
let reviewBtn = document.querySelector('.content__review-btn');
let formSparesRadio = document.querySelectorAll('.form-spares__input-radio');
let formSparesHeaderRadio = document.querySelectorAll('.form-spares__header-radio');
let formSparesReset = document.querySelector('.form-spares__reset');
let menu = document.querySelector('.menu');
let menuBtn = document.querySelector('.menu__btn--mobile');
let headerMenuBtn = document.querySelector('.header__menu-btn');
let aside = document.querySelector('.aside');
let filterBtn = document.querySelector('.content__aside-btn--mobile');
let asideBtn = document.querySelector('.aside__menu-btn--mobile');

if(!isNull(filterBtn) || !isNull(asideBtn)){
  filterBtn.addEventListener('click', ()=>{
    aside.setAttribute('style', 'left:0;');
    asideBtn.setAttribute('style', 'right:12px');
  })
  asideBtn.addEventListener('click', ()=>{
    aside.removeAttribute('style');
    asideBtn.removeAttribute('style');
  })
}

if (!isNull(headerMenuBtn) || !isNull(menuBtn)){
  headerMenuBtn.addEventListener('click', function(){
    menu.setAttribute('style', 'top:0;')
  })
  menuBtn.addEventListener('click', function(){
    menu.removeAttribute('style');
  })
}

formSparesRadio.forEach((radio, index)=>{
  radio.addEventListener('change', ()=>{
    radio.parentElement.parentElement.parentElement.children.item(0).setAttribute('checked', '');
  })
});

if (!isNull(formSparesReset)){
  formSparesReset.addEventListener('click', function (){
    headerItem.forEach((item, index) => {
        select[index].classList.remove('is-active');
    })
    formSparesRadio.forEach((radio, index)=>{
      radio.parentElement.parentElement.parentElement.children.item(0).removeAttribute('checked');
    });
      rangeMax[0].innerHTML = '1991';
      rangeMax[1].innerHTML = 40;
      rangeMaxCurrency.innerHTML = 40 / 100;
  
  });
}

headerItem.forEach((item, index) => {
  item.addEventListener('click', function () {
    select[index].classList.toggle('is-active');
  });
});

selectHeader.forEach((item, index) => {
  item.addEventListener('click', selectToggle);
})

selectItem.forEach(item => {
  if (item.classList.contains('form-spares__select-item')){
    return;
  }else{
    item.addEventListener('click', selectChoose);
  }
});

function selectToggle() {
  this.parentElement.classList.toggle('is-active');
}

function selectChoose() {
  let text = this.innerText,
    select = this.closest('.select'),
    currentText = select.querySelector('.select__current');
  currentText.innerText = text;
  select.classList.remove('is-active');

}

blogText.forEach(function (value, index) {
  let words = blogText[index].textContent.split(' ');
  if (words.length >= 25) {
    let lastWordLength = words[words.length - 1].length;
    let newText = blogText[index].textContent.slice(0, (155 - lastWordLength)) + '...';
    blogText[index].textContent = newText;
  }
});


if (!isNull(rangeMinCurrency) || !isNull(rangeMaxCurrency)) {
  rangeMinCurrency.innerHTML = inputRange[1].getAttribute('min') / 10;
  rangeMaxCurrency.innerHTML = inputRange[1].value / 100;

  rangeMin.forEach((rangeItem, index) => {
    rangeItem.innerHTML = inputRange[index].getAttribute('min');
  });

  rangeMax.forEach((rangeItem, index) => {
    rangeItem.innerHTML = inputRange[index].getAttribute('min');
  });

  inputRange.forEach((inputItem, index) => {
    inputItem.addEventListener('change', function () {
      rangeMax[index].innerHTML = inputRange[index].value;
      if (index == 1) {
        rangeMaxCurrency.innerHTML = inputRange[index].value / 100;
      }
    }, false)
  });
}

if (!isNull(reviewCard) || !isNull(reviewList) || !isNull(reviewBtn)) {
  reviewCard.addEventListener('click', function () {
    reviewCard.previousElementSibling.setAttribute('checked', '');
    if (reviewCard.previousElementSibling.hasAttribute('checked')) {
      showCard(cardDescr);
    };
  });

  reviewList.addEventListener('click', function () {
    reviewList.previousElementSibling.setAttribute('checked', '');
    if (reviewList.previousElementSibling.hasAttribute('checked')) {
      showList(cardDescr);
    };
  });


  reviewBtn.addEventListener('click', function () {
    if (reviewBtn.nextElementSibling.hasAttribute('style')) {
      reviewBtn.nextElementSibling.removeAttribute('style');
    } else {
      reviewBtn.nextElementSibling.setAttribute('style', 'display: block;');
    }
  });
};


function isNull(item) {
  if (item === null || item === undefined) {
    return true;
  } else {
    return false;
  }
}
function showCard(item) {
  item.forEach(function (value) {
    value.parentElement.classList.remove('card-list');
    value.parentElement.lastElementChild.setAttribute('style', ' ');
    value.classList.remove('card-list__descr');
    value.children.item(0).setAttribute('style', 'display:none;');
    value.children.item(1).setAttribute('style', 'display:none;');
    value.nextElementSibling.classList.remove('card-list__price');
    value.nextElementSibling.children.item(2).setAttribute('style', 'display:none;');
  })
};

function showList(item) {
  item.forEach(function (value) {
    value.parentElement.classList.add('card-list');
    value.parentElement.lastElementChild.setAttribute('style', 'display:none;');
    value.classList.add('card-list__descr');
    value.children.item(0).setAttribute('style', ' ');
    value.children.item(1).setAttribute('style', ' ');
    value.nextElementSibling.classList.add('card-list__price');
    value.nextElementSibling.children.item(2).setAttribute('style', ' ');
  })
};


$('.brands-slider').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<button type="button" class="slider-slick-btn slider-slick-prev"></button>',
  nextArrow: '<button type="button" class="slider-slick-btn slider-slick-next"></button>',
  responsive: [
    {
      breakpoint: 376,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
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
      breakpoint: 376,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});
$('.blog-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<button type="button" class="slider-slick-btn slider-slick-prev"></button>',
  nextArrow: '<button type="button" class="slider-slick-btn slider-slick-next"></button>',
  responsive: [
    {
      breakpoint: 376,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});