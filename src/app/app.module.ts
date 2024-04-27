import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ComponentComponent } from './component/component.component';
import { Covid19Component } from './covid19/covid19.component';
import { ThyroidComponent } from './thyroid/thyroid.component';
import { DiabetesComponent } from './diabetes/diabetes.component';
import { CovidComponent } from './covid/covid.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactusComponent,
    ComponentComponent,
    Covid19Component,
    ThyroidComponent,
    DiabetesComponent,
    CovidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
