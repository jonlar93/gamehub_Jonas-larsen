export function handleRenderError() {
    // Create and render the error message as a paragraph
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "There is a problem with loading your content";
    errorMessage.style.color = "red";

    const handlerElement = document.getElementById("handler");

    // Remove the "loader" class from the handler element
    if (handlerElement) {
        handlerElement.classList.remove("loader");
        handlerElement.appendChild(errorMessage);
    } else {
        // If the element with id "handler" is not found, you can handle it in another way
        console.error("Element with id 'handler' not found.");
    }
}