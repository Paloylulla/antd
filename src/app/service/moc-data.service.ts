import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { AirlineModel, DataModel, DataTestModel } from '../model/mockupModel';
import { distinct, filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MocDataService {
  // randomUserUrl = 'assets/data/dataTest.json';
  passengerUrl = 'https://api.instantwebtools.net/v1/passenger';
  allAirlinesUrl = 'https://api.instantwebtools.net/v1/airlines';
  constructor(private http: HttpClient) {}

  // getDataTest() {
  //   return this.http.get('assets/data/dataTest.json');
  // }

  getPassengerLazy(pageIndex: number, pageSize: number): Observable<any> {
    const params = new HttpParams()
      .append('page', `${pageIndex}`)
      .append('size', `${pageSize}`);
    return this.http.get<any>(`${this.passengerUrl}`, { params });
  }

  getAllPassenger(): Observable<any> {
    return this.http.get<any>(`${this.passengerUrl}`);
  }

  getAllAirlines() {
    return this.http.get<AirlineModel[]>(`${this.allAirlinesUrl}`)
    .pipe(map((list: AirlineModel[]) => {
      return list.filter(val => val.id);
    }));
  }

  getPassengerUrl(
    pageIndex: number,
    pageSize: number,
  ): Observable<any> {
    const params = new HttpParams()
      .append('page', `${pageIndex}`)
      .append('size', `${pageSize}`);
    return this.http.get<any>(`${this.passengerUrl}`, { params })
    .pipe(map((list: DataTestModel) => {
      return list.data.map((dataList: DataModel) => {
        return {value: `${dataList._id}`, label: `${dataList.name}`};
      });
    }));
  }

  getAirlinesById(id: number) {
    return this.http.get<AirlineModel>(`${this.allAirlinesUrl}/${id}`);
  }
  // getAirlinesList(pageIndex: number, pageSize: number): Observable<any> {
  //   const params = new HttpParams()
  //     .append('page', `${pageIndex}`)
  //     .append('size', `${pageSize}`);
  //   return this.http
  //     .get<any>(`${this.allAirlinesUrl}`, { params })
  //     .pipe(
  //       map((list: AirlineModel[]) => {
  //         return list.map((dataList: AirlineModel) => {
  //           return { value: `${dataList.id}`, label: `${dataList.name}` };
  //         });
  //       })
  //     );
  // }
}
