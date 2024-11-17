// Declares a variable name listEl which uses document.queryselector to pupp the iddataDisplay from the html using the dom.
const listEl = document.querySelector("#dataDisplay");

// fetch pulls the information from my json file to my JS file.
fetch("./products.json")
  // .then passes the response of my json file and uses and arrow function to store all of its data into the data parameter.
  .then((response) => response.json())
  .then((data) => {
    // console.log data is logging the data from the json file to the console.
    console.log(data);
    // data.foreach(post) will log the data from each json object and push it into the arrow function.
    data.forEach((post) => {
      //   listEl.insertAdjacentHTML let's you to put HTML elements or text into a specific position in a given element from the html.
      listEl.insertAdjacentHTML(
        //  below stores all the data in the correct elements from the json File.
        "beforeend",
        `<div class="Product-div"><h2 class="h2-products">${post["product-name"]}</h2> <img src='${post["product-location"]}'> <p class="p-products">${post["product-price"]}</p> <p class="p-products">${post["product-description"]}</p></div>`
      );
    });
  });
