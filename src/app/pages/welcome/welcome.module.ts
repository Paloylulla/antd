import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import {
  NzCalendarComponent,
  NzCalendarHeaderComponent,
  NzCalendarModule,
} from 'ng-zorro-antd/calendar';
import { CommonModule } from '@angular/common';
import { ThaiyearDirective } from './thaiyear.directive';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@NgModule({
  imports: [
    WelcomeRoutingModule,
    NzCalendarModule,
    CommonModule,
    NzDatePickerModule,
    NzInputModule,
    NzSelectModule,
    NzCascaderModule,
    FormsModule,
    NzBreadCrumbModule,
    NzModalModule,
    NzButtonModule,
    NzDropDownModule,
    NzCheckboxModule,
    ReactiveFormsModule,
    NzRadioModule,
    NzInputNumberModule,
    NzIconModule,
    BsDatepickerModule.forRoot(),
  ],
  declarations: [WelcomeComponent, ThaiyearDirective, TestComponent, Test2Component],
  exports: [WelcomeComponent],
  providers: [NzCalendarComponent, NzCalendarHeaderComponent],
})
export class WelcomeModule {}
