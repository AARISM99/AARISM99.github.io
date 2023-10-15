import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Time24to12Format } from '../pipes/time24to12.pipe';
import { AddZeroIfNbrLtTenFormat } from '../pipes/addZeroIfNbrLtTen.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LocaleDatePipe } from '../pipes/localedate.pipe';


@NgModule({
  declarations: [
    Time24to12Format,
    AddZeroIfNbrLtTenFormat,
    LocaleDatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Time24to12Format,
    AddZeroIfNbrLtTenFormat,
    LocaleDatePipe,
    TranslateModule,
    CarouselModule
  ]
})
export class SharedModule { }
