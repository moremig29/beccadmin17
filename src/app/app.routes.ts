import { Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { DashboardComponent } from './layout/pages/dashboard/dashboard.component';
import { HomeComponent } from './layout/components/home/home.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'usuarios',
        children: [
          {
            path: '',
            loadComponent: () => import('./users/pages/registrados/registrados.component')
          },
          {
            path: 'registrar',
            loadComponent: () => import('./users/pages/registrar/registrar.component')
          },
        ]
      },
      {
        path: 'empresas',
        children: [
          {
            path: '',
            loadComponent: () => import('./empresas/pages/empresas-list/empresas-list.component')
          }
        ]
      },
      {
        path: 'usuarios-becca',
        children: [
          {
            path: 'activos',
            loadComponent: () => import('./clients/pages/licenciaVigente/licenciaVigente.component')
          },
          {
            path: 'vencidos',
            loadComponent: () => import('./clients/pages/licenciaCaducada/licenciaCaducada.component')
          },
          {
            path: 'licencias',
            loadComponent: () => import('./clients/pages/licenciaAdquirida/licenciaAdquirida.component')
          },
          {
            path: 'licencias-free',
            loadComponent: () => import('./clients/pages/licenciaFree/licenciaFree.component')
          },
          {
            path: 'firmas',
            loadComponent: () => import('./clients/pages/firmas/firmas.component')
          },
        ]
      },
      {
        path: 'dispositivos',
        children: [
          {
            path: 'asignar',
            loadComponent: () => import('./dispositivos/pages/asignar/asignar.component')
          },
          {
            path: 'disponibles',
            loadComponent: () => import('./dispositivos/pages/disponibles/disponibles.component')
          },
          {
            path: 'asignados',
            loadComponent: () => import('./dispositivos/pages/asignados/asignados.component')
          }
        ]
      },
      {
        path: 'logs',
        children: [
          {
            path: 'errores',
            loadComponent: () => import('./logs/pages/errores/errores.component')
          },
          {
            path: 'transacciones',
            loadComponent: () => import('./logs/pages/transacciones/transacciones.component')
          },
        ]
      },
    ]
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  }
];
