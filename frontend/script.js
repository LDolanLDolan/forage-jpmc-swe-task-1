const API_URL = "https://forage-jpmc-swe-task-1.onrender.com/query?id=";

function updateQuote() {
  fetch(API_URL + Math.random())
    .then((response) => response.json())
    .then((data) => {
      let prices = {};

      data.forEach((quote) => {
        const stock = quote.stock;
        const bid = parseFloat(quote.top_bid.price).toFixed(2);
        const ask = parseFloat(quote.top_ask.price).toFixed(2);
        const price = ((parseFloat(bid) + parseFloat(ask)) / 2).toFixed(2);
        prices[stock] = price;

        document.getElementById(`${stock.toLowerCase()}-bid`).textContent = bid;
        document.getElementById(`${stock.toLowerCase()}-ask`).textContent = ask;
        document.getElementById(`${stock.toLowerCase()}-price`).textContent = price;
      });

      const ratio = prices["DEF"] && prices["DEF"] != 0
        ? (prices["ABC"] / prices["DEF"]).toFixed(4)
        : "N/A";

      document.getElementById("ratio").textContent = ratio;
    })
    .catch((err) => {
      console.error("Error fetching data:", err);
    });
}

// Update every 2 seconds
setInterval(updateQuote, 2000);
updateQuote();
