const darkMode = document.querySelector(".dark-mode");
const card = document.querySelectorAll(".card");
const dropDown = document.querySelector(".dropdown");
const Body = document.querySelector("body");


darkMode.addEventListener("click", () => {
  // darkMode.classList.toggle('active');
  // card.classList.toggle("active-link");
  Body.classList.toggle("active");
  dropDown.classList.toggle("active-link");
});

// general
// search input DOM-manipulation
const searchInput = document.querySelector("#search-input");
const container = document.querySelector("#countries-card");
const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");

//dropdown filter
const filterBtn = document.querySelectorAll(".dropdown button");

let users = []

const filterCountry = e => {
  document.querySelector(".active-select").classList.remove("active-select");
  e.target.classList.add("active-select")
  console.log(e.target)
  // console.log(user.element.dataset.regions);
  // iteration
  //  let value = e.target.value.toLowerCase()
  //  console.log(region.value);
   users.forEach(user => {
    if (user.element.dataset.regions === user.region) {
      user.element.classList.remove("hide");
    } else {
      user.element.classList.add("hide");
    }
  })
}

//event listener to each filter list button 
filterBtn.forEach((btnItem) => btnItem.addEventListener("click", filterCountry ));


// search for country
searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase()

  users.forEach(user => {
    const isVisible = user.name.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible);

  })
});





// get country from API
  fetch(`https://restcountries.com/v3.1/all`)
    .then((res) => res.json())
    .then((data) => {
     users = data.map(user => {
        const card = userCardTemplate.content.cloneNode(true).children[0]
        const dataFlag = card.querySelector("[data-flag]")
        const countryName = card.querySelector("[data-name]")
        const countryPopulation = card.querySelector("[data-population]");
        const countryRegion = card.querySelector("[data-region]");
        const countryCapital = card.querySelector("[data-capital]");

        dataFlag.innerHTML = `<img src="${user.flags.png}" alt="${user.name.common}">`;
        countryName.textContent = user.name.common
        countryPopulation.textContent = `Population: ${user.population}`;
        countryRegion.textContent = `Region: ${user.region}`;
        countryCapital.textContent = `Capital: ${user.capital}`;

        userCardContainer.append(card)
        return { name: user.name.common, region: user.region, element: card};

        // console.log(user)
      })
    });

    // don't forget this region: user.region,

// filter by regions 

//AFRICA 



//fetch country

//display of country


// displayCountries(data)