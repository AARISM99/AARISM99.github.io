import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ContactComponent } from './contact/contact.component';
import { DonationComponent } from './donation/donation.component';
import { Page404Component } from './page404/page404.component';
import { PrayerTimesComponent } from './prayer-times/prayer-times.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WidgetsModule } from '../widgets/widgets.module';
import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './news/news.component';
import { SharedModule } from '../shared/shared.module';
import { InscriptionComponent } from './inscription/inscription.component';
import { BlogComponent } from './blog/blog.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ProgramComponent } from './program/program.component';


@NgModule({
  declarations: [
    HomeComponent,
    AgendaComponent,
    ContactComponent,
    DonationComponent,
    Page404Component,
    PrayerTimesComponent,
    NewsComponent,
    InscriptionComponent,
    BlogComponent,
    ActivitiesComponent,
    ProgramComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    WidgetsModule,
    HttpClientModule,
    SharedModule
  ]
})
export class PagesModule { }
