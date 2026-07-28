import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Course {

  private courses = [

    {
      id:1,
      name:'Angular',
      code:'ANG101',
      credits:4
    },

    {
      id:2,
      name:'Java',
      code:'JAVA201',
      credits:3
    },

    {
      id:3,
      name:'Spring Boot',
      code:'SB301',
      credits:4
    }

  ];

  getCourses(){

    return this.courses;

  }

}