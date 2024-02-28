
// FETCH API

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
filmPoster.classList.add('film-poster');

filmPoster.addEventListener('click', () => {
localStorage.setItem('film', JSON.stringify(film))
});

const posterLink = document.createElement('a');

posterLink.href= `./product.html?id=${film.id}/`;

const filmPriceBox = document.createElement('div');

const filmPrice = document.createElement('div');
filmPrice.textContent = film.price + "NOK";


posterLink.appendChild(filmPoster);

filmBox.appendChild(filmContent);

filmContent.append(filmHeader, posterLink, filmPriceBox);

filmPriceBox.append(filmPrice);

return filmBox;
}




function showAllFilms(){
  const filmDisplayBox = document.getElementById('films-display-box');
  films.forEach((film) => {
         const filmHtml= createFilmsHtml(film);
          filmDisplayBox.appendChild(filmHtml);
          });
}



async function showFilmsByCategory(films) {


  const select = document.querySelector('select');
  select.addEventListener('change', function () {
    
    const selectedValue = this.value;
    
    const filmDisplayBox = document.getElementById('films-display-box');


    filmDisplayBox.innerHTML = "";

    switch (selectedValue) {

      case 'All-Films':
  

       films.every((film) => {
      
          const filmHtml = createFilmsHtml(film);
          filmDisplayBox.appendChild(filmHtml);

          return films;
         
        });
        break;

      case 'Action':
        let actionFilms = films.filter((film) => film.genre === 'Action');

        actionFilms.every((actionFilm) => {
      
          const filmHtml = createFilmsHtml(actionFilm);
          filmDisplayBox.appendChild(filmHtml);
          console.log(films);


          return actionFilms;
         
        });

        break;

      case 'Horror':
        let horrorFilms = films.filter((film) => film.genre === 'Horror');
        horrorFilms.every((horrorFilm) => {
          const filmHtml = createFilmsHtml(horrorFilm);
          filmDisplayBox.appendChild(filmHtml);
          console.log(films);
        });
        break;

      case 'Kids':
        let kidsFilms = films.filter((film) => film.genre === 'Kids');
        kidsFilms.every((kidsFilm) => {
        
          const filmHtml = createFilmsHtml(kidsFilm);
          filmDisplayBox.appendChild(filmHtml);
          console.log(films);
        });
        break;

      case 'Comedy':
        let comedyFilms = films.filter((film) => film.genre === 'Comedy');
        comedyFilms.every((comedyFilm) => {
         
          const filmHtml = createFilmsHtml(comedyFilm);
          filmDisplayBox.appendChild(filmHtml);
        });
        break;

      case 'Drama':
        let dramaFilms = films.filter((film) => film.genre === 'Drama');

         dramaFilms.every((dramaFilm) => {

                const filmHtml= createFilmsHtml(dramaFilm);
               filmDisplayBox.appendChild(filmHtml);
                  
       });
        break;
    }
  });
}





function allFunctions(){

  fetchSquareEyesAPI();

  showAllFilms(films);

  showFilmsByCategory(films);
};


allFunctions();





  

