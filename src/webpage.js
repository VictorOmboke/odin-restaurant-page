function createHeader() {
  const header = document.createElement("div");
  header.setAttribute("id", "header");
  header.classList.add("header");

  const restaurantName = document.createElement("h1");
  restaurantName.classList.add("restaurantName");
  restaurantName.textContent = "ŌISHĪ";

  header.appendChild(restaurantName);
  header.appendChild(createTabs());

  return header;
}

function createTabs() {
  const tabContainer = document.createElement("div");
  tabContainer.classList.add("tabContainer");

  const homeTab = document.createElement("button");
  homeTab.setAttribute("id", "homeTab");
  homeTab.classList.add("tab", "home");
  homeTab.classList.add("active");
  homeTab.textContent = "Home";

  const menuTab = document.createElement("button");
  menuTab.setAttribute("id", "menuTab");
  menuTab.classList.add("tab", "menu");
  menuTab.textContent = "Menu";

  const contactTab = document.createElement("button");
  contactTab.setAttribute("id", "contactTab");
  contactTab.classList.add("tab", "contact");
  contactTab.textContent = "Contact";

  tabContainer.appendChild(homeTab);
  tabContainer.appendChild(menuTab);
  tabContainer.appendChild(contactTab);

  return tabContainer;
}

function createWebpage() {
  const content = document.getElementById("content");
  content.appendChild(createHeader());
}

export default createWebpage;
