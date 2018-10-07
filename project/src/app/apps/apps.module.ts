import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule, MatInputModule, MatToolbarModule, MatIconModule,
  MatCardModule, MatTabsModule, MatGridListModule, MatDialogContent, MatDialogModule, MatDialogClose, MatDialogActions, MatDialogTitle, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MAT_DATE_LOCALE, MatExpansionModule
} from '@angular/material';

import 'hammerjs';
import { Routes, RouterModule } from '@angular/router';
import { AppsComponent } from './apps.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FastNotesComponent } from './fast-notes/fast-notes.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NewEventComponent } from './calendar/new-event/new-event.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const route: Routes = [
  {
    path: 'apps', component: AppsComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'fast-notes', component: FastNotesComponent },
      { path: 'calendar', component: CalendarComponent }
    ]
  }
]

@NgModule({
  declarations: [
    AppsComponent,
    HomeComponent,
    FastNotesComponent,
    CalendarComponent,
    NewEventComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forChild(route),
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    CommonModule,
    MatTabsModule,
    FlexLayoutModule,
    MatGridListModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    HttpClientModule
  ],
  exports: [
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}
  ],
  bootstrap: [],
  entryComponents: [NewEventComponent]
})
export class AppsModule { }
