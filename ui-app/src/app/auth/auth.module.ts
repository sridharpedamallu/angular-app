import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { ProjectImportsModule } from '../project-imports/project-imports.module';
import { StudentComponent } from './student/student.component';
import { TutorComponent } from './tutor/tutor.component';

@NgModule({
  declarations: [AuthComponent, StudentComponent, TutorComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ProjectImportsModule
  ]
})
export class AuthModule { }
