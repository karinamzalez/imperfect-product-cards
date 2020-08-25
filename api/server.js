const express = require('express');
const products = require('../src/products.json');

const app = express();
// ENABLE ALL CORS REQUESTS
const cors = require("cors");
app.use(cors());
const port = process.env.PORT || 9001;

app.get('/products', (req, res) => {
  return res.json(products);
});

app.listen(port, () => console.info(`App started, listening on ${port}`));
