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
    {path: 'product-details/:id', component: ProductDetailsComponent, canActivate: [AuthGuard], title: 'Product details'}
];
