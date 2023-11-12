// try this for displaying the info is not in the array 


async function fetchDataAndRender() {
  try {
    // Assuming your API call here
    const response = await fetch(/* API endpoint */);
    const data = await response.json();

    // Check if the data is undefined
    if (data === undefined) {
      // If the data is undefined, set your array info to "nothing displayed"
      arrayInfo = "nothing displayed";
    } else {
      // If the data is defined, proceed with rendering
      // Assuming your array info is a variable, update it accordingly
      arrayInfo = /* logic to get information from data */;
    }

    // Render your UI with the arrayInfo
    renderUI(arrayInfo);
  } catch (error) {
    // Handle errors if any
    console.error("Error fetching data:", error);
  }
}

// Call the async function
const game = await fetchDataAndRender();