// ---------------------------
// temples.js
// ---------------------------

// ---------- HAMBURGER MENU ----------
const hambutton = document.querySelector("#navBtn");
const navLinks = document.querySelector("#nav");

hambutton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ---------- FOOTER UPDATES ----------
const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

const now = new Date();
currentYear.innerHTML = `&copy; ${now.getFullYear()}`;
lastModified.textContent = `Last Modified: ${document.lastModified}`;

// ---------- TEMPLES DATA ----------
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Accra Ghana ",
    location: " Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 9600,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
  },

    {
    templeName: "Abidjan Ivory Coast ",
    location: " Abidjan, Ivory Coast",
    dedicated: "2025, May, 25",
    area: 17362,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-58993-main.jpg"
  },
    {
    templeName: "Draper Utah ",
    location: " Utah, United States",
    dedicated: "2009, March, 20-22",
    area: 58300,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/draper-utah-temple/draper-utah-temple-38937-main.jpg"
  },
    {
    templeName: "Orem Utah ",
    location: " Utah, United States",
    dedicated: "2024, January, 21",
    area: 71998,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/orem-utah-temple/orem-utah-temple-39549-main.jpg"
  },
    {
    templeName: "Ogden Utah ",
    location: " Utah, United States",
    dedicated: "2014, September, 21",
    area: 112232,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/ogden-utah-temple/ogden-utah-temple-38445-main.jpg"
  },
  
];

// ---------- DISPLAY FUNCTION ----------
const main = document.querySelector("main");

function displayTemples(filteredTemples, title = "Temples") {
  main.innerHTML = `
    <h2>${title}</h2>
    <h3>Learn more about temples around the world at
      <a href="https://www.churchofjesuschrist.org/temples/list?lang=eng"
         target="_blank" rel="noopener">
        churchofjesuschrist.org/temples
      </a>.
    </h3>
  `;

  filteredTemples.forEach((temple) => {
    const figure = document.createElement("figure");
    figure.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      <figcaption>
        <h3>${temple.templeName}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      </figcaption>
    `;
    main.appendChild(figure);
  });
}

// ---------- FILTER FUNCTIONS ----------
function filterOld() {
  return temples.filter(
    (temple) => new Date(temple.dedicated).getFullYear() < 1900
  );
}

function filterNew() {
  return temples.filter(
    (temple) => new Date(temple.dedicated).getFullYear() > 2000
  );
}

function filterLarge() {
  return temples.filter((temple) => temple.area > 90000);
}

function filterSmall() {
  return temples.filter((temple) => temple.area < 10000);
}

// ---------- NAVIGATION EVENTS ----------
document.querySelectorAll("#nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const text = link.textContent.trim();

    switch (text) {
      case "Home":
        displayTemples(temples, "All Temples");
        break;
      case "Old":
        displayTemples(filterOld(), "Old Temples");
        break;
      case "New":
        displayTemples(filterNew(), "New Temples");
        break;
      case "Large":
        displayTemples(filterLarge(), "Large Temples");
        break;
      case "Small":
        displayTemples(filterSmall(), "Small Temples");
        break;
    }

    // Close mobile nav menu
    navLinks.classList.remove("active");
  });
});

// ---------- INITIAL LOAD ----------
displayTemples(temples, "All Temples");
