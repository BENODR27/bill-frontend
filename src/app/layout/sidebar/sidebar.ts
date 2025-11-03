import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  navLinks = [
    { path: '/client', label: 'Clients', icon: '👥' },
    { path: '/invoice', label: 'Invoices', icon: '🧾' },
    { path: '/payment', label: 'Payments', icon: '💳' },
    { path: '/reports', label: 'Reports', icon: '📊' },
  ];
}
