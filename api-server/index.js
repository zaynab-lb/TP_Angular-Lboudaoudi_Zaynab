const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

let cart = [];

app.get("/api/products", (req, res) => {
  let products = [
    {
      productId: 1,
      productTitle: "Clavier",
      productPrice: 150,
      productQuantity: 15,
      productImage: 'assets/images/clavier.jpeg'
    },
    {
      productId: 2,
      productTitle: "Souris",
      productPrice: 50,
      productQuantity: 20,
      productImage: 'assets/images/souris.jpeg'
    },
    {
      productId: 3,
      productTitle: "Ecran",
      productPrice: 1000,
      productQuantity: 10,
      productImage: 'assets/images/ecran.jpeg'
    },
    {
      productId: 4,
      productTitle: "PC Portable",
      productPrice: 5000,
      productQuantity: 8,
      productImage: 'assets/images/pc.jpeg'
    },
    {
      productId: 5,
      productTitle: "Tapis",
      productPrice: 200,
      productQuantity: 25,
      productImage: 'assets/images/tapis.jpeg'
    },
  ];
  res.send(products);
});

app.post("/api/cart", (req, res) => {
  cart = req.body;
  setTimeout(() => res.status(201).send(), 20);
});

app.get("/api/cart", (req, res) => res.send(cart));

const port = 3000;
app.listen(port, () => console.log(`API Server listening on port ${port}`));
