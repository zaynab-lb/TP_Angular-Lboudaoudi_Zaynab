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
    res.status(401).send("Invalid user credentials.");
  }
});
app.get("/api/products", (req, res) => {
  let products = [
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
  res.send(products);
});
app.get("/api/products/:id", (req, res) => {
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

app.post("/api/cart", (req, res) => {
  cart = req.body;
  setTimeout(() => res.status(201).send(), 20);
});

app.get("/api/cart", (req, res) => res.send(cart));

app.post("/api/signup", (req, res) => {
  const { email, password, firstName, lastName, age, userType } = req.body;

  if (userType !== "Member") {
    return res.status(400).send("Seuls les utilisateurs de type Member peuvent s'inscrire.");
  }

  if (users[email]) {
    return res.status(409).send("Utilisateur déjà existant.");
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




const port = 3000;
app.listen(port, () => console.log(`API Server listening on port ${port}`));

