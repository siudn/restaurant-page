const createMenuPage = () => {
  const main = document.querySelector("#content");
  let header = document.createElement("header");
  let menu = document.createElement("div");

  header.innerHTML = `
        <h1>Menu</h1>
    `;

  menu.innerHTML = `
    Glizzark: $20 <br>
    Buns: $10 <br>
    Corn dog: $16 <br>
    The whole restaurant: $50
  `;

  main.appendChild(header);
  main.appendChild(desc);
};

export default createMenuPage;
