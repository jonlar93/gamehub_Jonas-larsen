import { renderHTML } from "../renderHtml/renderSingle.js";
// get one product 
export async function fetchDataAndRender() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");

  const url = "https://api.noroff.dev/api/v1/gamehub/" + id;

  const response = await fetch(url);
  const data = await response.json();
  
  return data;
}


