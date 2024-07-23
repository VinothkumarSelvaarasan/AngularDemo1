import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentRecordsComponent } from './componentFolder/student-records/student-records.component';

const routes: Routes = [
  {path:'register',component:StudentRecordsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
