const hamburger_menu = document.querySelector('#hamburger');
const close_btn = document.querySelector('#close');
const menu_mobile = document.querySelector('#menu-mobile')

hamburger_menu.addEventListener('click', () => {
  menu_mobile.classList.remove('hidden');
});
close_btn.addEventListener('click', () => {
  menu_mobile.classList.add('hidden');
});

const mediaQuery = window.matchMedia('(max-width: 768px)')

function handleTabletChange(e) {

  if (e.matches) {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 2,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  }else{
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  }
}
mediaQuery.addListener(handleTabletChange)

handleTabletChange(mediaQuery)