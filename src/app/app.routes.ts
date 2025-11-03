import { Routes } from '@angular/router';
import { Layout } from './layout/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'client',
        loadChildren: () => import('./features/client/client-module').then((m) => m.ClientModule),
      },
      {
        path: 'invoice',
        loadChildren: () =>
          import('./features/invoice/invoice-module').then((m) => m.InvoiceModule),
      },
      {
        path: 'payment',
        loadChildren: () =>
          import('./features/payment/payment-module').then((m) => m.PaymentModule),
      },
      { path: '', redirectTo: 'client', pathMatch: 'full' },
    ],
  },
];
