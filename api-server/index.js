const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
//app.use(cors());
app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

let cart = [];
let orders = [];
 const users = {
  "zaynab@gmail.com": {
    userId: 1,
    firstName: "Zaynab",
    lastName: "Lboudaoudi",
    email: "zaynab@gmail.com",
    password: "zaynab",
    age: 30,
    userType: "Admin"
  },
  "safae@gmail.com": {
    userId: 2,
    firstName: "Safae",
    lastName: "Hamdi",
    email: "safae@gmail.com",
    password: "safae",
    age: 25,
    userType: "Member"
  },
  "email@email.com": {
    userId: 3,
    firstName: "Mohamed",
    lastName: "Ks",
    email: "email@email.com",
    password: "test",
    age: 28,
    userType: "Member"
  }
};

const products = [
  {
    productId: 1,
    productTitle: "Clavier",
    productPrice: 150,
    productQuantity: 15,
    productCategory: "Clavier",
    productImage: 'assets/images/clavier.jpeg'
  },
  {
    productId: 2,
    productTitle: "Souris",
    productPrice: 50,
    productQuantity: 20,
    productCategory: "Souris",
    productImage: 'assets/images/souris.jpeg'
  },
  {
    productId: 3,
    productTitle: "Ecran",
    productPrice: 1000,
    productQuantity: 10,
    productCategory: "Ecran",
    productImage: 'assets/images/ecran.jpeg'
  },
  {
    productId: 4,
    productTitle: "PC Portable",
    productPrice: 5000,
    productQuantity: 8,
    productCategory: "Ordinateur",
    productImage: 'assets/images/pc.jpeg'
  },
  {
    productId: 5,
    productTitle: "Tapis",
    productPrice: 200,
    productQuantity: 25,
    productCategory: "Accessoires",
    productImage: 'assets/images/tapis.jpeg'
  },
];

// Route pour la connexion
app.post("/api/signin", (req, res) => {
  const user = users[req.body.email];
  if (user && user.password === req.body.password) {
    res.status(200).send({
      userId: user.userId,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      userType: user.userType
    });
  } else {
    res.status(401).json({ error: "Identifiants invalides." });
  }
});


app.get("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.productId === id);
  if (product) {
    res.send(product);
    console.log("Produit trouvé:", product.productTitle);
  } else {
    res.status(404).send({ message: "Produit non trouvé" });
    console.log("Produit non trouvé");
  }
});

app.post("/api/cart", (req, res) => {
  cart = req.body;
  setTimeout(() => res.status(201).send(), 20);
});

app.get("/api/cart", (req, res) => res.send(cart));

app.post("/api/signup", (req, res) => {
  const { email, password, firstName, lastName, age, userType, isAdminRequest = false } = req.body;

  if (users[email]) {
    return res.status(409).json({ error: "Utilisateur déjà existant." });
  }

  const userId = Object.keys(users).length + 1;
  users[email] = {
    userId,
    firstName,
    lastName,
    email,
    password,
    age,
    userType
  };

  res.status(201).send({ 
    message: "Utilisateur créé avec succès.",
    user: users[email]
  });
});


let userCarts = {};

app.post("/api/cart", (req, res) => {
  const userId = req.body.userId; // Vous devrez envoyer l'userId depuis le front
  userCarts[userId] = req.body.items;
  setTimeout(() => res.status(201).send(), 20);
});

app.get("/api/cart", (req, res) => {
  const userId = req.query.userId; // Envoyez l'userId en paramètre
  res.send(userCarts[userId] || []);
});


//LEs méthode pour users
app.get("/api/users", (req, res) => {
  // Convertir l'objet users en tableau
  const usersList = Object.values(users);
  res.status(200).send(usersList);
});

// Route pour mettre à jour un utilisateur
/*app.put('/api/users/:id', (req, res) => {
  console.log("Mise à jour reçue pour l'ID:", req.params.id); // 👈

  const userId = parseInt(req.params.id);
  const updatedData = req.body;

  const userKey = Object.keys(users).find(
    key => users[key].userId === userId
  );

  if (!userKey) {
    console.log("Utilisateur non trouvé");
    return res.status(404).json({ message: 'Utilisateur non trouvé' });
  }

  users[userKey] = {
    ...users[userKey],
    ...updatedData,
    userId: users[userKey].userId
  };

  console.log("Utilisateur mis à jour :", users[userKey]);

  res.status(200).json({ message: 'Utilisateur mis à jour', user: users[userKey] });
});*/

app.put('/api/users/:id', (req, res) => {
  console.log("Mise à jour reçue pour l'ID:", req.params.id);

  const userId = parseInt(req.params.id);
  const updatedData = req.body;

  // Trouver l'utilisateur par ID (clé = email)
  const oldEmailKey = Object.keys(users).find(
    key => users[key].userId === userId
  );

  if (!oldEmailKey) {
    console.log("Utilisateur non trouvé");
    return res.status(404).json({ message: 'Utilisateur non trouvé' });
  }

  const oldUser = users[oldEmailKey];

  // Supprimer l'ancienne entrée si l'email a changé
  const newEmailKey = updatedData.email;

  // Créer une nouvelle entrée avec la nouvelle clé email
  users[newEmailKey] = {
    ...oldUser,
    ...updatedData,
    userId: oldUser.userId
  };

  // Supprimer l'ancienne clé uniquement si l'email a changé
  if (newEmailKey !== oldEmailKey) {
    delete users[oldEmailKey];
  }

  console.log("Utilisateur mis à jour :", users[newEmailKey]);
  res.status(200).json({ message: 'Utilisateur mis à jour', user: users[newEmailKey] });
});


// Supprimer un utilisateur
app.delete('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);

  // Trouver la clé (email) de l'utilisateur
  const userKey = Object.keys(users).find(key => users[key].userId === userId);

  if (!userKey) {
    return res.status(404).json({ message: "Utilisateur non trouvé" });
  }

  delete users[userKey];
  res.status(200).json({ message: "Utilisateur supprimé avec succès" });
});

// Modifiez la route /api/orders pour gérer la mise à jour des stocks
app.post("/api/orders", (req, res) => {
  const { userId, items, shippingInfo, paymentInfo, total } = req.body;
  
  // Vérifier que les quantités en stock sont suffisantes
  for (const item of items) {
    const product = products.find(p => p.productId === item.productId);
    if (!product) {
      return res.status(404).json({ error: `Produit ${item.productId} non trouvé` });
    }
    if (product.productQuantity < item.quantity) {
      return res.status(400).json({ 
        error: `Stock insuffisant pour ${product.productTitle}. Stock disponible: ${product.productQuantity}` 
      });
    }
  }
  
  // Mettre à jour les stocks
  for (const item of items) {
    const product = products.find(p => p.productId === item.productId);
    product.productQuantity -= item.quantity;
  }
  
  const newOrder = {
    orderId: orders.length + 1,
    userId,
    items,
    shippingInfo,
    paymentInfo,
    total,
    orderDate: new Date().toISOString(),
    status: "En traitement"
  };
  
  orders.push(newOrder);
  
  // Vider le panier de l'utilisateur
  if (userCarts[userId]) {
    userCarts[userId] = [];
  }
  
  res.status(201).json(newOrder);
});

// Modifiez vos routes /api/products pour utiliser le tableau products
app.get("/api/products", (req, res) => {
   console.log("Liste des produits :", products);
  res.send(products); // utilise la variable globale
});

app.get("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.productId === id);

  if (product) {
    res.send(product);
    console.log("Produit trouvé" + product.productTitle);
  } else {
    res.status(404).send({ message: "Produit non trouvé" });
    console.log("Produit non trouvé");
  }
});

// === Commandes ===
app.post("/api/orders", (req, res) => {
  const { userId, items, shippingInfo, paymentInfo, total } = req.body;

  for (const item of items) {
    const product = products.find(p => p.productId === item.productId);
    if (!product) {
      return res.status(404).json({ error: `Produit ${item.productId} non trouvé` });
    }
    if (product.productQuantity < item.quantity) {
      return res.status(400).json({ 
        error: `Stock insuffisant pour ${product.productTitle}. Stock disponible: ${product.productQuantity}` 
      });
    }
  }

  for (const item of items) {
    const product = products.find(p => p.productId === item.productId);
    product.productQuantity -= item.quantity;
  }

  const newOrder = {
    orderId: orders.length + 1,
    userId,
    items,
    shippingInfo,
    paymentInfo,
    total,
    orderDate: new Date().toISOString(),
    status: "En traitement"
  };

  orders.push(newOrder);

  if (userCarts[userId]) {
    userCarts[userId] = [];
  }

  res.status(201).json(newOrder);
});

// Route pour récupérer les commandes d'un utilisateur
app.get("/api/orders/:userId", (req, res) => {
  const userOrders = orders.filter(order => order.userId === parseInt(req.params.userId));
  res.status(200).json(userOrders);
});
app.get("/api/orders/details/:orderId", (req, res) => {
  const orderId = parseInt(req.params.orderId);
  const order = orders.find(o => o.orderId === orderId);

  if (order) {
    res.status(200).json(order);
  } else {
    res.status(404).json({ message: "Commande non trouvée" });
  }
});

// Route pour ajouter un produit
app.post("/api/products", (req, res) => {
  const { productTitle, productPrice, productQuantity, productCategory, productImage } = req.body;

  const newProduct = {
    productId: products.length + 1,
    productTitle,
    productPrice,
    productQuantity,
    productCategory,
    productImage
  };

  products.push(newProduct);

  console.log("Nouveau produit ajouté :", newProduct);
  console.log("Tous les produits :", products);

  res.status(201).json({ message: "Produit ajouté", product: newProduct });
});

// Route pour modifier un produit
app.put("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.productId === id);

  if (index === -1) {
    return res.status(404).json({ message: "Produit non trouvé" });
  }

  const updatedProduct = {
    ...products[index],
    ...req.body,
    productId: id
  };

  products[index] = updatedProduct;
  res.status(200).json({ message: "Produit mis à jour", product: updatedProduct });
});

app.delete("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.productId === id);

  if (index === -1) {
    return res.status(404).json({ message: "Produit non trouvé" });
  }

  products.splice(index, 1);
  console.log(`Produit avec ID ${id} supprimé`);
  res.status(200).json({ message: "Produit supprimé avec succès" });
});


app.get("/api/allorders", (req, res) => {
  res.status(200).json(orders);
});

const port = 3000;
app.listen(port, () => console.log(`API Server listening on port ${port}`));

