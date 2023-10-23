function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const menuHeader = document.createElement("h1");
  menuHeader.classList.add("menuHeader");
  menuHeader.textContent = "Menu";

  menu.appendChild(menuHeader);
  menu.appendChild(createEntree());
  menu.appendChild(createSushi());
  menu.appendChild(createSashimi());
  menu.appendChild(createRamen());
  menu.appendChild(createUdon());
  menu.appendChild(createGyudon());
  menu.appendChild(createDessert());
  menu.appendChild(createMochi());
  menu.appendChild(createDango());

  return menu;
}

function createEntree() {
  const entree = document.createElement("div");
  entree.classList.add("entree");

  const entreeHeader = document.createElement("h2");
  entreeHeader.classList.add("entreeHeader");
  entreeHeader.textContent = "Entrees";

  entree.appendChild(entreeHeader);

  return entree;
}

function createSushi() {
  const sushi = document.createElement("div");
  sushi.classList.add("sushi");

  const sushiImg = document.createElement("img");
  sushiImg.classList.add("sushiImg");
  sushiImg.src = "../src/images/sushi.jpeg";
  sushiImg.alt = "Photo of sushi";

  const sushiTitle = document.createElement("h3");
  sushiTitle.classList.add("sushiTitle");
  sushiTitle.textContent = "Nigirizushi";

  const sushiDescription = document.createElement("p");
  sushiDescription.classList.add("sushiDescription");
  sushiDescription.textContent =
    "We specialize in Nigirizushi which is fish over rice. Have your pick of Akami (Red fish), Shiromi (White fish), Hikarimono (Silver-Skinned), or Ebi (Prawn). Feel free to mix and match the types of fish you want on your roll.";

  const sushiPrice = document.createElement("ul");
  sushiPrice.classList.add("sushiPrice");

  const fourPiece = document.createElement("li");
  fourPiece.textContent = "4 Piece - 6";

  const eightPiece = document.createElement("li");
  eightPiece.textContent = "8 Piece - 10";

  const twelvePiece = document.createElement("li");
  twelvePiece.textContent = "12 Piece - 14";

  sushiPrice.appendChild(fourPiece);
  sushiPrice.appendChild(eightPiece);
  sushiPrice.appendChild(twelvePiece);

  sushi.appendChild(sushiImg);
  sushi.appendChild(sushiTitle);
  sushi.appendChild(sushiDescription);
  sushi.appendChild(sushiPrice);

  return sushi;
}

function createSashimi() {
  const sashimi = document.createElement("div");
  sashimi.classList.add("sashimi");

  const sashimiImg = document.createElement("img");
  sashimiImg.classList.add("sashimiImg");
  sashimiImg.src = "../src/images/sashimi.avif";
  sashimiImg.alt = "Photo of sashimi";

  const sashimiTitle = document.createElement("h3");
  sashimiTitle.classList.add("sashimiTitle");
  sashimiTitle.textContent = "Sashimi";

  const sashimiDescription = document.createElement("p");
  sashimiDescription.classList.add("sashimiDescription");
  sashimiDescription.textContent =
    "Sashimi is thinly sliced, raw seafood. Our sashimi includes succulent slices of tuna, salmon, sea bream,shrimp, salmon roe, and scallops served over rice.";

  const sashimiPrice = document.createElement("ul");
  sashimiPrice.classList.add("sashimiPrice");

  const regular = document.createElement("li");
  regular.textContent = "Regular - 16";

  const large = document.createElement("li");
  large.textContent = "Large - 21";

  sashimiPrice.appendChild(regular);
  sashimiPrice.appendChild(large);

  sashimi.appendChild(sashimiImg);
  sashimi.appendChild(sashimiTitle);
  sashimi.appendChild(sashimiDescription);
  sashimi.appendChild(sashimiPrice);

  return sashimi;
}

function createRamen() {
  const ramen = document.createElement("div");
  ramen.classList.add("ramen");

  const ramenImg = document.createElement("img");
  ramenImg.classList.add("ramenImg");
  ramenImg.src = "../src/images/ramen.avif";
  ramen.alt = "Photo of ramen noodles";

  const ramenTitle = document.createElement("h3");
  ramenTitle.classList.add("ramenTitle");
  ramenTitle.textContent = "Tonkotsu Ramen";

  const ramenDescription = document.createElement("p");
  ramenDescription.classList.add("ramenDescription");
  ramenDescription.textContent =
    "Our signature ramen includes a pork bone broth base, 100% wheat noodles that are made by hand every day, your choice of egg (hard boiled, soft boiled, raw, or marinated), and your choice of topping including pork, or beef.";

  const ramenPrice = document.createElement("ul");
  ramenPrice.classList.add("ramenPrice");

  const pork = document.createElement("li");
  pork.textContent = "Pork - 25";

  const beef = document.createElement("li");
  beef.textContent = "Beef - 27";

  ramenPrice.appendChild(pork);
  ramenPrice.appendChild(beef);

  ramen.appendChild(ramenImg);
  ramen.appendChild(ramenTitle);
  ramen.appendChild(ramenDescription);
  ramen.appendChild(ramenPrice);

  return ramen;
}

function createUdon() {
  const udon = document.createElement("div");
  udon.classList.add("udon");

  const udonImg = document.createElement("img");
  udonImg.classList.add("udonImg");
  udonImg.src = "../src/images/udon.avif";
  udonImg.alt = "Photo of Udon noodles";

  const udonTitle = document.createElement("h3");
  udonTitle.classList.add("udonTitle");
  udonTitle.textContent = "Nabeyaki Udon";

  const udonDescription = document.createElement("p");
  udonDescription.classList.add("udonDescription");
  udonDescription.textContent =
    "Our famous udon noodles are cooked and served in a hot pot. Our udon noodles include broth, thick hand crafted noodles, vegetables, an egg (hard boiled, soft boiled, raw, or marinated), and tempura chicken, pork, or crab";

  const udonPrice = document.createElement("ul");
  udonPrice.classList.add("udonPrice");

  const regular = document.createElement("li");
  regular.textContent = "Regular - 25";

  const large = document.createElement("li");
  large.textContent = "Large - 28";

  udonPrice.appendChild(regular);
  udonPrice.appendChild(large);

  udon.appendChild(udonImg);
  udon.appendChild(udonTitle);
  udon.appendChild(udonDescription);
  udon.appendChild(udonPrice);

  return udon;
}

function createGyudon() {
  const gyudon = document.createElement("div");
  gyudon.classList.add("gyudon");

  const gyudonImg = document.createElement("img");
  gyudonImg.classList.add("gyudonImg");
  gyudonImg.src = "../src/images/gyudon.avif";
  gyudonImg.alt = "Photo of gyudon dish";

  const gyudonTitle = document.createElement("h3");
  gyudonTitle.classList.add("gyudonTitle");
  gyudonTitle.textContent = "Gyudon";

  const gyudonDescription = document.createElement("p");
  gyudonDescription.classList.add("gyudonDescription");
  gyudonDescription.textContent =
    "Our gyudon is a simple but flavorful dish. It includes tender cuts of beef and green onions cooked in mirin, sugar, sake, and soy sauce served over rice.";

  const gyudonPrice = document.createElement("ul");
  gyudonPrice.classList.add("gyudonPrice");

  const regular = document.createElement("li");
  regular.textContent = "Regular - 22";

  const large = document.createElement("li");
  large.textContent = "Large - 25";

  gyudonPrice.appendChild(regular);
  gyudonPrice.appendChild(large);

  gyudon.appendChild(gyudonImg);
  gyudon.appendChild(gyudonTitle);
  gyudon.appendChild(gyudonDescription);
  gyudon.appendChild(gyudonPrice);

  return gyudon;
}

function createDessert() {
  const dessert = document.createElement("div");
  dessert.classList.add("dessert");

  const dessertHeader = document.createElement("h2");
  dessertHeader.classList.add("dessertHeader");
  dessertHeader.textContent = "Desserts";

  dessert.appendChild(dessertHeader);

  return dessert;
}

function createMochi() {
  const mochi = document.createElement("div");
  mochi.classList.add("mochi");

  const mochiImg = document.createElement("img");
  mochiImg.classList.add("mochiImg");
  mochiImg.src = "../src/images/mochi.avif";
  mochiImg.alt = "Photo of Mochi dessert";

  const mochiTitle = document.createElement("h3");
  mochiTitle.classList.add("mochiTitle");
  mochiTitle.textContent = "Mochi";

  const mochiDescription = document.createElement("p");
  mochiDescription.classList.add("mochiDescription");
  mochiDescription.textContent =
    "Our mochi dessert is comprised of sweet glutinous rice flour or mochigome. Our mochi dough encases a sweet chewy center ranging in flavors from white peach, strawberry, matcha and vanilla and your choice to add vanilla ice cream.";

  const mochiPrice = document.createElement("ul");
  mochiPrice.classList.add("mochiPrice");

  const threePiece = document.createElement("li");
  threePiece.textContent = "3 Piece - 6";

  const withIceCream = document.createElement("li");
  withIceCream.textContent = "3 Piece w/ Ice Cream - 10";

  mochiPrice.appendChild(threePiece);
  mochiPrice.appendChild(withIceCream);

  mochi.appendChild(mochiImg);
  mochi.appendChild(mochiTitle);
  mochi.appendChild(mochiDescription);
  mochi.appendChild(mochiPrice);

  return mochi;
}

function createDango() {
  const dango = document.createElement("div");
  dango.classList.add("dango");

  const dangoImg = document.createElement("img");
  dangoImg.classList.add("dangoImg");
  dangoImg.src = "../src/images/dango.avif";
  dangoImg.alt = "Photo of Dango dessert";

  const dangoTitle = document.createElement("h3");
  dangoTitle.classList.add("dangoTitle");
  dangoTitle.textContent = "Dango";

  const dangoDescription = document.createElement("p");
  dangoDescription.classList.add("dangoDescription");
  dangoDescription.textContent =
    "Dango is a traditional Japanese sweet treat made of rice flour and sugar dumplings on a bamboo stick.";

  const dangoPrice = document.createElement("ul");
  dangoPrice.classList.add("dangoPrice");

  const twoSticks = document.createElement("li");
  twoSticks.textContent = "2 sticks - 6";

  const threeSticks = document.createElement("li");
  threeSticks.textContent = "3 sticks - 10";

  dangoPrice.appendChild(twoSticks);
  dangoPrice.appendChild(threeSticks);

  dango.appendChild(dangoImg);
  dango.appendChild(dangoTitle);
  dango.appendChild(dangoDescription);
  dango.appendChild(dangoPrice);

  return dango;
}

export default createMenu;
