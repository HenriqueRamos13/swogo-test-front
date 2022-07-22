class Product {
  constructor({ name, price, tags, description, image, _id }) {
    this.name = name;
    this.price = price;
    this.tags = tags;
    this.description = description;
    this.image = image;
    this.id = _id;
  }

  createCard() {
    const element = document.createElement("a");
    element.href = "/product?id=" + this.id;

    const divContainer = document.createElement("div");
    divContainer.classList.add(
      "mx-auto",
      "cursor-pointer",
      "h-full",
      "hover:border-gray-400",
      "transform",
      "transition-all",
      "duration-200",
      "ease",
      "hover:-translate-y-1",
      "shadow-sm",
      "w-72",
      "max-w-full",
      "border",
      "border-gray-300",
      "rounded-sm",
      "bg-white"
    );

    const divImage = document.createElement("div");
    divImage.classList.add("w-full", "h-48");

    const image = document.createElement("img");
    image.src = this.image;
    image.classList.add("w-full", "h-full", "object-cover");

    const divText = document.createElement("div");
    divText.classList.add("p-6");

    const divTextTitle = document.createElement("div");
    divTextTitle.classList.add("text-sm");

    const h3 = document.createElement("h3");
    h3.classList.add("font-bold", "text-base");
    h3.innerText = this.name;

    const p = document.createElement("p");
    p.classList.add("mt-1");

    // const span = document.createElement("span");
    // span.innerText = this.tags.join(" · ");

    const p2 = document.createElement("p");
    p2.innerText = `$${this.price}`;
    p2.classList.add("text-green-400", "font-bold", "mt-2", "text-lg");

    divTextTitle.appendChild(h3);
    divTextTitle.appendChild(p);
    divTextTitle.appendChild(p2);
    // divTextTitle.appendChild(span);
    divText.appendChild(divTextTitle);
    divImage.appendChild(image);
    divContainer.appendChild(divImage);
    divContainer.appendChild(divText);
    element.appendChild(divContainer);

    return element;
  }
}
