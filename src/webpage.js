import createHome from "./home";

function createHeader() {
  const header = document.createElement("div");
  header.classList.add("header");

  const restaurantName = document.createElement("h1");
  restaurantName.classList.add("restaurantName");
  restaurantName.textContent = "Ōishii";

  header.appendChild(restaurantName);
  header.appendChild(createNav());

  return header;
}

function createNav() {
  const nav = document.createElement("div");
  nav.classList.add("navContainer");

  const home = document.createElement("button");
  home.classList.add("homeBtn");
  home.textContent = "Home";

  const menu = document.createElement("button");
  menu.classList.add("menuBtn");
  menu.textContent = "Menu";

  const contact = document.createElement("button");
  contact.classList.add("contactBtn");
  contact.textContent = "Contact";

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);

  return nav;
}

function createWebpage() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createHome());
}

export default createWebpage;
