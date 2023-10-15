import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GlobalConstants } from 'src/app/global/globalConstants';
import { KeyVal } from 'src/app/models/keyValue.model';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent {
  constants: GlobalConstants = new GlobalConstants();
  title: KeyVal = {
    nl: 'Activiteiten',
    en: 'Activities',
    ar: 'الأنشطة'
  }

  constructor(private translateService: TranslateService,
              private activatedRoute: ActivatedRoute){
  }

  ngOnInit(): void {
    // this.activatedRoute.queryParams.subscribe(params => {
    //   if(params['lang']) {
    //     this.constants._lang = params['lang'];
    //   }
    //   else {
    //     this.translateService.use(this.constants._lang);
    //   }
    // })
  }
}
