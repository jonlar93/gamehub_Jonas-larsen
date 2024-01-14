// const url = "https://api.noroff.dev/api/v1/gamehub";

// // get all products
// export async function getProducts() {
//     const response = await fetch(url);
//     const results = await response.json();
//     return results ;
// }


const url = "https://dev-jonas.com/wp-json/wc/store/products";

// get all products
export async function getProducts() {
    const response = await fetch(url);
    const results = await response.json();
    return results;
}