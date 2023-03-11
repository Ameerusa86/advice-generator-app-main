// DOM Elements
const number = document.getElementById("advice_number");
const quote = document.getElementById("quote");

// API
const api = "https://api.adviceslip.com/advice";

const API = fetch(api)
  .then((response) => response.json())
  .then((data) => {
    quote.innerHTML = data.slip.advice;
    number.innerText = data.slip.id;
  });
