import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';
import { Layout } from './layout/layout';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [Header, Sidebar, Layout],
  imports: [CommonModule,RouterModule],
})
export class LayoutModule {}
