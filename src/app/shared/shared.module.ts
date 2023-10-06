import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Time24to12Format } from '../pipes/time24to12.pipe';
import { AddZeroIfNbrLtTenFormat } from '../pipes/addZeroIfNbrLtTen.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    Time24to12Format,
    AddZeroIfNbrLtTenFormat
  ],
  imports: [
    // BrowserAnimationsModule,
    CommonModule
  ],
  exports: [
    // BrowserAnimationsModule,
    Time24to12Format,
    AddZeroIfNbrLtTenFormat,
    TranslateModule,
    CarouselModule
  ]
})
export class SharedModule { }
