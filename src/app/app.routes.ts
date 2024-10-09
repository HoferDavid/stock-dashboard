import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InfoComponent } from './pages/info/info.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { ImprintComponent } from './pages/info/imprint/imprint.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'info',
    component: InfoComponent,
    children: [
      {
        path: 'imprint',
        component: ImprintComponent,
      },
    ],
  },
  {
    path: 'imprint',
    component: ImprintComponent,
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
  },
];
