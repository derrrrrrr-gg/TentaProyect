import { Routes } from '@angular/router';
import { Products } from './pages/products/products';

export const routes: Routes = [




  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'products',
    component: Products
  },

  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home').then((m) => m.Home),
  },
];
    

