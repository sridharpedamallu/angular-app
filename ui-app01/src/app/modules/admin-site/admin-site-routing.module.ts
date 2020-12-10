import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminSiteComponent } from './admin-site.component';
import { AdminFranchiseComponent } from './admin-franchise/admin-franchise.component';

const routes: Routes = [
  { path: '', component: AdminSiteComponent },
  { path: 'admin-franchise', component: AdminFranchiseComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSiteRoutingModule { }
