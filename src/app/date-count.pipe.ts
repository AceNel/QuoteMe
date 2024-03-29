import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today: Date = new Date();
    let todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(value - todayWithNoTime)
    const secondsInADay = 86400; //60 seconds*60 minutes in an hour *24 hours

    var dateDifferenceSeconds = dateDifference * 0.001; //converts to seconds

    var dateCounter = Math.round(dateDifferenceSeconds / secondsInADay);//avoid decimal number of days ago

    if (dateCounter > 1) {
      return dateCounter;
    } else {
      return 0;
    }
  }
}

