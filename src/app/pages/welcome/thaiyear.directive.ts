import { Directive } from '@angular/core';
import { NzCalendarComponent, NzCalendarHeaderComponent } from 'ng-zorro-antd/calendar';

@Directive({
  selector: '[appThaiyear]'
})
export class ThaiyearDirective {
  year = new Date();
  constructor(private calendar: NzCalendarHeaderComponent) {
    const start = 2553;
    const end = 2563;
    this.calendar.updateYear = (year) => {
      for (let i = start; i < end; i++) {
        this.calendar.years.push({ label: `${i}`, value: i });
      }
      console.log(year);

    };
    // this.calendar.updateYear(2563);
  }

}
