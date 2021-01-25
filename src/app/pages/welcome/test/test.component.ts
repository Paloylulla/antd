import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
})
export class TestComponent implements OnInit {
  isVisible = false;
  tplModalButtonLoading = false;
  isVisible2 = false;
  date = null;

  constructor(
    private router: Router,
    private modal: NzModalService,
    private localeService: BsLocaleService
  ) {}

  createTplModal(
    tplContent: TemplateRef<{}>,
    tplFooter: TemplateRef<{}>
  ): void {
    this.modal.create({
      nzContent: tplContent,
      nzFooter: tplFooter,
      nzMaskClosable: false,
      nzClosable: false,
      nzComponentParams: {
        value: 'Template Context',
      },
      nzOnOk: () => console.log('Click ok'),
    });
  }

  ngOnInit(): void {
    this.localeService.use('th-be');
  }

  goToItems() {
    this.router.navigate(['child-b']);
  }

  destroyTplModal(modelRef: NzModalRef): void {
    this.tplModalButtonLoading = true;
    setTimeout(() => {
      this.tplModalButtonLoading = false;
      modelRef.destroy();
      this.modal.confirm({
        nzTitle: 'Are you sure delete this task?',
        nzContent: '<b style="color: red;">Some descriptions</b>',
        nzOkText: 'Yes',
        nzOkType: 'primary',
        nzOkDanger: true,
        nzOnOk: () => console.log('OK'),
        nzCancelText: 'No',
        nzOnCancel: () => console.log('Cancel'),
      });
    }, 1000);
  }

  createCustomButtonModal() {}

  handleCancel(): void {
    this.isVisible = false;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel2(): void {
    this.isVisible2 = false;
  }

  handleOk2(): void {
    this.isVisible2 = false;
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
}
