
  // GENERATE ORDER NUMBER

  function generateOrderNumber(length) {
    const minNumber = Math.pow(10, length - 1);
    const maxNumber = Math.pow(10, length) - 1;
    return Math.floor(minNumber + Math.random() * (maxNumber - minNumber + 1));
}

// DISPLAY ORDER DETAILS

function displayOrderDetails(){
const orderNumber = generateOrderNumber(8);
console.log(orderNumber);

const orderDetails = document.getElementById('checkout-text');

const orderDetailsBox = document.createElement('p');
orderDetailsBox.classList.add('order-number-info')

orderDetailsBox.textContent = 'Your order number is:'+'' + orderNumber; 

orderDetails.append(orderDetailsBox);

console.log(orderDetailsBox);};

displayOrderDetails();

