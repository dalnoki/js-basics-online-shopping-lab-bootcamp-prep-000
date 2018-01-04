var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var key = item;
  var itemToCart = {};
  itemToCart[key] = Math.floor(Math.random() * 100) + 1;
  cart.push(obj);
  console.log(key +" has been added to your cart.");
  return cart;


  }


function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
