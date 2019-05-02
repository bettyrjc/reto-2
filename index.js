(async function cargar(){

  async function getdata(url){
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  function template(results){
    return(
      `
      <div class="logo class">
      <img src="${results.picture.thumbnail}" alt="">
      <p id="p">${results.name.first} ${results.name.last}</p>
      </div>
      `
    )
  }

const randomUsername = await getdata('https://randomuser.me/api/?results=10');
const $itemPlay = document.querySelector('.items')
  randomUsername.results.forEach( (result)=>{
    const HTMLString = template(result);
    const html =document.implementation.createHTMLDocument();
    html.body.innerHTML = HTMLString;
    $itemPlay.append(html.body.children[0])
})
console.log(randomUsername);
})()





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
