import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResponsiveGridComponent } from './responsive-grid.component';

const routes: Routes = [
  {
    path: '',
    component: ResponsiveGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResponsiveGridRoutingModule {}
