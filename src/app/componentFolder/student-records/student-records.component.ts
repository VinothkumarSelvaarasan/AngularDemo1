import { Component } from '@angular/core';
import { StudentRecords } from '../../model/student-records';

@Component({
  selector: 'app-student-records',
  templateUrl: './student-records.component.html',
  styleUrl: './student-records.component.css'
})
export class StudentRecordsComponent {
  student:any=StudentRecords;
  constructor()
  {
    this.student=new StudentRecords;
    this.student.studentName="Vedanthi";
    this.student.age=16;
    this.student.marks=97;
  }
}
