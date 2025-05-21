import { Routes } from '@angular/router';
import { CatalogComponent } from '../catalog-component/catalog-component.component';
import { ProductDetailsComponent } from '../product-details-component/product-details-component.component';
import { HomeComponent } from '../home/home.component';
import { CartComponent } from '../cart/cart.component';
import { SigninComponent } from '../signin/signin.component';

export const routes: Routes = 
[
    {path : 'home', component : HomeComponent, title: 'My Home'},
    {path : 'catalog', component : CatalogComponent, title: 'My Catalog products'},
    //{path : 'product-details', component : ProductDetailsComponent, title: 'Product details'},
    {path : 'cart', component : CartComponent, title: 'My cart'},
    {path : 'signin', component : SigninComponent, title: 'My signin page'},
    {path : '', redirectTo : '/catalog', pathMatch : 'full'},
    {path: 'product-details/:id', component: ProductDetailsComponent, title: 'Product details'}

    /*{
    path: 'product-details/:id',
    component: ProductDetailsComponent,
    title: 'Product details',
    // Cette propriété permet à Angular de pré-rendre les pages pour chaque ID listé
    data: {
      prerender: true,
      getPrerenderParams: () => {
        return [
          { id: 1 },
          { id: 2 },
          { id: 3 },
          { id: 4 },
          { id: 5 }
        ];
      }
    }
  }*/

];
