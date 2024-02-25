
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
filmPoster.classList.add('film-poster');

const filmPriceBox = document.createElement('div');

const filmPrice = document.createElement('div');
filmPrice.textContent = film.price + "NOK";

const infoButton = document.createElement('button');
infoButton.classList.add('More-info');
infoButton.textContent = "More Info";


const Button = document.getElementsByTagName("button");

infoButton.addEventListener('click', () => {
  document.location.href = "product.html";
})



filmBox.appendChild(filmContent);

filmContent.append(filmHeader, filmPoster, filmPriceBox, infoButton);

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




showAllFilms();

showFilmsByCategory(films);



localStorage.setItem("productItem", films);





// const productItem = films[0];
// const productHtmlLink = document.createElement('a');
// productHtmlLink.setAttribute("href", `/product.html?product_id=${films.id}`);
// const filmImg = document.createElement("img");
// filmImg.setAttribute("src", films.image.url);
// productHtmlLink.appendChild(filmImg);
// productItem.img.src = productItem.image.url;




// function linkToProductPage(){

// const filmDisplayBox = document.getElementById('films-display-box');
// const productItem = films[0];
// const productImg = document.createElement('img');
// productImg.src = productItem.image.url;
// const productHtmlLink = document.createElement('a');
// productHtmlLink.href = "product.html";
// productHtmlLink.textContent= productItem.img;
// productHtmlLink.appendChild(productImg);
// filmDisplayBox.appendChild(productHtmlLink);}


// linkToProductPage();


console.log(films);

  

