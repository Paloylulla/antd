import { Component, OnInit } from '@angular/core';
import { AirlineModel, DataTestModel } from '@model/mockupModel';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { MocDataService } from 'src/app/service/moc-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  pageSize = 10;
  pageIndex = 1;
  DataMoc: AirlineModel[] = [];
  total = 1;
  loading = true;
  // listOfCurrentPageData: Data[] = [];
  setOfCheckedId = new Set<number>();
  checked = false;
  indeterminate = false;

  constructor(private mocDataService: MocDataService) {}

  listOfSelection = [
    {
      text: 'Select All Row',
      onSelect: () => {
        this.onAllChecked(true);
      },
    },
    {
      text: 'Select Odd Row',
      onSelect: () => {
        this.DataMoc.forEach((data, index) =>
          this.updateCheckedSet(data.id, index % 2 !== 0)
        );
        this.refreshCheckedStatus();
      },
    },
    {
      text: 'Select Even Row',
      onSelect: () => {
        this.DataMoc.forEach((data, index) =>
          this.updateCheckedSet(data.id, index % 2 === 0)
        );
        this.refreshCheckedStatus();
      },
    },
  ];

  ngOnInit(): void {
    this.loadDataFromServer(this.pageIndex, this.pageSize);
  }

  refreshCheckedStatus(): void {
    const listOfEnabledData = this.DataMoc.filter(({ disabled }) => !disabled);
    this.checked = listOfEnabledData.every(({ id }) =>
      this.setOfCheckedId.has(id)
    );
    this.indeterminate =
      listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) &&
      !this.checked;
  }

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
      console.log('all id check: ', this.setOfCheckedId);

    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onAllChecked(value: boolean): void {
    this.DataMoc.forEach((item) => this.updateCheckedSet(item.id, value));
    this.refreshCheckedStatus();
  }

  onQueryParamsChange(params: NzTableQueryParams): void {
    console.log(params);
    const { pageSize, pageIndex, sort, filter } = params;
    this.loadDataFromServer(pageIndex, pageSize);
  }

  loadDataFromServer(pageIndex: number, pageSize: number): void {
    this.loading = true;
    this.mocDataService
      .getPassengerLazy(pageIndex, pageSize)
      .subscribe((data: DataTestModel) => {
        console.log(data);
        this.loading = false;
        this.total = data.totalPassengers;
        this.DataMoc = [];
        data.data.forEach((val) => {
          this.DataMoc.push(val.airline);
          // this.updateCheckedSet(val.airline.id, true);
        });
      });
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

}
