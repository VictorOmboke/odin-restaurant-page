function createContact() {
  const content = document.getElementById("content");

  const contact = document.createElement("div");
  contact.setAttribute("id", "contact");
  contact.classList.add("tabContent");

  const storeInfoHeader = document.createElement("h2");
  storeInfoHeader.classList.add("storeInfoHeader");
  storeInfoHeader.textContent = "Store Information";

  contact.appendChild(createContactImg());
  contact.appendChild(storeInfoHeader);
  contact.appendChild(createHours());

  content.appendChild(contact);
}

function createContactImg() {
  const contactImgContainer = document.createElement("div");
  contactImgContainer.classList.add("contactImgContainer");

  const contactImg = document.createElement("img");
  contactImg.classList.add("contactImg");
  contactImg.src = "images/contact.avif";
  contactImg.alt = "Photo of chopsticks";

  contactImgContainer.appendChild(contactImg);

  return contactImgContainer;
}

function createHours() {
  const hoursHeader = document.createElement("h3");
  hoursHeader.classList.add("hoursHeader");
  hoursHeader.textContent = "Hours";

  const hours = document.createElement("div");
  hours.classList.add("hours");

  const storeHours = document.createElement("ul");
  storeHours.classList.add("storeHours");

  const monday = document.createElement("li");
  monday.textContent = "Monday: 3pm - 10pm";

  const tuesday = document.createElement("li");
  tuesday.textContent = "Tuesday: 3pm - 10pm";

  const wednesday = document.createElement("li");
  wednesday.textContent = "Wednesday: 3pm - 10pm";

  const thursday = document.createElement("li");
  thursday.textContent = "Thursday: 3pm - 10pm";

  const friday = document.createElement("li");
  friday.textContent = "Friday: 3pm - 10pm";

  const saturday = document.createElement("li");
  saturday.textContent = "Saturday: 12pm - 11pm";

  const sunday = document.createElement("li");
  sunday.textContent = "Sunday: 12pm - 11pm";

  storeHours.appendChild(hoursHeader);
  storeHours.appendChild(monday);
  storeHours.appendChild(tuesday);
  storeHours.appendChild(wednesday);
  storeHours.appendChild(thursday);
  storeHours.appendChild(friday);
  storeHours.appendChild(saturday);
  storeHours.appendChild(sunday);

  hours.appendChild(storeHours);
  hours.appendChild(createAddress());

  return hours;
}

function createAddress() {
  const addressHeader = document.createElement("h3");
  addressHeader.classList.add("addressHeader");
  addressHeader.textContent = "Address";

  const address = document.createElement("div");
  address.classList.add("address");

  const addressInfo = document.createElement("ul");
  addressInfo.classList.add("addressInfo");

  const streetAddress = document.createElement("li");
  streetAddress.textContent = "Address: 123 Cuisine Avenue";

  const city = document.createElement("li");
  city.textContent = "City: Seattle";

  const state = document.createElement("li");
  state.textContent = "State: Washington";

  const zipCode = document.createElement("li");
  zipCode.textContent = "ZIP Code: 98101";

  const phone = document.createElement("li");
  phone.textContent = "Phone: (555) 123-4567";

  addressInfo.appendChild(addressHeader);
  addressInfo.appendChild(streetAddress);
  addressInfo.appendChild(city);
  addressInfo.appendChild(state);
  addressInfo.appendChild(zipCode);
  addressInfo.appendChild(phone);

  address.appendChild(addressInfo);

  return address;
}

export default createContact;
