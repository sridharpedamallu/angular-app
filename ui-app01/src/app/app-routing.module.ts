import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestHomeComponent } from './guest-home/guest-home.component';


const routes: Routes = [
  {
    path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin-site', loadChildren: () => import('./modules/admin-site/admin-site.module').then(m => m.AdminSiteModule)
  },
  {
    path: '', component: GuestHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
