import { renderProducts } from "./renderHtml/renderAll.js";
import { renderCart } from "./renderHtml/renderCart.js";
import { renderTrending } from "./renderHtml/trending.js";
import { renderHTML } from "./renderHtml/renderSingle.js";
import { handleRenderError } from "./errorHandling/errorHandler.js";



// call the functions if the statement matches 
switch (location.pathname) {
    case "/games":
        try {
            renderProducts();
        } catch (error) {
            console.error("Error rendering products:", error);
            handleRenderError(error);
        }
        break;

    case "/cart.html":
        try {
            renderCart();
        } catch (error) {
            console.error("Error rendering cart:", error);
            handleRenderError(error);
        }
        break;

    case "/products/product.html":
        try {
            renderHTML();
        } catch (error) {
            console.error("Error rendering HTML:", error);
            handleRenderError(error);
        }
        break;

    default:
        try {
            renderTrending();
        } catch (error) {
            console.error("Error rendering trending:", error);
            handleRenderError(error);
        }
}