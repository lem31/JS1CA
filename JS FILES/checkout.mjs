

// import { displayCheckoutTotal, displayCheckoutQuantity } from "./cart.mjs";






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
  
  const releaseDate = document.createElement('h3');
    releaseDate.textContent = film.released;
  
  const rating = document.createElement('p');
  rating.textContent = film.rating;  
  
  const ratingBox = document.createElement('div');
  ratingBox.classList.add('rating-box');
   
  const ratingImg = document.createElement('img');
  ratingImg.src = "https://img.icons8.com/ios-filled/50/rating.png";



filmBox.appendChild(filmContent);
  
filmContent.append(filmHeader, filmPoster, ratingBox, releaseDate);

ratingBox.append(ratingImg, rating);

filmPriceBox.append(filmPrice);

return filmBox; 
  
  };
  

  function showFilmCartItems(){

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

  showFilmCartItems();




// DISPLAY CHECKOUT TOTAL

export function displayCheckoutTotal(){
  const filmCart = JSON.parse(localStorage.getItem('filmCart'));
  const checkoutTotalBox = document.getElementById('cart-total-box');
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

export function displayCheckoutQuantity(){


const filmCart = JSON.parse(localStorage.getItem('filmCart'));
const filmItemQuantity = document.createElement('div');
filmItemQuantity.classList.add('film-quantity-box');
filmItemQuantity.textContent = 'Quantity:'+filmCart.length; 
const checkoutTotalBox = document.getElementById('cart-total-box');
checkoutTotalBox.appendChild(filmItemQuantity);

};



displayCheckoutQuantity();
displayCheckoutTotal();