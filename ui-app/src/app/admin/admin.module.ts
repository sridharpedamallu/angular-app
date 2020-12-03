import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ProjectImportsModule } from '../project-imports/project-imports.module';
import { CoursesComponent } from './courses/courses.component';
import { AdminLeftNavComponent } from './admin-left-nav/admin-left-nav.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [AdminComponent, CoursesComponent, AdminLeftNavComponent, AdminDashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ProjectImportsModule
  ]
})
export class AdminModule { }
