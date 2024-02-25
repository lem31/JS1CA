const squareEyesAPI = 'https://v2.api.noroff.dev/square-eyes'




export function fetchSquareEyesAPI(){
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




let films = JSON.parse(localStorage.getItem("listOfFilms"))




 export function createFilmsHtml(film){

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

filmBox.appendChild(filmContent);

filmContent.append(filmHeader, filmPoster, filmPriceBox);

filmPriceBox.append(filmPrice);

return filmBox;
}