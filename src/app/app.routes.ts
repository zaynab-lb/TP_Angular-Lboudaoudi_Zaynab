import { Routes } from '@angular/router';
import { CatalogComponent } from '../catalog-component/catalog-component.component';
import { ProductDetailsComponent } from '../product-details-component/product-details-component.component';
import { HomeComponent } from '../home/home.component';
import { CartComponent } from '../cart/cart.component';
import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { RoleGuard } from './guards/role/role.guard';
import { UserType } from '../models/User';
import { RenderMode } from '@angular/ssr';
import { UserListComponent } from '../user-list/user-list.component';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { OrderConfirmationComponent } from '../order-confirmation/order-confirmation.component';
import { OrderListComponent } from '../order-list/order-list.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { AllOrdersComponent } from '../all-orders/all-orders.component';

export const routes: Routes = 
[
    //{path : 'home', component : HomeComponent, title: 'My Home'},
    {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: UserType.Admin },
    title: 'Admin Home'
  },
    //{path : 'catalog', component : CatalogComponent, title: 'My Catalog products'},
    {
    path: 'catalog',
    component: CatalogComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: UserType.Member },
    title: 'Catalog'
  },
    //{path : 'product-details', component : ProductDetailsComponent, title: 'Product details'},
    //{path : 'cart', component : CartComponent, title: 'My cart'},
    {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuard],
    title: 'Cart'
  },
    //{path : 'signin', component : SigninComponent, title: 'My signin page'},
    //{path: 'signup', component: SignupComponent, title: 'Inscription' },
    { path: 'signin', component: SigninComponent, title: 'Connexion' },
  { path: 'signup', component: SignupComponent, title: 'Inscription' },
    {path : '', redirectTo : '/signin', pathMatch : 'full'},
    {path: 'product-details/:id', component: ProductDetailsComponent, canActivate: [AuthGuard], title: 'Product details'},

    {
  path: 'users',
  component: UserListComponent,
  canActivate: [AuthGuard, RoleGuard],
  data: { role: UserType.Admin },
  title: 'Liste des utilisateurs'
},
{
  path: 'edit-user/:id',
  component: UserEditComponent,
  canActivate: [AuthGuard, RoleGuard],
  data: { role: UserType.Admin },
  title: 'Modifier utilisateur'
},

{
  path: 'add-user',
  loadComponent: () => import('../add-user/add-user.component').then(c => c.AddUserComponent),
  canActivate: [AuthGuard, RoleGuard],
  data: { role: UserType.Admin },
  title: 'Ajouter utilisateur'
},

{
  path: 'order-confirmation/:id',
  component: OrderConfirmationComponent,
  canActivate: [AuthGuard],
  title: 'Confirmation de commande'
},

{
  path: 'my-orders',
  component: OrderListComponent,
  canActivate: [AuthGuard],
  title: 'Mes Commandes'
},

{
  path: 'products',
  component: ProductListComponent,
  canActivate: [AuthGuard, RoleGuard],
  data: { role: UserType.Admin },
  title: 'Liste des produits'
},

{
  path: 'add-product',
 component: AddProductComponent,
  canActivate: [AuthGuard, RoleGuard],
  data: { role: UserType.Admin },
  title: 'Ajouter produit'
},

{
  path: 'edit-product/:id',
  component: EditProductComponent,
  canActivate: [AuthGuard, RoleGuard],
  data: { role: UserType.Admin },
  title: 'Modifier produit'
},

{
  path: 'all-orders',
  component: AllOrdersComponent,
  canActivate: [AuthGuard, RoleGuard],
  data: { role: UserType.Admin },
  title: 'Toutes les commandes'
}

];
