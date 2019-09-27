import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @ViewChild("infoElm", { static: false }) infoElm: ElementRef<any>;
  info = "";
  notes = [
    // { info: 'note1' },
    // { info: 'note2' }
  ];
  day = "";
  month = "";
  date = null;
  constructor() { }


  ngOnInit() {

  }

  // ngDoCheck(){
  //   console.log(this.info);
  // }

  addNote(info: string) {
    console.log(info);
    let obj = { info: info };
    console.log(obj);
    this.notes.push(obj);
    this.info = '';
    this.infoElm.nativeElement.focus();

    // console.log(this.notes);
    // this.newNote = this.notes.push("{info: abc}");
    // console.log(this.newNote);


  }

  deleteNote(index) {
    console.log(index);
    this.notes.splice(index, 1);
    // console.log(this.notes);
    // this.delNote = this.notes.splice(2, 1);
    // console.log(this.delNote);
  }
  getDate(event) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    console.log(event);
    let fullDate = new Date(event);
    let daynum = fullDate.getDay();
    let monthnum = fullDate.getMonth();
    let date = fullDate.getDate();
    // console.log(day, month, date);

    console.log(monthNames[monthnum]);
    console.log(dayNames[daynum]);
    console.log(date);
    this.day = dayNames[daynum];
    this.month = monthNames[monthnum];
    this.date = date + (date % 10 == 1 && date != 11 ? 'st' : date % 10 == 2 && date != 12 ? 'nd' : date % 10 == 3 && date != 13 ?'rd' : 'th');

  }

}
