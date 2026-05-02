const express = require("express");
const axios = require("axios");
const app = express();
const name = "A";
const port = 80;

app.use(express.json());

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

// Proxy endpoint: takes an IP from the body sends a GET request to that IP, and returns the response
app.post("/proxy", async (req, res) => {
  const { ip } = req.body;
  if (!ip) {
    return res
      .status(400)
      .json({ error: "IP address is required in the body." });
  }
  try {
    // Assume http protocol and port 80 if not specified
    const url = `http://${ip}/proxy-call`;
    const response = await axios.get(url);
    res.status(response.status).send(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/proxy-call", async (req, res) => {
  res.send(`Hello from ${name}'s proxy call!`);
});

// Health check route
app.get("/health", (req, res) => {
  res.send("I'm alive!");
});

app.listen(port, () => {
  console.log(`API is running on port: ${port}`);
});
