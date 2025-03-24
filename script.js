let cart = [];
let totalPrice = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  totalPrice += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const totalPriceElem = document.getElementById('total-price');
  cartItems.innerHTML = '';
  
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
  });
  
  totalPriceElem.textContent = totalPrice.toFixed(2);
}

function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  alert('Thank you for your purchase!');
  cart = [];
  totalPrice = 0;
  updateCart();
}
