import { products } from './productData.js';

// Function to fetch product details based on product ID
function fetchProductDetails(productId) {
    return products[productId] || null;
}

// Function to load product details on page load
function loadProductDetails() {
    const loadingMessage = document.getElementById('loading-message');
    const errorMessage = document.getElementById('error-message');
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (loadingMessage) loadingMessage.style.display = 'block';
    if (errorMessage) errorMessage.style.display = 'none';

    if (productId) {
        const product = fetchProductDetails(productId);

        if (product) {
            // Update product details
            document.getElementById('MainImg').src = product.img;
            document.getElementById('small-img-1').src = product.smallImgs[0];
            document.getElementById('small-img-2').src = product.smallImgs[1];
            document.getElementById('small-img-3').src = product.smallImgs[2];
            document.getElementById('small-img-4').src = product.smallImgs[3];
            document.getElementById('product-category').textContent = product.category;
            document.getElementById('product-name').textContent = product.name;

            const sizeSelect = document.getElementById('product-size');
            sizeSelect.innerHTML = ''; // Clear existing options
            product.sizes.forEach(size => {
                const option = document.createElement('option');
                option.textContent = size;
                option.value = size;
                sizeSelect.appendChild(option);
            });

            // Initial price display
            updatePrice(sizeSelect.value, product.prices);

            // Update price on size change
            sizeSelect.addEventListener('change', function() {
                updatePrice(this.value, product.prices);
            });

            document.getElementById('product-description').textContent = product.description;

            // Display related products
            displayRelatedProducts(product.related);

            // Hide loading message
            if (loadingMessage) loadingMessage.style.display = 'none';
        } else {
            // Handle product not found
            document.getElementById('product-name').textContent = 'Product not found';
            document.getElementById('product-description').textContent = '';
            document.getElementById('product-price').textContent = '';
            document.getElementById('MainImg').src = 'img/products/default.jpg'; // Default image

            // Show error message
            if (errorMessage) errorMessage.style.display = 'block';
        }
    } else {
        // Handle missing product ID
        document.getElementById('product-name').textContent = 'Product ID is missing';
        document.getElementById('product-description').textContent = '';
        document.getElementById('product-price').textContent = '';
        document.getElementById('MainImg').src = 'img/products/default.jpg'; // Default image

        // Show error message
        if (errorMessage) errorMessage.style.display = 'block';
    }
}

// Function to update price based on selected size
function updatePrice(selectedSize, prices) {
    const priceElement = document.getElementById('product-price');
    const price = prices[selectedSize];
    if (price !== undefined) {
        priceElement.textContent = `₹${price}`;
    } else {
        priceElement.textContent = 'Price not available';
    }
}

// Function to display related products
function displayRelatedProducts(relatedProducts) {
    const relatedProductsContainer = document.getElementById('related-products');
    relatedProductsContainer.innerHTML = ''; // Clear existing products

    relatedProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product-item';
        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <span>${product.category}</span>
            <h4>${product.name}</h4>
            <p>${product.price}</p>
                <div class="star">
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                </div>  
        `;
        relatedProductsContainer.appendChild(productDiv);
    });
}

// Call the function to load product details when the page loads
window.onload = loadProductDetails;
