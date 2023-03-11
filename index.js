// DOM Elements
const number = document.getElementById("id");
const quote = document.getElementById("data");

// API
const api = "https://api.adviceslip.com/advice";

async function fetchData() {
  try {
    const res = await fetch(api);
    const adviceData = await res.json();
    number.innerHTML = adviceData.slip.id;
    quote.innerHTML = adviceData.slip.advice;
  } catch (e) {
    console.error(e);
  }
}

fetchData();

function change() {
  fetchData();
}
