import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GlobalConstants } from 'src/app/global/globalConstants';
import { KeyVal } from 'src/app/models/keyValue.model';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent  implements OnInit {

  constants: GlobalConstants = new GlobalConstants();
  title: KeyVal = {
    nl: 'Agenda',
    en: 'Agenda',
    ar: 'جدول الأعمال'
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
