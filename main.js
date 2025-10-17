const express = require("express");
const app = express();
const name = "A";
const port = 80;

// Function to calculate the nth Fibonacci number
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// CPU-intensive route
app.get("/fib", (req, res) => {
  const result = fibonacci(40);
  res.send(`Fibonacci number from ${name} for is ${result}`);
});

// hit the route itself
app.get(`/route-${name}`, (req, res) => {
  res.send(`route ${name} achieved`);
});

app.get(`/whoami`, (req, res) => {
  res.send(`I am route ${name} :)`);
});

// Health check route
app.get("/health", (req, res) => {
  res.send("I'm alive!");
});

app.listen(port, () => {
  console.log(`API is running on port: ${port}`);
});
