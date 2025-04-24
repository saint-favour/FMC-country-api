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


// get the country name from the url as search params
const countryName = window.location.search.split("=")[1];

// event listeners
window.addEventListener("DOMContentLoaded", fetchCountry);

let countries = []
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
    
    flag.innerHTML = `<img src="${country.flags.png}" alt="${country.name.common}"  class="img2">`;
    infoName.textContent = country.name.common;
    nativeName.textContent = `Native Name: ${country.name.nativeName[0]}`;
    population.textContent = `Population: ${country.population}`;
    capital.textContent = `Capital: ${country.capital}`;
    domain.textContent = `Top Level Domain: ${country.domain}`;
    currency.textContent = `Currency: ${country.currencies.name}`;
    language.textContent = `Languages: ${country.languages.eng}`;
  })
}