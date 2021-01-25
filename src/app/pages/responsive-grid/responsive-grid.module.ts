import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveGridComponent } from './responsive-grid.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ResponsiveGridRoutingModule } from './responsive-grid-routing.module';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  declarations: [ResponsiveGridComponent],
  imports: [
    CommonModule,
    NzTableModule,
    NzGridModule,
    ResponsiveGridRoutingModule,
    NzInputModule
  ]
})
export class ResponsiveGridModule { }
