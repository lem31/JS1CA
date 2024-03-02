//  DISPLAY CART QUANTITY ON CART IMAGE

const filmCart = JSON.parse(localStorage.getItem('filmCart'));


function displayQuantityOnCartImg(){
  const filmCartQuantity = document.createElement('p');
  filmCartQuantity.classList.add('film-quantity');
  filmCartQuantity.textContent = filmCart.length; 
  const cartImage = document.getElementById('cart-img-box');
  cartImage.appendChild(filmCartQuantity);


  };


  displayQuantityOnCartImg();