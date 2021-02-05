const hamburger_menu = document.querySelector('#hamburger');
const close_btn = document.querySelector('#close');
const menu_mobile = document.querySelector('#menu-mobile')

hamburger_menu.addEventListener('click', () => {
  menu_mobile.classList.remove('hidden');
});
close_btn.addEventListener('click', () => {
  menu_mobile.classList.add('hidden');
});
