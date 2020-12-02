import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { StudentComponent } from './student/student.component';
import { TutorComponent } from './tutor/tutor.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'student', component: StudentComponent },
  { path: 'tutor', component: TutorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
