const API_URL = "http://localhost:3333";
// const API_URL = "https://swogo-back.herokuapp.com";

function insertProduct() {
  var product = {
    name: document.getElementById("name").value,
    price: document.getElementById("price").value,
    description: document.getElementById("description").value,
    image: document.getElementById("image").value,
    tags: document.getElementById("tags").value,
  };

  fetch(API_URL + "/product", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  }).then((response) => {
    if (response.status === 200) {
      return response.json().then((data) => {
        // document.getElementById("name").value = "";
        // document.getElementById("price").value = "";
        // document.getElementById("description").value = "";
        // document.getElementById("image").value = "";
        // document.getElementById("tags").value = "";
        alert("Product inserted successfully!");
      });
    } else {
      throw new Error("Something went wrong");
    }
  });
}
