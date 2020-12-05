import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { CoursesComponent } from './courses/courses.component';
import { FranchiseComponent } from './franchise/franchise.component';
import { AdminStudentComponent } from './admin-student/admin-student.component';
import { TopicsComponent } from './topics/topics.component';
import { SubTopicsComponent } from './sub-topics/sub-topics.component';
import { PracticeQuestionsComponent } from './practice-questions/practice-questions.component';
import { ExamQuestionsComponent } from './exam-questions/exam-questions.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'franchise', component: FranchiseComponent },
  { path: 'admin-student', component: AdminStudentComponent },
  { path: 'topics', component: TopicsComponent },
  { path: 'sub-topics', component: SubTopicsComponent },
  { path: 'practice-questions', component: PracticeQuestionsComponent },
  { path: 'exam-questions', component: ExamQuestionsComponent },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
