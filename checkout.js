

  
// let films = JSON.parse(localStorage.getItem("listOfFilms"));

function createFilmHtml(film){

const filmBox = document.createElement('div');
filmBox.classList.add('film-box');

const filmContent = document.createElement('div');
  filmContent.classList.add('film-content');

 const checkoutTotalBox = document.createElement('div');

const filmHeader = document.createElement('h3');
  filmHeader.textContent = film.title; 

const filmPoster = document.createElement('img');
filmPoster.src = film.image?.url;

const filmPriceBox = document.createElement('div');

const filmPrice = document.createElement('div');
filmPrice.textContent = film.price + "NOK";

const filmItemQuantity = document.createElement('div');
filmItemQuantity.textContent = film.quantity; 

const checkoutTotal = document.createElement('div');
checkoutTotal.textContent = 'Total:' + film.price * film.quantity; 

filmBox.appendChild(filmContent);
  
filmContent.append(filmHeader, filmPoster, filmPriceBox, filmItemQuantity, checkoutTotalBox);

filmPriceBox.append(filmPrice);

checkoutTotalBox.appendChild (checkoutTotal);

return filmBox; 

}



function showFilmCartItems(){

  const filmDisplayBox = document.getElementById('Films-in-cart');

  const filmCart = JSON.parse(localStorage.getItem('filmCart'));
  if(!filmCart){
    return null;
  }
  filmCart.forEach(function(currentFilm){
const filmHtml = createFilmHtml(currentFilm);
filmDisplayBox.appendChild(filmHtml);

  });

};


function allFunctions(){
  showFilmCartItems();

}

allFunctions();