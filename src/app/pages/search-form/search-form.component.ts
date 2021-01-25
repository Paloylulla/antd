import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { MocDataService } from 'src/app/service/moc-data.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AirlineModel } from '@model/mockupModel';
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  optionList: { value: number; label: string }[] = [];
  pageNumber = 1;
  searchResults: AirlineModel[] = [];
  loading = false;
  isLoading = false;
  validateForm!: FormGroup;
  editCache: { [key: string]: { edit: boolean; data: AirlineModel } } = {};
  listOfOption2: { label: string; value: number }[] = [];
  listOfOption = [
    { label: 'Jack', value: 'jack' },
    { label: 'Lucy', value: 'lucy' },
    { label: 'disabled', value: 'disabled', disabled: true },
  ];

  constructor(private mocDataService: MocDataService) {}

  ngOnInit(): void {
    this.loadMore();
    // this.mocDataService.test().subscribe(val => console.log(val));

    this.mocDataService.getAllAirlines().subscribe((val) => {
      val.forEach((value) => {
        this.listOfOption2.push({ label: value.name, value: value.id });
      });
      this.loading = false;
    });

    this.validateForm = new FormGroup({
      searchId1: new FormControl(null, Validators.required),
      searchId2: new FormControl(null, Validators.required),
      searchId3: new FormControl(null, Validators.required),
    });


  }

  airlinesChange(value: number): void {
    this.validateForm.get('')?.setValue(value);
  }

  submitForm(): void {
    this.mocDataService
      .getAirlinesById(this.validateForm.get('searchId1')?.value)
      .subscribe((val) => {
        this.searchResults = [ val ];
        this.updateEditCache();
      });
    console.log(this.searchResults);
    // for (const i in this.validateForm.controls) {
    //   this.validateForm.controls[i].markAsDirty();
    //   this.validateForm.controls[i].updateValueAndValidity();
    // }
  }

  loadMore(): void {
    this.isLoading = true;
    this.mocDataService
      .getPassengerUrl(this.pageNumber, 10)
      .subscribe((data) => {
        console.log(data);

        this.optionList = [...this.optionList, ...data] as any;
        this.isLoading = false;
        this.pageNumber += 1;
      });
  }

  startEdit(id: number): void {
    this.editCache[id].edit = true;
  }

  saveEdit(id: number): void {
    const index = this.searchResults.findIndex(item => item.id === id);
    Object.assign(this.searchResults[index], this.editCache[id].data);
    this.editCache[id].edit = false;
  }

  confirm(id: number): void {
    const index = this.searchResults.findIndex(item => item.id === id);
    console.log('index: ', index);

    this.editCache[id] = {
      data: { ...this.searchResults[index] },
      edit: false
    };


    // this.nzMessageService.info('click confirm');
  }

  cancel(): void {
    // this.nzMessageService.info('click cancel');
  }

  updateEditCache(): void {
    this.searchResults.forEach(item => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }
      };
    });
    console.log(this.editCache);
  }



}
