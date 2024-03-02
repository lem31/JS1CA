
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

const orderDetailsText1 = document.createElement('p');
orderDetailsText1.classList.add('order-details-one');
orderDetailsText1.textContent = 'Thank you for your purchase.'

const orderDetailsText2 = document.createElement('p');
orderDetailsText2.classList.add('order-details-two');
orderDetailsText2.textContent = 'You will receive a confirmation email, shortly.'

orderDetailsBox.textContent = 'Your order number is:'+'' + orderNumber; 

orderDetails.append(orderDetailsText1, orderDetailsBox, orderDetailsText2);

console.log(orderDetailsBox);};

displayOrderDetails();

