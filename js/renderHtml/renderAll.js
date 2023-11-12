import { getProducts } from "../apiData/getProducts.js";

// Function to generate product card HTML
function createProductCard(product) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card", "border-dropshadow");
    productCard.innerHTML = `
    <h2>${product.title}</h2>
    <a href="/products/product.html?id=${product.id}"><img src="${product.image}" alt="cover image of ${product.title}" class="product-img"/></a>
    <div class="productcard-grid">
    <p>${product.genre}</p>
    <p>${product.price}$</p>
    <a href="/cart.html?id=${product.id}" class="cta">buy now</a>
    <button class="add-to-cart-btn hidden">add to cart button</button>
    </div>
    `;
    
    return productCard;
}

// Function to render products
export async function renderProducts() {
    const products = await getProducts();
    const productContainer = document.querySelector(".product-container");
    productContainer.innerHTML= "";
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        productContainer.appendChild(productCard);
    });
}

