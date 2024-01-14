import { getProducts } from "../apiData/getProducts.js";

export async function renderTrending() {

    const trending = await getProducts();

    const html = `
    <h2 class="dropshadow">trending this month</h2>
    <img src="${trending[2].images[0].src}" alt="cover image of ${trending[2].name}" />
    <div class="trending-wrapper">
      <h2>${trending[2].name}</h2>
      <p>${trending[2].tags[0].name}</p>
      <a href="/products/product.html" class="more-btn">more info</a>
      <p>$ ${trending[2].prices.price / 100}</p>
    </div>
    <div class="trending-buttons">
      <img src="/images/icons/star-rating.png" alt="star rating" class="star-rating" />
      <a href="/cart.html?id=${trending[2].id}" class="cta trending-btn">buy now</a>
      <button class="add-to-cart-btn trending-btn1 hidden">add to cart button</button>
    </div>
    `;

    
    const detailsContainer = document.querySelector('.details');
    detailsContainer.innerHTML = "";
    detailsContainer.innerHTML = html;
}


