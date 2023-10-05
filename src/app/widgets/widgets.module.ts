import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrayerTimeCalendarComponent } from './prayer-time-calendar/prayer-time-calendar.component';
import { AgendaCalendarComponent } from './agenda-calendar/agenda-calendar.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PrayerTimeCalendarComponent,
    AgendaCalendarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    PrayerTimeCalendarComponent,
    AgendaCalendarComponent
  ]
})
export class WidgetsModule { }
