import { fetchDataAndRender } from "../apiData/getProduct.js";

  // Function to render HTML based on API data
export async function renderHTML() {

    const game = await fetchDataAndRender();
    
    document.title = ` gamehub | ${game.title} `
    
    const html = `
                <h1>${game.title}</h1>
                <section class="game-container">
                <div class="product-img-container">
                    <img src="${game.image}" alt="cover image of ${game.title}" class="product-img"/> />
                    <img src="/images/product-img2.jpg" alt="astronaut staring out on a wast space landscape" />
                    <img src="/images/product-img1.jpg" alt="a spaceship" />
                </div>
                <div class="about-the-game">
                    <h2>about the game</h2>
                    <p>${game.description}</p>
                </div>
                <p>$${game.price}</p>
                <a href="/cart.html?id=${game.id}" class="cta">buy now</a>
                <button class="add-to-cart-btn product-btn-2 hidden">add to cart button</button>
                </section>
                <div class="game-info">
                    <div>
                        <p>developer:</p>
                        <p>publisher:</p>
                        <p>release date:</p>
                        <p>genre:</p>
                    </div>
                    <div>
                        <p>space software</p>
                        <p>space games</p>
                        <p>${game.released}</p>
                        <p>${game.genre}</p>
                    </div>
                </div>
    `;


    const detailsContainer = document.querySelector('.details');
    detailsContainer.innerHTML = "";
    detailsContainer.innerHTML = html;
}
