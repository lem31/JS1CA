
  
// let films = JSON.parse(localStorage.getItem("listOfFilms"));
  

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id"); 


const squareEyesAPI = "https://v2.api.noroff.dev/square-eyes";


// FETCH FILM CLICKED ON HOME PAGE

async function fetchClickedFilm() { 
  const response = await fetch(`${squareEyesAPI}/${id}`); 
  const clickedFilms = await response.json();
  const clickedFilm = clickedFilms.data;
  console.log(clickedFilm);
  createFilmsHtml(clickedFilm); 
}


// CREATE FILM HTML
  
  function createFilmsHtml(film){

const wrapper = document.getElementById('films-display-box');
  
  const filmBox = document.createElement('div');
    filmBox.classList.add('film-box');
  
  const filmContent = document.createElement('div');
    filmContent.classList.add('film-content');
  
  const filmHeader = document.createElement('h3');
    filmHeader.textContent = film.title; 
  
  const filmPoster = document.createElement('img');
  filmPoster.src = film.image.url;
  
  const filmPriceBox = document.createElement('div');
  
  const filmPrice = document.createElement('div');
  filmPrice.textContent = film.price + "NOK";

  const filmInfo = document.createElement('p');
  filmInfo.textContent = film.description;

  const rating = document.createElement('p');
  rating.textContent = film.rating;

  const releaseDate = document.createElement('h3');
  releaseDate.textContent = film.released;

  const ratingBox = document.createElement('div');
  ratingBox.classList.add('rating-box');
 
const ratingImg = document.createElement('img');
ratingImg.src = "https://img.icons8.com/ios-filled/50/rating.png";

  const buttonBox = document.createElement('div');

  const addToCartBtn= document.createElement('button');
  addToCartBtn.textContent = "Add to Cart";

addToCartBtn.addEventListener('click', ()=>{
  addFilmToCart([]);

} )

wrapper.appendChild(filmBox);
  
  filmBox.appendChild(filmContent);
  
  filmContent.append(filmHeader, filmPoster, ratingBox, releaseDate, filmInfo, filmPriceBox, buttonBox);

ratingBox.append(ratingImg, rating);
  
  filmPriceBox.append(filmPrice);
  
  buttonBox.append(addToCartBtn);
  return filmBox;
  }

  
  

  function createFilmCart(){
    const filmCart = localStorage.getItem('filmCart');
    if (!filmCart)  { localStorage.setItem('filmCart', JSON.stringify([]))}
  }



// ADD FILM(s) to CART



function addFilmToCart(films){ 
const filmCart = JSON.parse(localStorage.getItem('filmCart'));
const filmIndex = filmCart.findIndex(function(currentFilm){
console.log(currentFilm);
if(films.id === currentFilm.id){
  return true;
} else{
  return false;
}});

if(filmIndex === -1){
  filmCart.push({...films, quantity: 0});
} else {
  filmCart[filmIndex].quantity+=1;
};


console.log(filmIndex);



  filmCart.push(films);
  localStorage.setItem('filmCart', JSON.stringify(filmCart));
  console.log(filmCart);


}




async function allFunctions(){

  fetchClickedFilm();
  createFilmCart();
  addFilmToCart(films);

};

allFunctions();