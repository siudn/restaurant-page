import Glizz from "./glizz.jpeg";

const createRestaurantHomePage = () => {
  const main = document.querySelector("#content");
  let header = document.createElement("header");
  const image = new Image();
  let desc = document.createElement("div");

  header.innerHTML = `
        <h1>Great Big Bangali Restaurant</h1>
    `;

  image.src = Glizz;
  image.alt = "Glizzy goller";

  desc.textContent =
    "Lots of glizzies for everyone. Welcome to glizzy goller island!";

  main.appendChild(header);
  main.appendChild(image);
  main.appendChild(desc);
};

export default createRestaurantHomePage;
