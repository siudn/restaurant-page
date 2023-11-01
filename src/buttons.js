const createButtons = () => {
  const buttons = document.querySelector("#buttons");

  const homeButton = document.createElement("button");
  homeButton.id = "home";
  const menuButton = document.createElement("button");
  menuButton.id = "menu";
  const contactButton = document.createElement("button");
  contactButton.id = "contact";

  homeButton.textContent = "Home";
  menuButton.textContent = "Menu";
  contactButton.textContent = "Contact";

  buttons.appendChild(homeButton);
  buttons.appendChild(menuButton);
  buttons.appendChild(contactButton);
};

export default createButtons;
