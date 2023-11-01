const createMenuPage = () => {
  const main = document.querySelector("#content");
  let header = document.createElement("header");
  let desc = document.createElement("div");

  header.innerHTML = `
        <h1>Menu</h1>
    `;

  desc.textContent = `
    Glizzark: $20
    Buns: $10
    Corn dog: $16
    The whole restaurant: $30
  `;

  main.appendChild(header);
  main.appendChild(desc);
};

export default createMenuPage;
