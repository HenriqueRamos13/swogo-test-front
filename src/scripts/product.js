const API_URL = "http://localhost:3333";
// const API_URL = "https://swogo-back.herokuapp.com";

document.addEventListener("DOMContentLoaded", () => {
  const id = window.location.search.split("=")[1];

  const name = document.querySelector("#name");
  const price = document.querySelector("#price");
  const description = document.querySelector("#description");
  const image = document.querySelector("#image");

  fetch(`${API_URL}/product/${id}`).then((response) => {
    if (response.status === 200) {
      response.json().then((data) => {
        name.textContent = data.name;
        price.textContent = data.price;
        description.textContent = data.description;
        image.src = data.image;
      });
    } else {
      console.log("Error");
    }
  });

  const recommended = document.getElementById("recommended");

  fetch(API_URL + "/recommendation?id=" + id, {
    method: "GET",
  }).then((response) => {
    if (response.status === 200) {
      response.json().then((data) => {
        console.log(data);
        data.forEach((product) => {
          const p = new Product(product).createCard();
          recommended.appendChild(p);
        });
      });
    } else {
      console.log("Error");
    }
  });
});
