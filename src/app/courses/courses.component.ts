import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core'; 
 

@Component({
  selector: 'app-courses',
  template: `
  <h2>{{title}}</h2>
  <div>
  <ul>
  <li *ngFor="let course of courses">
  {{course}}
  </li>
  </ul>
  </div>
  <img [src]="imgUrl" height='100' width='200' /> <br>
<Br>
  <button class="btn btn-primary">Save</button>

  <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
  `
})
export class CoursesComponent {
  email = 'me@example.com';
title = 'List of courses';
imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/6/6e/London_Thames_Sunset_panorama_-_Feb_2008.jpg';
 courses;

 constructor(service: CourseService) {
  this.courses = service.getCourses();
 }
onKeyUp(emil) {
    console.log(this.email);
}
}
