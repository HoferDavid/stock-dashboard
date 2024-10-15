import { Routes } from '@angular/router';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { InfoComponent } from './components/pages/info/info.component';
import { FavoritesComponent } from './components/pages/favorites/favorites.component';
import { ImprintComponent } from './components/pages/info/imprint/imprint.component';
import { OverviewComponent } from './components/pages/overview/overview.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'overview',
  },
  {
    path: 'overview',
    component: OverviewComponent,
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
