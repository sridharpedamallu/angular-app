import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentComponent } from './student.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { MyClassesComponent } from './my-classes/my-classes.component';

const routes: Routes = [
  { path: '', component: StudentComponent },
  { path: 'my-courses', component: MyCoursesComponent },
  { path: 'my-classes', component: MyClassesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
