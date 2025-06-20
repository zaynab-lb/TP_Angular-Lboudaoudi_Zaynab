# TP Angular :

## Nom et Prenom     : Lboudaoudi Zaynab
## Num d'inscription : DCC0005/24

## Description du projet : 
C’est une appliquation Angular de e-commerce avec un système de rôles utilisateurs :

•	Visiteurs (Guest) peuvent s’inscrire ou se connecter.

•	Membres (Clients) peuvent consulter les produits, ajouter des produits au panier, passer des commandes et consulter l’historique de leurs commandes.

•	Admins peuvent gérer les utilisateurs, les produits (stock), et les commandes par l’ajout, la modification et la suppression. 


## Schéma d’architecture :
### Frontend (Angular)
a.	Les commposants :

Visiteur : signin + signup

Membres : catalog + product-details + cart + order-confirmation + order-list 

Admin : user-list + add-user + user-edit + product-list + add-product + edit-product + all-orders

menu : changable selon le type d'utilisateur

b.	Services : product.service.ts + user.service.ts + shopping-cart.service.ts + order-service.ts

c.	Guards : auth.guard.ts + role.guard.ts

### Backend (Express.js - API)
   
a.	Fichier principal : index.js

b.	Models (structure des données) : product.js + user.js + shoppingCartItem.js + shoppingCart.js + order.js

## Captures d'écran :
### Pour visiteur :
a.	Page de connexion :

![image](https://github.com/user-attachments/assets/ac0a30a2-6a0e-45fb-b371-6a90f6cbf2c4)

 
b.	Page d’inscription :

 ![image](https://github.com/user-attachments/assets/2856e2fa-d27b-4cd6-a151-3e530ed97040)


### Pour Membre (Client) :
a.	Le catalogue : 

![image](https://github.com/user-attachments/assets/1ada2ad9-9a2f-43ad-b301-fd69919f4849)

 
b.	Le filtrage des produits selon la catégorie : 

![image](https://github.com/user-attachments/assets/5fa7522d-f0b8-49fd-8b7d-78c485669f58)

 
c.	Détail du produit :

![image](https://github.com/user-attachments/assets/87ad4d70-93b7-4acd-a0c4-b6aec5e55df1)

 
d.	L’ajout au panier : 

![image](https://github.com/user-attachments/assets/e3c482c4-f064-4802-a003-9a747abba2bd)

 
e.	Le panier vide :

![image](https://github.com/user-attachments/assets/8edef1fc-82cd-48a4-84e8-ff8fc5c7d16b)

 
f.	Le panier contient des produits :

![image](https://github.com/user-attachments/assets/b278ba7b-331d-4843-8433-eb72b997609c)

![image](https://github.com/user-attachments/assets/decc04c0-1462-44b3-9ac2-8100cc2705a1)
  
g.	La validation du commande : 
 
![image](https://github.com/user-attachments/assets/e3fd6fe5-c826-4a66-90dd-1d5d1079da41)

![image](https://github.com/user-attachments/assets/7067dac1-41bc-43ee-90fc-2e1d9819f0c7)
 
h.	Liste du commandes vide : 

![image](https://github.com/user-attachments/assets/1fc228f0-c088-4d4a-9925-7c48da1be9dd)
 
i.	Liste du commandes contient des commandes :

 ![image](https://github.com/user-attachments/assets/ce30ab9d-4419-48b6-ad8b-540438b785c6)

j.	Détaille du commande :
 
 ![image](https://github.com/user-attachments/assets/cfe919ce-c8ec-4fc3-85cc-9c7303f88f01)

![image](https://github.com/user-attachments/assets/d5581741-128d-4f38-9dcf-474ea74a7173)

### Pour admin :
a.	La page d’accueil :

 ![image](https://github.com/user-attachments/assets/dddd7593-6c2f-4938-936a-916ec2a13042)

b.	Gestion des utilisateurs :

La liste des utilisateurs :

 ![image](https://github.com/user-attachments/assets/fe58c1d3-d67b-4027-a6ec-b25ca3d19206)

L’ajout d’un utilisateur :
 
![image](https://github.com/user-attachments/assets/21a79d2c-517a-4c63-a185-bf99161b4b11)

 ![image](https://github.com/user-attachments/assets/b983f3ad-cd46-4ab5-a6a9-75af2416c315)

La liste après l’ajoute deux utilisateur (un membre et l’autre admin) :

![image](https://github.com/user-attachments/assets/7d74d5e6-c08e-4724-9fc9-a88dfffdd2ea)
 
Login d’un utilisateur ajouté par admin :

•	Pour l’admin ajouté :

![image](https://github.com/user-attachments/assets/24f30fd1-c83e-4e00-b8fe-255075854057)
 
•	Pour le membre ajouté :

![image](https://github.com/user-attachments/assets/16e00c51-00b7-4843-82d5-60d3d4f73303)
 
La modification d’un utilisateur :
 
 ![image](https://github.com/user-attachments/assets/d423a985-0232-4261-9301-14f24efea437)

![image](https://github.com/user-attachments/assets/2e47d2e1-7f96-4abe-ab6f-f1e38cdb232b)

La liste des utilisateur après la modéfication d’age et email d’utilisateur (Affiche à la fin de la liste) :

![image](https://github.com/user-attachments/assets/c4c04369-efbe-457a-ab42-844ad6a9a0b0)
 
La suppression d’un utilisateur :

![image](https://github.com/user-attachments/assets/77b83358-91d3-4580-9c6b-6175f9fc8bd0)
 
La liste après la supression :

![image](https://github.com/user-attachments/assets/0d313dd7-9c2a-4e57-a777-e18b500dc3a2)
 
Login d’utilisateur supprimer : 

![image](https://github.com/user-attachments/assets/e61a36c8-c73a-4d2e-88c7-a365ce61ad26)
 
c.	Gestion des produits :

La liste des produits :

 ![image](https://github.com/user-attachments/assets/11f586a6-fc12-4725-9b91-20adbc4a5ad3)

 ![image](https://github.com/user-attachments/assets/46030754-fb00-4271-9777-d74f053e41a1)

L’ajout d’un produit:

 ![image](https://github.com/user-attachments/assets/b22822da-afdb-475d-a3ab-079de5213107)

 ![image](https://github.com/user-attachments/assets/9299b43b-85c9-448b-bf0c-9ec0ff23789c)

La liste après l’ajoute de deux produits :
 
 ![image](https://github.com/user-attachments/assets/fd1346af-f632-4ca6-a49e-ded0d25a0235)

![image](https://github.com/user-attachments/assets/bb2b7029-99c1-4135-96b6-24232ca778a3)

La modification d’un produit:
 
![image](https://github.com/user-attachments/assets/4d8af191-b382-4b2f-93b3-4b9a542846e4)

![image](https://github.com/user-attachments/assets/303e3d29-f729-4112-8c7d-3b5adec45769)
 
La liste des produit après la modéfication de quantité du stock :

![image](https://github.com/user-attachments/assets/d335c6b1-7e14-453c-9e96-37481be82d2c)
 
La suppression d’un produit :

![image](https://github.com/user-attachments/assets/c600b2dc-0011-4ddc-972f-992f0f303cb2)
 
La liste après la supression :
 
 ![image](https://github.com/user-attachments/assets/b41672d4-2a37-41a6-b77c-66b8af52705a)

![image](https://github.com/user-attachments/assets/adaf687c-cb0f-49d2-92f2-b0b7e95b7c38)

Le catalogue du client après les modification faire par admin :
 
 ![image](https://github.com/user-attachments/assets/12cc6c0b-41e5-45b6-a184-a7b539d0bd7a)

![image](https://github.com/user-attachments/assets/cb5c83b4-298f-4ab3-93a2-42417293aff6)

d.	La gestion des commandes :
La liste des commandes :

 ![image](https://github.com/user-attachments/assets/326fff56-1172-4beb-b05a-ae9b3ae1a444)

La validation d’une commande :

![image](https://github.com/user-attachments/assets/0a8b9e56-8048-4bf4-a710-ff3c5f8c1a91)
 
La liste des commandes du client après la validation :

![image](https://github.com/user-attachments/assets/321ba8dc-d2e0-4e40-b78d-0f3b09012380)


# TPAngularLboudaoudiZaynab

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
=======
