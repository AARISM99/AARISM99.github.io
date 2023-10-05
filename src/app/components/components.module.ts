import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { SharedModule } from '../shared/shared.module';
import { TapToTopComponent } from './tap-to-top/tap-to-top.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    SidebarComponent,
    TapToTopComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    BreadcrumbComponent,
    FooterComponent,
    SidebarComponent,
    TapToTopComponent
  ]
})
export class ComponentsModule { }
