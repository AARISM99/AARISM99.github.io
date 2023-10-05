import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GlobalConstants } from 'src/app/global/globalConstants';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss']
})
export class Page404Component implements OnInit {

  constants: GlobalConstants = new GlobalConstants();

  constructor(private translateService: TranslateService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if(params['lang']) {
        this.translateService.use(params['lang']);
      }
      else {
        this.translateService.use(this.constants._lang);
      }
    })
  }
}
