




let films = JSON.parse(localStorage.getItem("listOfFilms"));

console.log(films);


function createFilmsHtml(film){


  const filmBox = document.createElement('div');
    filmBox.classList.add('film-box');
  
  const filmContent = document.createElement('div');
    filmContent.classList.add('film-content');
  
  const filmHeader = document.createElement('h3');
  filmHeader.classList.add('film-header');
    filmHeader.textContent = film.title; 
  
  const filmPoster = document.createElement('img');
  filmPoster.src = film.image.url;
  filmPoster.classList.add('film-poster-home');

  const rating = document.createElement('p');
  rating.textContent = film.rating;

  const releaseDate = document.createElement('h3');
  releaseDate.textContent = film.released;

  const ratingBox = document.createElement('div');
  ratingBox.classList.add('rating-box');
 
const ratingImg = document.createElement('img');
ratingImg.src = "https://img.icons8.com/ios-filled/50/rating.png";
  
  const filmInfo = document.createElement('p');
  filmInfo.textContent = film.description;
  

  const addToCartBtn= document.createElement('button');
  addToCartBtn.classList.add('Add-to-cart-btn');
  addToCartBtn.textContent = "Add to Cart";

addToCartBtn.addEventListener('click', ()=>{
  addFilmToCart(film);
  location.reload(true);} );
  
  
  filmBox.appendChild(filmContent);
  
  filmContent.append(filmHeader, filmPoster, ratingBox, releaseDate, filmInfo, addToCartBtn);

  ratingBox.append(ratingImg, rating);
  
  
  return filmBox;
  }


  function addFilmToCart(film){ 
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



function displayBatmanFilm(){
const batmanFilm= films[5];

const batmanFilmHtml = createFilmsHtml(batmanFilm);

const filmDisplayBox = document.getElementById('film-display-box');

filmDisplayBox.appendChild(batmanFilmHtml);
console.log(filmDisplayBox);};


const filmCart = JSON.parse(localStorage.getItem('filmCart'));


function displayQuantityOnCartImg(){
  const filmCartQuantity = document.createElement('p');
  filmCartQuantity.classList.add('film-quantity');
  filmCartQuantity.textContent = filmCart.length; 
  const cartImage = document.getElementById('cart-img-box');
  cartImage.appendChild(filmCartQuantity);

  };




displayBatmanFilm();
displayQuantityOnCartImg();





