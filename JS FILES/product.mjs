


// FETCH FILM CLICKED ON HOME PAGE

async function fetchClickedFilm() { 
 let clickedFilm = JSON.parse( localStorage.getItem('film'));
  createFilmsHtml(clickedFilm); 
};


// CREATE FILM HTML
  
export function createFilmsHtml(film){

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

} );

wrapper.appendChild(filmBox);
  
  filmBox.appendChild(filmContent);
  
  filmContent.append(filmHeader, filmPoster, ratingBox, releaseDate, filmInfo, filmPriceBox, buttonBox);

ratingBox.append(ratingImg, rating);
  
  filmPriceBox.append(filmPrice);
  
  buttonBox.append(addToCartBtn);
  return filmBox;
  };




  // CREATE FILM CART

  export function createFilmCart(){
    const filmCart = localStorage.getItem('filmCart');
    if (!filmCart)  { localStorage.setItem('filmCart', JSON.stringify([]))}
  }



// ADD FILM(s) to CART


export function addFilmToCart(film){ 
const filmCart = JSON.parse(localStorage.getItem('filmCart'));
for (let i=0; i< filmCart.length; i++){
  if(filmCart[i].title === film.title){
    alert('Film already added to cart');
    return;
  }
}
filmCart.push(film);

localStorage.setItem('filmCart', JSON.stringify(filmCart));

console.log(filmCart);

};


//  DISPLAY CART QUANTITY ON CART IMAGE

const filmCart = JSON.parse(localStorage.getItem('filmCart'));


function displayQuantityOnCartImg(){
  const filmCartQuantity = document.createElement('p');
  filmCartQuantity.classList.add('film-quantity');
  filmCartQuantity.textContent = filmCart.length; 
  const cartImage = document.getElementById('cart-img-box');
  cartImage.appendChild(filmCartQuantity);

  };





async function allFunctions(){
  await fetchClickedFilm();
  await createFilmCart();
  await displayQuantityOnCartImg();

};

allFunctions();