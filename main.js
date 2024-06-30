const express = require("express");
const app = express();
const port = 80;

// Function to calculate the nth Fibonacci number
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// CPU-intensive route
app.get("/fib", (req, res) => {
  const result = fibonacci(40);
  res.send(`Fibonacci number for is ${result}`);
});

app.get("/route-a", (req, res) => {
  const result = fibonacci(40);
  res.send("route A achieved");
});

// Health check route
app.get("/health", (req, res) => {
  res.send("API is healthy");
});

app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});
