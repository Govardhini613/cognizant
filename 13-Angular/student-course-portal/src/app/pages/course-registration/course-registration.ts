import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-course-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-registration.html',
  styleUrl: './course-registration.css'
})
export class CourseRegistration {

  student = {
    name: '',
    email: '',
    course: ''
  };

  register() {
    alert('Registration Successful!');
    console.log(this.student);
  }

}