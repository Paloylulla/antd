import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/welcome',
  },
  {
    path: 'welcome',
    data: { customBreadcrumb: 'Home' },
    loadChildren: () =>
      import('./pages/welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path: 'table',
    data: { customBreadcrumb: 'table' },
    loadChildren: () =>
      import('./pages/table/table.module').then((m) => m.TableModule),
  },
  {
    path: 'responsive',
    data: { customBreadcrumb: 'responsive-grid' },
    loadChildren: () =>
      import('./pages/responsive-grid/responsive-grid.module').then((m) => m.ResponsiveGridModule),
  },
  {
    path: 'searchForm',
    data: { customBreadcrumb: 'searchForm' },
    loadChildren: () =>
      import('./pages/search-form/search-form.module').then((m) => m.SearchFormModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
