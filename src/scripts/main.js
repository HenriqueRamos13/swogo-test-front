const API_URL = "http://localhost:3333";
// const API_URL = "https://swogo-back.herokuapp.com";

document.addEventListener("DOMContentLoaded", () => {
  const list2 = document.getElementById("products-list2");

  fetch(API_URL + "/product?tag=dog", {
    method: "GET",
  }).then((response) => {
    if (response.status === 200) {
      response.json().then((data) => {
        data.forEach((product) => {
          const p = new Product(product).createCard();
          list2.appendChild(p);
        });
      });
    } else {
      console.log("Error");
    }
  });

  const list3 = document.getElementById("products-list3");

  fetch(API_URL + "/product?tag=cat", {
    method: "GET",
  }).then((response) => {
    if (response.status === 200) {
      response.json().then((data) => {
        data.forEach((product) => {
          const p = new Product(product).createCard();
          list3.appendChild(p);
        });
      });
    } else {
      console.log("Error");
    }
  });

  const list4 = document.getElementById("products-list4");

  fetch(API_URL + "/product?tag=bird", {
    method: "GET",
  }).then((response) => {
    if (response.status === 200) {
      response.json().then((data) => {
        data.forEach((product) => {
          const p = new Product(product).createCard();
          list4.appendChild(p);
        });
      });
    } else {
      console.log("Error");
    }
  });

  const list5 = document.getElementById("products-list5");

  fetch(API_URL + "/product?tag=eletronic", {
    method: "GET",
  }).then((response) => {
    if (response.status === 200) {
      response.json().then((data) => {
        data.forEach((product) => {
          const p = new Product(product).createCard();
          list5.appendChild(p);
        });
      });
    } else {
      console.log("Error");
    }
  });
});
