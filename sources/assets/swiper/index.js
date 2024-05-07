import Swiper from './swiper-bundle.min.mjs'

new Swiper(`#players-slider`, {
  slidesPerView: 4,
  grabCursor: true,

  navigation: {
    nextEl: `#players-slider-next`, prevEl: `#players-slider-prev`,
    disabledClass: 'inactive',
  },
  autoplay: {
    delay: 1500,
    stopOnLastSlide: false,
  },
  loop: true,

  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
})

new Swiper(`#reviews-slider`, {
  slidesPerView: 1,
  spaceBetween: 20,

  navigation: {
    nextEl: `#reviews-slider-next`, prevEl: `#reviews-slider-prev`,
    disabledClass: 'inactive',
  },
  pagination: {
    el: `#reviews-slider-pag`,
    clickable: true,
  },
  loop: true,

  breakpoints: {
  },
})

let planningSliderText = new Swiper(`#planning-slider-text`, {
  slidesPerView: 1,
  parallax: true,
})


const planningSliderListItems = document.querySelectorAll(
  'pagination-block ol[hidden] li'
)

let planningSlider = new Swiper(`#planning-slider`, {
  slidesPerView: 1,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: `#planning-slider-next`, prevEl: `#planning-slider-prev`,
    disabledClass: 'inactive',
  },
  pagination: {
    el: `#planning-slider-pag`,
    clickable: true,
    bulletClass: 'bullet',
    bulletActiveClass: 'current',

    renderBullet: function (index, className) {
      return '<li class="' + className + '">'
        + planningSliderListItems[index].innerHTML
        + '</li>'
    }
  },
})

planningSlider.controller.control = planningSliderText
planningSliderText.controller.control = planningSlider

/* HINTS 
  grabCursor: true,

  navigation: {
    nextEl: `.class__button-next`, prevEl: `.class__button-prev`,
    disabledClass: 'inactive',
  },
  pagination: { 
    el: `.class__pagination`, 
    clickable: true, 
  },

  preloadImages: true,
  lazy: {
    loadOnTransitionStart: false,
    loadPrevnext: true,
  },

  autoplay:{
    delay: 3000,
    stopOnLastSlide: false,
  },
  
  ? Infinite scrolling.
  loop: false,

  ? Changes the slider settings based on the width of the screen.
  breakpoints: {
    // ? when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },

  ? Changes the height of the slider in runtime depending on the height of the slides.
  autoHeight: true,

  ? If there are no more than one slides, the slider stops working.
  watchOverflow: true,

  direction: 'horizontal' or 'vertical',

  ? Indent between slides.
  spaceBetween: 150,

  ? Enable parallax effect.
  parallax: true,
  ?? For working add and set attributes on elements in slide:
  data-swiper-parallax='toRight_InPixels'
  data-swiper-parallax-duration='1000'

  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  }

  ? Thumbs construction:
  new Swiper(`.thumbs`, {
    spaceBetween: 15,
    slidesPerView: 6,
    watchOverflow: true,
  })

  new Swiper(`.main`, {
    watchOverflow: true,

    thumbs: {
      swiper: demosSwiper,
      slideThumbActiveClass: 'active',
    },
  })
  ? Multiple rows
  grid: {
    rows: 2,
    fill: 'row',
  },

  scrollbar: {
    el: '.swiper_scrollbar',
    draggable: true,
  },
*/