
  
// let films = JSON.parse(localStorage.getItem("listOfFilms"));
 

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id"); 


const squareEyesAPI = "https://v2.api.noroff.dev/square-eyes";


// FETCH FILM CLICKED ON HOME PAGE

async function fetchClickedFilm() { 
 let clickedFilm = JSON.parse( localStorage.getItem('film'));
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
  filmHeader.classList.add('film-header');
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
  addToCartBtn.classList.add('Add-to-cart-btn');
  addToCartBtn.textContent = "Add to Cart";

addToCartBtn.addEventListener('click', ()=>{
  addFilmToCart(film);

} )

wrapper.appendChild(filmBox);
  
  filmBox.appendChild(filmContent);
  
  filmContent.append(filmHeader, filmPoster, ratingBox, releaseDate, filmInfo, filmPriceBox, buttonBox);

ratingBox.append(ratingImg, rating);
  
  filmPriceBox.append(filmPrice);
  
  buttonBox.append(addToCartBtn);
  return filmBox;
  }



// 1. fetch film ID + quantity

// 2. create Html 

// 3. Add to cart 



  // CREATE FILM CART

  function createFilmCart(){
    const filmCart = localStorage.getItem('filmCart');
    if (!filmCart)  { localStorage.setItem('filmCart', JSON.stringify([]))}
  }



// ADD FILM(s) to CART


function addFilmToCart(film){ 
const filmCart = JSON.parse(localStorage.getItem('filmCart'));
for (let i=0; i< filmCart.length; i++){
  if(filmCart[i].title === film.title){
    alert('Film already in cart');
    return;
  }
}
filmCart.push(film);

localStorage.setItem('filmCart', JSON.stringify(filmCart));

console.log(filmCart);



};






async function allFunctions(){
  await fetchClickedFilm();
 await createFilmCart();

};

allFunctions();