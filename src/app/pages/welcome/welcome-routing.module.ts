import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'child-a', // child route path
    component: TestComponent, // child route component that the router renders
    data: {
      customBreadcrumb: 'child-a',
    },
    children: [
      {
        path: 'child-b', // child route path
        component: Test2Component, // child route component that the router renders
        data: {
          customBreadcrumb: 'child-b',
        }
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeRoutingModule {}
