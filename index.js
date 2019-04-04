
const menu =  document.querySelector('.weirdTwo');
const menuButton =  document.querySelector('#burgerMenu');

menuButton.addEventListener('click', loginInn);

function loginInn(){
  if(menu.classList.contains('is-active')) {

      menu.classList.remove('is-active');
} else{
      menu.classList.add('is-active');
}
}
