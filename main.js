const darkMode = document.querySelector(".dark-mode");
const card = document.querySelectorAll(".card");
const dropDown = document.querySelector(".dropdown");
const Body = document.querySelector("body");

darkMode.addEventListener('click', () => {
    // darkMode.classList.toggle('active');
    // card.classList.toggle("active-link");
    Body.classList.toggle('active');
    dropDown.classList.toggle("active-link"); 
})

// general 
// search input DOM-manipulation
const searchInput = document.querySelector("#search-input");
const flagImage = document.querySelector("#flag-image");
const countryName = document.querySelector("#country-name");
const countryPopulation = document.querySelector("#country-population");
const countryRegion = document.querySelector("#country-region");
const countryCapital = document.querySelector("#country-capital");
const searchButton = document.querySelector("#search-btn");



// get country from API
const getCountry = async () => {
    try {
        const countriesName = searchInput.value.toLowerCase()
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${countriesName}`
        );
        const data = await res.json();
        setCountryInfo(data);
    } catch (err) {
        alert('country not found')
    }
};

// get data from API
const setCountryInfo = data => {
    const {name, tld, idd, capital, maps, population, flag} = data;

    flagImage.innerHTML = `<img src="${flag}" alt="${name}"`;

    countryName.textContent = `${name[0].toUpperCase() + name.slice(1)}`

    countryPopulation.textContent = `population: ${population}`;
    countryRegion.textContent = `Region: ${population}`;
    countryCapital.textContent = `Capital: ${population}`;

}

//search for country
searchButton.addEventListener("click", () => {
  getCountry();
});
//fetch country 

//display of country 


//

