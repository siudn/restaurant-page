import pageLoad from "./pageLoad.js";
import createMenuPage from "./menu.js";
import createRestaurantHomePage from "./home.js";

pageLoad();

const content = document.querySelector("#content");
const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const contactButton = document.querySelector("#contact");

homeButton.addEventListener("click", () => {
  content.innerHTML = ``;
  createRestaurantHomePage();
});

menuButton.addEventListener("click", () => {
  content.innerHTML = ``;
  createMenuPage();
});
