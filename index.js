const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({ target: 'http://localhost:3000',pathRewrite:{"/api":""}, changeOrigin: true }));
app.use(express.static("public"))
app.listen(1000);
