


const squareEyesAPI = 'https://v2.api.noroff.dev/square-eyes'




function fetchSquareEyesAPI(){
  const squareEyesData = async(url) => {
    try{
      let response = await fetch(url)
      let films = await response.json()
      localStorage.setItem("listOfFilms", JSON.stringify(films.data))
    } catch(error){
      console.error("unable to fetch:" + error);
    }
  } 
  
  
  squareEyesData(squareEyesAPI); 
  };
  
  fetchSquareEyesAPI();
  
  
  let films = JSON.parse(localStorage.getItem("listOfFilms"))
  


 
  
  
  
  function createFilmsHtml(film){


  
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
  addFilmToCart(film);


} )


  
  filmBox.appendChild(filmContent);
  
  filmContent.append(filmHeader, filmPoster, ratingBox, releaseDate, filmInfo, filmPriceBox, buttonBox);

ratingBox.append(ratingImg, rating);
  
  filmPriceBox.append(filmPrice);
  
  buttonBox.append(addToCartBtn);
  return filmBox;
  }

  console.log(films);
  



function showProduct(){
 
  const productItem = films[0];
  const filmDisplayBox = document.getElementById('films-display-box');
  const filmHtml= createFilmsHtml(productItem);
  filmDisplayBox.appendChild(filmHtml);}
  
showProduct();





function createFilmCart(){
  const filmCart = localStorage.getItem('filmCart');
  if (!filmCart)  { localStorage.setItem('filmCart', JSON.stringify([]))}
}

createFilmCart();


function addFilmToCart(films){ 
  const filmCart = JSON.parse(localStorage.getItem('filmCart'));
const filmIndex = filmCart.findIndex(function(currentFilm){
console.log(currentFilm);
if(films.id === currentFilm.id ){
  return true;
} else{
  return false;
}
})

console.log(filmIndex);



  filmCart.push(films);
  localStorage.setItem('filmCart', JSON.stringify(filmCart));
  console.log(filmCart);
} 

addFilmToCart(films);


