// Функція для додавання товару в кошик
function addToCart(productTitle, productPrice) {
  // Сповіщаємо користувача
  alert("Очікуйте дзвінок від адміністратора.");
  
  // Додаємо товар до кошика
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ title: productTitle, price: productPrice });
  localStorage.setItem('cart', JSON.stringify(cart));
  
  // Оновлюємо меню кошика
  updateCartMenu();
}

// Функція для оновлення меню кошика
function updateCartMenu() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let cartMenu = document.getElementById('cart-menu');
  cartMenu.innerHTML = '';

  cart.forEach(item => {
    let cartItem = document.createElement('li');
    cartItem.textContent = `${item.title} - ${item.price}`;
    cartMenu.appendChild(cartItem);
  });
}