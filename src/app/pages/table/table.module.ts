import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { TableRoutingModule } from './table-routing.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    NzTableModule,
    TableRoutingModule,
    NzLayoutModule,
    NzPaginationModule
  ]
})
export class TableModule { }
