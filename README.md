# FMC-country-api

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

look thorough all your favourite countries and more!

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Screenshot

![html_image (3)](https://github.com/user-attachments/assets/cef1c9dd-a54a-45c9-b162-99cf2fceff03)


### Links

- Live Site URL: (https://saint-favour.github.io/)

### Built with
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid


### What I learned
the project really open my eyes to the use of grid layout and most imporantly fetching of data through an API

code snippets, see below:

```js
function fetchCountries() {
  fetch(`https://restcountries.com/v3.1/all`)
    .then((res) => res.json())
    .then((data) => {
      countries.push(...data);
      displayCountries(countries);
    })
    .catch((e) => {
      console.error(e);
    });
}
}
```

### Useful resources

- [Example resource 1](https://restcountries.com/v3.1/all)  - This helped me to get all country data.

## Author
 Saint-favour Amaechi
 
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter/X - [@saintAmaechi](https://x.com/SaintAmaechi) 

## Acknowledgments

All glory goes to GOD!
