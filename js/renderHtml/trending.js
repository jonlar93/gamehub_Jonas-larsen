import { getProducts } from "../apiData/getProducts.js";

export async function renderTrending() {

    const trending = await getProducts();
    console.log(trending);


    const html = `
    <h2 class="dropshadow">trending this month</h2>
    <img src="${trending[2].image}" alt="cover image of ${trending[2].title}" />
    <div class="trending-wrapper">
      <h2>${trending[2].title}</h2>
      <p>${trending[2].genre}</p>
      <a href="/products/product.html" class="more-btn">more info</a>
      <p>$ ${trending[2].price}</p>
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


