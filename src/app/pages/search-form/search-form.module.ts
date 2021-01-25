import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFormComponent } from './search-form.component';
import { SearchFormRoutingModule } from './search-form-routing.module';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ResponsiveGridRoutingModule } from '../responsive-grid/responsive-grid-routing.module';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzInputModule } from 'ng-zorro-antd/input';
@NgModule({
  declarations: [SearchFormComponent],
  imports: [
    CommonModule,
    SearchFormRoutingModule,
    NzSelectModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    ResponsiveGridRoutingModule,
    NzSpinModule,
    NzTableModule,
    NzPopconfirmModule,
    NzInputModule
  ]
})
export class SearchFormModule { }
