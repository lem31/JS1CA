




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

  
  const filmInfo = document.createElement('p');
  filmInfo.textContent = film.description;
  
  
  
  filmBox.appendChild(filmContent);
  
  filmContent.append(filmHeader, filmPoster, filmInfo);
  
  
  return filmBox;
  }




const batmanFilm= films[5];


const batmanFilmHtml = createFilmsHtml(batmanFilm);

const filmDisplayBox = document.getElementById('film-display-box');

filmDisplayBox.appendChild(batmanFilmHtml);
console.log(filmDisplayBox);