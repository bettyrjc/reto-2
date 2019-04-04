
const menu = document.querySelector(' .weird-2 ');
const menuButton = document.querySelector(' #burgerMenu ');
menuButton.addEventListener('click', loginInn);
; //agrega el istener si es true
menuButton.removeEventListener('click', loginInn);


function loginInn(){
if(loginIn.classList.contains('is-active')) {
  loginIn.classList.remove('is-active');
} else{
  loginIn.classList.add('is-active');
}
}
