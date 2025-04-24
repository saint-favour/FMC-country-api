//dark mode
const darkMode = document.querySelector(".dark-mode");
const card = document.querySelectorAll(".card");
const dropDown = document.querySelector(".dropdown");
const body = document.querySelector("body");

darkMode.addEventListener("click", () => {
  // darkMode.classList.toggle('active');
  // card.classList.toggle("active-link");
  body.classList.toggle("active");
  dropDown.classList.toggle("active-link");
});

// DOM manuplication
const infoName = document.querySelector("#info-name");
const nativeName = document.querySelector("#country-native");
const population = document.querySelector("#country-population");
const subRegion = document.querySelector("#country-sub");
const capital = document.querySelector("#country-capital");
const domain = document.querySelector("#country-domain");
const currency = document.querySelector("#country-currency");
const language = document.querySelector("#country-lang");
const flag = document.querySelector("#image-dedicated");
const borderBtn1 = document.querySelector(".b-btn1");
const borderBtn2 = document.querySelector(".b-btn2");
const borderBtn3 = document.querySelector(".b-btn3");

// get the country name from the url as search params
const countryName = window.location.search.split("=")[1];

// event listeners
window.addEventListener("DOMContentLoaded", fetchCountry);

let countries = [];
// fetch the country info
function fetchCountry() {
  fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((res) => res.json())
    .then((data) => {
      countries.push(...data);
      displayCountries(countries);
      console.log(data);
    })
    .catch((e) => {
      console.error(e);
    });
}

function displayCountries(countries) {
  countries.forEach((country) => {
    flag.innerHTML = `<img  class="img2" src="${country.flags.png}" alt="${country.name.common}" />`;
    infoName.textContent = country.name.common;
    population.textContent = `Population: ${country.population}`;
    capital.textContent = `Capital: ${country.capital}`;
    domain.textContent = `Top Level Domain: ${country.tld}`;
    subRegion.textContent = `Sub Region: ${country.subregion}`;

    if ("borders" in country) {
      borderBtn1.textContent = country.borders[0];
      borderBtn2.textContent = country.borders[1];
      borderBtn3.textContent = country.borders[2];
    } else {
      borderBtn1.textContent = "No border";
      borderBtn2.textContent = "No border";
      borderBtn3.textContent = "No border";
    }

    // for countries using objects. figured it out
    Object.keys(country.currencies).forEach((key) => {
      currency.textContent = `Currency: ${country.currencies[key].name}`;
    });
    Object.keys(country.name.nativeName).forEach((key) => {
      nativeName.textContent = `Native Name: ${country.name.nativeName[key].official}`;
    });
    Object.keys(country.languages).forEach((key) => {
      language.textContent = `Languages: ${country.languages[key]}`;
    });
  });
}
