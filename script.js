// cart js


const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
};

if(close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  })
};



// Script to handle adding items to cart

// Function to add item to cart
function addToCart(item) {
  // Get existing cart items from localStorage
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Check if the item already exists in the cart
  const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);

  if (existingItemIndex > -1) {
      // If item exists, update the quantity
      cartItems[existingItemIndex].quantity += item.quantity;
  } else {
      // If item does not exist, add it to the cart
      cartItems.push(item);
  }

  // Save updated cart to localStorage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Event listener for the cart buttons
document.addEventListener('DOMContentLoaded', () => {
  // Add event listeners to cart icons
  document.querySelectorAll('.cart').forEach(cartIcon => {
      cartIcon.addEventListener('click', () => {
          // Extract product details
          const productContainer = cartIcon.closest('.pro');
          const id = productContainer.dataset.id;
          const name = productContainer.querySelector('h5').textContent;
          const price = parseInt(productContainer.querySelector('h4').textContent.replace('₹', ''), 10);
          const image = productContainer.querySelector('img').src;
          const quantity = 1; // Default quantity is 1, adjust as needed

          // Create item object
          const item = { id, name, price, image, quantity };

          // Add item to cart
          addToCart(item);
          showCustomAlert('Hurray! Item added to cart!');
      });
  });
  function showCustomAlert(message) {
    // Create a container for the alert
    const alertBox = document.createElement('div');
    alertBox.textContent = message;
    alertBox.style.position = 'fixed';
    alertBox.style.bottom = '20px';
    alertBox.style.right = '20px';
    alertBox.style.backgroundColor = '#28a745';
    alertBox.style.color = '#fff';
    alertBox.style.padding = '15px 30px';
    alertBox.style.borderRadius = '8px';
    alertBox.style.fontSize = '1rem';
    alertBox.style.fontWeight = 'bold';
    alertBox.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.1)';
    alertBox.style.opacity = '0';
    alertBox.style.transition = 'opacity 0.5s, transform 0.5s';
    alertBox.style.transform = 'translateY(50px)';
    alertBox.style.zIndex = '1000';
    document.body.appendChild(alertBox);

    // Show the alert
    setTimeout(() => {
        alertBox.style.opacity = '1';
        alertBox.style.transform = 'translateY(0)';
    }, 100);

    // Hide the alert after 3 seconds
    setTimeout(() => {
        alertBox.style.opacity = '0';
        alertBox.style.transform = 'translateY(50px)';
        // Remove the alert from the DOM after animation
        setTimeout(() => {
            document.body.removeChild(alertBox);
        }, 500);
    }, 3000);
}
});


// Script to handle cart functionality

document.addEventListener('DOMContentLoaded', () => {
  const cartTableBody = document.querySelector('#cart-table tbody');
  const cartSubtotal = document.querySelector('#cart-subtotal');
  const totalPrice = document.querySelector('#total-price');

  // Retrieve cart items from localStorage, or initialize as an empty array
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Function to update the cart display
  function updateCart() {
      cartTableBody.innerHTML = ''; // Clear existing items
      let subtotal = 0;

      cartItems.forEach((item, index) => {
          // Create a new table row for each cart item
          const row = document.createElement('tr');
          row.innerHTML = `
              <td><button class="remove-item" data-index="${index}">Remove</button></td>
              <td><img src="${item.image}" alt="${item.name}" class="cart-item-image"></td>
              <td>${item.name}</td>
              <td>₹${item.price}</td>
              <td><input type="number" value="${item.quantity}" min="1" class="item-quantity" data-index="${index}"></td>
              <td>₹${item.price * item.quantity}</td>
          `;
          cartTableBody.appendChild(row);
          subtotal += item.price * item.quantity;
      });

      // Update the cart subtotal and total price
      cartSubtotal.textContent = `₹${subtotal}`;
      totalPrice.textContent = `₹${subtotal}`;
  }

  // Function to save the cart to localStorage
  function saveCart() {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  // Handle removing an item or decreasing its quantity
  cartTableBody.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove-item')) {
          const index = e.target.dataset.index;
          if (cartItems[index].quantity > 1) {
              // Decrease the quantity by 1
              cartItems[index].quantity--;
          } else {
              // Remove the item if quantity is 1
              cartItems.splice(index, 1);
          }
          saveCart();  // Save the updated cart to localStorage
          updateCart();  // Re-render the cart
      }
  });

  // Handle manually changing the quantity in the input box
  cartTableBody.addEventListener('input', (e) => {
      if (e.target.classList.contains('item-quantity')) {
          const index = e.target.dataset.index;
          const newQuantity = parseInt(e.target.value, 10);
          if (newQuantity <= 0) {
              // Remove the item if quantity is 0 or less
              cartItems.splice(index, 1);
          } else {
              // Update the item quantity
              cartItems[index].quantity = newQuantity;
          }
          saveCart();  // Save the updated cart to localStorage
          updateCart();  // Re-render the cart
      }
  });

  // Initial cart load when the page is ready
  updateCart();
});

