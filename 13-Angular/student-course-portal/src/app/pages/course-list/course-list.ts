import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Store } from '@ngrx/store';

import { CourseCard } from '../../components/course-card/course-card';
import { CourseFilterPipe } from '../../pipes/course-filter-pipe';

import { Course } from '../../services/course';
import { Api } from '../../services/api';

import { loadCourses } from '../../store/course.actions';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CourseCard,
    CourseFilterPipe
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  searchText='';

  courses:any=[];

  users:any=[];

  constructor(

    private courseService:Course,

    private api:Api,

    private store:Store

  ){}

  ngOnInit(){

    this.store.dispatch(loadCourses());

    this.courses=this.courseService.getCourses();

    this.api.getUsers().subscribe(data=>{

      this.users=data as any[];

    });

  }

}