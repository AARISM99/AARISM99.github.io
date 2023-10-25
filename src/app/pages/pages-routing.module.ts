import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgendaComponent } from './agenda/agenda.component';
import { DonationComponent } from './donation/donation.component';
import { ContactComponent } from './contact/contact.component';
import { Page404Component } from './page404/page404.component';
import { PrayerTimesComponent } from './prayer-times/prayer-times.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { BlogComponent } from './blog/blog.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';
import { BlogsComponent } from './blogs/blogs.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'inscription',
    component: InscriptionComponent
  },
  {
    path: 'agenda',
    component: AgendaComponent
  },
  {
    path: 'activities',
    component: ActivitiesComponent
  },
  {
    path: 'activities/:title',
    component: ActivityDetailsComponent
  },
  {
    path: 'donation',
    component: DonationComponent
  },
  {
    path: 'prayer-times',
    component: PrayerTimesComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'blogs',
    component: BlogsComponent
  },
  {
    path: 'blogs/:title',
    component: BlogComponent
  },
  {
    path: 'page404',
    component: Page404Component
  },
  {
    path: '**',
    redirectTo: 'page404'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
