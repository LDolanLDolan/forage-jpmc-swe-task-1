# 💼 Forage J.P. Morgan SWE Task 1 – Live Market Data Visualizer


It simulates a real-time stock price environment using a **Python-based market engine** and a **browser-based JavaScript visualizer**.

This project was completed as part of the **J.P. Morgan Software Engineering Virtual Internship** via [Forage](https://www.theforage.com/virtual-internships/prototype/jp-morgan/software-engineering).  

> 🔗 **Live Demo**  
> - 📈 Frontend (Netlify): [https://fliprate.netlify.app](https://fliprate.netlify.app)  
> - 🔌 Backend API (Render): [https://forage-jpmc-swe-task-1.onrender.com/query?id=test](https://forage-jpmc-swe-task-1.onrender.com/query?id=test)

---

## 🧩 What This Project Demonstrates

✅ The ability to:
- Build and simulate a financial market environment with custom logic
- Serve quote data from a Python HTTP server
- Parse and visualize that data in a live web app using vanilla JavaScript
- Connect backend and frontend using simple RESTful calls
- Calculate price ratios and update them in near real-time

---

## ⚙️ How It Works

- **Backend**: A custom multithreaded Python HTTP server (`server3.py`) generates stock quote data for two fictional assets, `ABC` and `DEF`.
  - Simulates a realistic **bid/ask** spread
  - Returns a JSON object via `/query`
  - Deployed using Docker on [Render](https://render.com)

- **Frontend**: A static HTML/JS app that:
  - Fetches quote data every 2 seconds
  - Displays bid, ask, and calculated midpoint prices for each stock
  - Computes and updates the **price ratio**:  
    \[
    \text{ratio} = \frac{\text{price of ABC}}{\text{price of DEF}}
    \]
  - Hosted on [Netlify](https://www.netlify.com)

---

## 🔍 Sample API Response

Calling `/query?id=test` returns:

```json
[
  {
    "id": "test",
    "stock": "ABC",
    "top_bid": { "price": 118.13, "size": 145 },
    "top_ask": { "price": 116.63, "size": 31 }
  },
  {
    "id": "test",
    "stock": "DEF",
    "top_bid": { "price": 115.14, "size": 12 },
    "top_ask": { "price": 117.87, "size": 3 }
  }
]
