

  
let films = JSON.parse(localStorage.getItem("listOfFilms"));

console.log(films)


function createFilmHtml(film){

const filmBox = document.createElement('div');
filmBox.classList.add('film-box');

const filmContent = document.createElement('div');
  filmContent.classList.add('film-content');


const filmHeader = document.createElement('h3');
  filmHeader.textContent = film.title; 

const filmPoster = document.createElement('img');
filmPoster.src = film.image?.url;

const filmPriceBox = document.createElement('div');

const filmPrice = document.createElement('div');
filmPrice.textContent = film.price + "NOK";

const removeButtonBox = document.createElement('div');

const removeButton = document.createElement('Button');
removeButton.classList.add('remove-film-btn')
removeButton.textContent = 'Remove from cart'



removeButton.addEventListener('click', ()=>{
removeFilmFromCart();
 })





removeButtonBox.appendChild(removeButton)

filmBox.appendChild(filmContent);
  
filmContent.append(filmHeader, filmPoster, removeButtonBox);

filmPriceBox.append(filmPrice);


return filmBox; 

};





function removeFilmFromCart(){

  const filmCart = JSON.parse(localStorage.getItem('filmCart'));
  
  for (let i=0; i< filmCart.length; i++){
    if(filmCart[i].length > 0) {

  
    }
  }};






export function showFilmCartItems(){

  const filmDisplayBox = document.getElementById('Films-in-cart');
  console.log(filmDisplayBox);
  const filmCart = JSON.parse(localStorage.getItem('filmCart'));
  if(!filmCart){
    return null;
  }
  filmCart.forEach(function(currentFilm){
const filmHtml = createFilmHtml(currentFilm);
console.log(filmDisplayBox);
filmDisplayBox.appendChild(filmHtml);

  });

  console.log(filmCart);

};


// DISPLAY CHECKOUT TOTAL

function displayCheckoutTotal(){
  const filmCart = JSON.parse(localStorage.getItem('filmCart'));
  const checkoutTotalBox = document.getElementById('Checkout-total-box');
  const checkoutTotal = document.createElement('div');

  let filmTotal = 0;

  for (let i=0; i< filmCart.length; i++){

    filmTotal += filmCart[i].price;

 
    }

    checkoutTotal.textContent = 'Total:' + filmTotal.toFixed(2) + 'NOK'; 

   checkoutTotalBox.appendChild (checkoutTotal);
  console.log(checkoutTotal);
};








// DISPLAY CHECKOUT QUANTITY

function displayCheckoutQuantity(){


const filmCart = JSON.parse(localStorage.getItem('filmCart'));
const filmItemQuantity = document.createElement('div');
filmItemQuantity.textContent = filmCart.length; 
const checkoutTotalBox = document.getElementById('Checkout-total-box');
checkoutTotalBox.appendChild(filmItemQuantity);


};







function allFunctions(){
  showFilmCartItems();
  displayCheckoutTotal();
  displayCheckoutQuantity();
}

allFunctions();