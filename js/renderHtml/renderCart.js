import { fetchDataAndRender } from "../apiData/getProduct.js";

export async function renderCart() {

    const data = await fetchDataAndRender();

    const html = `
                    <div class="cart-1 border-dropshadow">
                    <img src="${data.images[0].src}" alt="cover image of ${data.name}" />
                    <div>
                    <h2>${data.name}</h2>
                    <div class="cart-1-price">
                        <p>$ ${data.prices.price / 100} x</p>
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
                          <p>$${data.prices.price / 100}</p>
                          <p>memeber discount:</p>
                          <p>$ 0</p>
                          <p>subtotal:</p>
                          <p>$ ${data.prices.price / 100}</p>
                          <a href="/checkout.html" class="cta">go to checkout</a>
                        </div>
                      </div>
                    </div>
    `;


    const detailsContainer = document.querySelector('.details');
    detailsContainer.innerHTML = "";
    detailsContainer.innerHTML = html;
}
