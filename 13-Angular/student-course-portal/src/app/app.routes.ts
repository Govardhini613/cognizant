import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { CourseList } from './pages/course-list/course-list';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [

  {
    path:'',
    component:Home
  },

  {
    path:'courses',
    component:CourseList
  },

  {
    path:'about',
    component:About
  },

  {
    path:'contact',
    component:Contact
  },

  {
    path:'**',
    redirectTo:''
  }

];