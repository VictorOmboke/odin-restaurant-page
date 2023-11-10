import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";
import createWebpage from "./webpage";

function clearContent() {
  const content = document.getElementById("content");

  while (content.children.length > 1) {
    content.removeChild(content.lastChild);
  }
}

function setActiveTab(tab) {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((t) => t.classList.remove("active"));

  tab.classList.add("active");
}

function createTabEvents() {
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      clearContent();
      setActiveTab(tab);

      if (tab.classList.contains("home")) {
        createHome();
      } else if (tab.classList.contains("menu")) {
        createMenu();
      } else if (tab.classList.contains("contact")) {
        createContact();
      }
    });
  });
}

function LoadPage() {
  createWebpage();
  createHome();
  createTabEvents();
}

LoadPage();
