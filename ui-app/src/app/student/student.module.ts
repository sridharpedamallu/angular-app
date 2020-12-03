import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { ProjectImportsModule } from '../project-imports/project-imports.module';
import { MyClassesComponent } from './my-classes/my-classes.component';


@NgModule({
  declarations: [StudentComponent, MyCoursesComponent, MyClassesComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ProjectImportsModule
  ]
})
export class StudentModule { }
