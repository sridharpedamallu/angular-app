import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ProjectImportsModule } from '../project-imports/project-imports.module';
import { CoursesComponent } from './courses/courses.component';
import { AdminLeftNavComponent } from './admin-left-nav/admin-left-nav.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FranchiseComponent } from './franchise/franchise.component';
import { AdminStudentComponent } from './admin-student/admin-student.component';
import { TopicsComponent } from './topics/topics.component';
import { SubTopicsComponent } from './sub-topics/sub-topics.component';
import { PracticeQuestionsComponent } from './practice-questions/practice-questions.component';
import { ExamQuestionsComponent } from './exam-questions/exam-questions.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    AdminComponent,
    CoursesComponent,
    AdminLeftNavComponent,
    AdminDashboardComponent,
    FranchiseComponent,
    AdminStudentComponent,
    TopicsComponent,
    SubTopicsComponent,
    PracticeQuestionsComponent,
    ExamQuestionsComponent,
    UsersComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ProjectImportsModule
  ]
})
export class AdminModule { }
