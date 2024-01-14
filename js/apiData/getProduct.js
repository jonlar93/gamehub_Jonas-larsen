import { renderHTML } from "../renderHtml/renderSingle.js";
// get one product 
export async function fetchDataAndRender() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");

  const url = "https://dev-jonas.com/wp-json/wc/store/products/" + id;

  const response = await fetch(url);
  console.log(url)
  const data = await response.json();

  return data;
}


