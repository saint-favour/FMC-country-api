// get the country name from the url as search params
const countryName = window.location.search.split("=")[1];

// event listeners
window.addEventListener("DOMContentLoaded", fetchCountry);

// fetch the country info
function fetchCountry() {
  fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((e) => {
      console.error(e);
    });
}
