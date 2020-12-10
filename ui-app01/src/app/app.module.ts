import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoHeaderComponent } from './shared/logo-header/logo-header.component';
import { MenuHeaderComponent } from './shared/menu-header/menu-header.component';
import { GuestHomeComponent } from './guest-home/guest-home.component';

import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';
import { OverlayPanelModule } from 'primeng/overlaypanel';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeftNavComponent } from './shared/left-nav/left-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    LogoHeaderComponent,
    MenuHeaderComponent,
    GuestHomeComponent,
    LeftNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    TooltipModule,
    MenubarModule,
    ToolbarModule,
    OverlayPanelModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
