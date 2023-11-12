// only for rendering the cart with the buy now feature and not the add to cart button
import { fetchDataAndRender } from "../apiData/getProduct.js";

export async function renderCart() {

    const data = await fetchDataAndRender();

    const html = `
                    <div class="cart-1 border-dropshadow">
                    <img src="${data.image}" alt="cover image of ${data.title}" />
                    <div>
                    <h2>${data.title}</h2>
                    <div class="cart-1-price">
                        <p>$ ${data.price} x</p>
                        <select id="cart-dropdown" aria-label="drop down menu for number of games to buy">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        </select>
                    </div>
                    </div>
                    </div>
                    <h2>summary</h2>
                    <div>
                      <div class="cart-2">
                        <div class="cart-2-content">
                          <p>price:</p>
                          <p>$${data.price}</p>
                          <p>memeber discount:</p>
                          <p>$ 0</p>
                          <p>subtotal:</p>
                          <p>$ ${data.price}</p>
                          <a href="/checkout.html" class="cta">go to checkout</a>
                        </div>
                      </div>
                    </div>
    `;


    const detailsContainer = document.querySelector('.details');
    detailsContainer.innerHTML = "";
    detailsContainer.innerHTML = html;
}


// Check if the current HTML page is the expected one before rendering products
if (window.location.pathname === "/cart.html") {
    // Call the renderProducts function to display the products
    renderCart();

}