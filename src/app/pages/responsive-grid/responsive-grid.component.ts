import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsive-grid',
  templateUrl: './responsive-grid.component.html',
  styleUrls: ['./responsive-grid.component.scss']
})
export class ResponsiveGridComponent implements OnInit {

  listOfData = [
    { prefix: 'nzXs', MediaQuery: '<576px', Example: '[nzXs]="6"' },
    { prefix: 'nzSm', MediaQuery: '≥576px', Example: '[nzSm]="6"' },
    { prefix: 'nzMd', MediaQuery: '≥768px', Example: '[nzMd]="6"' },
    { prefix: 'nzLg', MediaQuery: '≥992px', Example: '[nzLg]="6"' },
    { prefix: 'nzXl', MediaQuery: '≥1200px', Example: '[nzXl]="6"' },
    { prefix: 'nzXXl', MediaQuery: '≥1600px', Example: '[nzXXl]="6"' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
