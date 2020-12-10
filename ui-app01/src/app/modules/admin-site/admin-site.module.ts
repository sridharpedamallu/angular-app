import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSiteRoutingModule } from './admin-site-routing.module';
import { AdminSiteComponent } from './admin-site.component';
import { ChartModule } from 'primeng/chart';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminFranchiseComponent } from './admin-franchise/admin-franchise.component';

import { MenuModule } from 'primeng/menu';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InplaceModule } from 'primeng/inplace';
import { TimelineModule } from 'primeng/timeline';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AccordionModule } from 'primeng/accordion';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { TabViewModule } from 'primeng/tabview';

import { ManageFrachiseComponent } from './admin-franchise/manage-frachise/manage-frachise.component';
import { AdminFranchiseTimelineComponent } from './admin-franchise/admin-franchise-timeline/admin-franchise-timeline.component';


@NgModule({
  declarations: [
    AdminSiteComponent,
    AdminMenuComponent,
    AdminDashboardComponent,
    AdminFranchiseComponent,
    ManageFrachiseComponent,
    AdminFranchiseTimelineComponent],
  imports: [
    CommonModule,
    AdminSiteRoutingModule,
    ChartModule,
    MenuModule,
    SidebarModule,
    ButtonModule,
    InputTextareaModule,
    InputTextModule,
    InplaceModule,
    TimelineModule,
    ScrollPanelModule,
    AccordionModule,
    DynamicDialogModule,
    TabViewModule
  ]
})
export class AdminSiteModule { }
