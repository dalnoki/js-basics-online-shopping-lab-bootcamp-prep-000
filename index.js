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
  cart.push(itemToCart);
  console.log(`${key} has been added to your cart.`);
  return cart;
}


function viewCart() {
  if cart.length === 0 {
    console.log( 'Your shopping cart is empty.');
  }
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
