document.addEventListener(
    "DOMContentLoaded", () => {
        const menu = new MmenuLight(
            document.querySelector( "#mntk_mmenu" ),
            "(max-width: 992px)"
        );

        const navigator = menu.navigation();
        const drawer = menu.offcanvas();

        document.querySelector( "a[href='#mntk_mmenu']" )
            .addEventListener( "click", ( evnt ) => {
                evnt.preventDefault();
                drawer.open();
            });
    }
);

var swiper = new Swiper(".headerBanner", {
    effect: "fade",
    loop:true,
    // autoplay: {
      //   delay: 2000,
      //   disableOnInteraction: false,
      // },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});


var swiper = new Swiper('.testimonial',{
  slidesPerView: 3,
  spaceBetween: 20,
  direction: 'horizontal',
  autoHeight: true,
  height: 600,
  loop: 'true',
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
// },
breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
},
//   navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//   },
  });

var swiper = new Swiper('.latest_projectSlid', {
  slidesPerView: 3,
  spaceBetween: 20,
  direction: 'horizontal',
  autoHeight: true,
  height: 600,
  loop: 'true',
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 3,
    },
  },
})


var swiper = new Swiper('.sponsor_swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  direction: 'horizontal',
  autoHeight: true,
  loop: 'true',
  height: 600,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 5,
    },
  },
});
var swiper = new Swiper('.ab_slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  direction: 'horizontal',
  autoHeight: true,
  loop: 'true',
  height: 600,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    992: {
      slidesPerView: 2,
    },
  },
});

