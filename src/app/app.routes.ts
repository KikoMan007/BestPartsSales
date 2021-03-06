import { RouterModule, PreloadAllModules, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
    data: { title: 'Main' }
  },
  {
    path: 'main',
    component: MainComponent,
    data: { title: 'Main' }
  },
  {
    path: 'orders',
    component: OrdersComponent,
    data: { title: 'Orders' }
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/',
    data: { title: 'Route Not Found' }
  }
];

export const AppRouting = RouterModule.forRoot(appRoutes,
  {
    preloadingStrategy: PreloadAllModules,
    useHash: true,
    // enableTracing: true
  });
