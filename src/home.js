function createHome() {
  const content = document.getElementById("content");

  const home = document.createElement("div");
  home.setAttribute("id", "home");
  home.classList.add("tabContent");
  home.classList.add("active");

  home.appendChild(createHomeImg());
  home.appendChild(createGreeting());
  home.appendChild(createOurStory());

  content.appendChild(home);
}

function createGreeting() {
  const greeting = document.createElement("div");
  greeting.classList.add("greeting");

  const welcomeMessage = document.createElement("h2");
  welcomeMessage.classList.add("welcomeMessage");
  welcomeMessage.textContent = "Welcome to Oishī";

  greeting.appendChild(welcomeMessage);

  return greeting;
}

function createHomeImg() {
  const homeImgContainer = document.createElement("div");
  homeImgContainer.classList.add("homeImgContainer");

  const homeImg = document.createElement("img");
  homeImg.classList.add("homeImg");
  homeImg.src = "../src/images/home.avif";
  homeImg.alt = "Japanese style sushi platter";

  homeImgContainer.appendChild(homeImg);

  return homeImgContainer;
}

function createOurStory() {
  const ourStory = document.createElement("div");
  ourStory.classList.add("ourStory");

  const story = document.createElement("p");
  story.classList.add("story");
  story.textContent =
    "Established in 1986, Oishī is a traditional Japanese restaurant which delivers authentic japanese cuisine in a modern and sleek setting. Oishī is home to some of the finest Japanese chefs that have decades of experience crafting some of Japan's most sacred dishes. Some of Oishī's specialties include sushi, ramen, and udon but there are many different dishes that will transport you to the heart of Japan. We hope you enjoy our food as much as we do.";

  ourStory.appendChild(story);

  return ourStory;
}

export default createHome;
