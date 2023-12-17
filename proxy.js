// proxy.js

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const targetApiUrl = "https://newsapi.org/v2/everything?q=tesla&from=2023-11-17&sortBy=publishedAt&apiKey=1a97b38b931648cf924bcdffcb983ea2"

app.use('/api', createProxyMiddleware({ target: targetApiUrl, changeOrigin: true }));

const port = 3000;
app.listen(port, () => {
  console.log(`Proxy server is running on http://localhost:${port}`);
});

