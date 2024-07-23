import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    data:any[]=[];

    constructor()
    {
      this.data=[{
          "name":"sam",
          "department":"Computer Science",
          "JobExperience":"1+Years"
        },
        {
          "name":"Ajay",
          "department":"Electronics",
          "JobExperience":"1+Years"
        },
        {
          "name":"Prajapathy",
          "department":"Civil Engineer",
          "JobExperience":"1+Years"
        }
      ];
    }
  

 
}
