import { renderProducts } from "./renderHtml/renderAll.js";
import { fetchDataAndRender } from "./apiData/getProduct.js";
import { renderCart } from "./renderHtml/renderCart.js";
import { renderTrending } from "./renderHtml/trending.js";



switch (location.pathname) {
    case "/games":
        renderProducts();
        break;

    case "/cart":
        renderCart();
        break;

    case "/products":
        renderHTML();
        break;

    default:
        try {
            renderTrending();
        } catch (error) {
            // Handle the error if needed
        }
}
