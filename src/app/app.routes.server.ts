import { RenderMode, ServerRoute } from '@angular/ssr';
import { AuthGuard } from './guards/auth/auth.guard';
import { ProductDetailsComponent } from '../product-details-component/product-details-component.component';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'product-details/:id',
    renderMode: RenderMode.Server
  },
  {
    path: 'edit-user/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: 'order-confirmation/:id',
    renderMode: RenderMode.Server,
  }
];
