import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { MocDataService } from 'src/app/service/moc-data.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  constructor(
    public route: ActivatedRoute,
    private router: Router,
    private mocDataService: MocDataService,
    private localeService: BsLocaleService
  ) {}
  selectedValue = null;
  value = 'test';
  test = new FormControl('A');
  date = new Date();
  isVisible = false;
  locale = 'th-be';
  // locales = listLocales();

  options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
              isLeaf: true,
            },
          ],
        },
        {
          value: 'ningbo',
          label: 'Ningbo',
          isLeaf: true,
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
              isLeaf: true,
            },
          ],
        },
      ],
    },
  ];

  ngOnInit() {
    this.test.patchValue('A');
    this.localeService.use(this.locale);
  }

  // applyLocale(pop: any) {
  //   this.localeService.use(this.locale);
  //   pop.hide();
  //   pop.show();
  // }
  formatter = (value: number) =>
    value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

  formatterBath = (value: number) => {
    const bath = value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    return `฿ ${bath}`;
  }

  parserBath = (value: string) => value.replace('฿ ', '');

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }



  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
}
