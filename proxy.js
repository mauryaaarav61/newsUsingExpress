// proxy.js

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const targetApiUrl = 'https://api.example.com'; // Replace with your API endpoint

app.use('/api', createProxyMiddleware({ target: targetApiUrl, changeOrigin: true }));

const port = 3000;
app.listen(port, () => {
  console.log(`Proxy server is running on http://localhost:${port}`);
});
