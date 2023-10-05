import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GlobalConstants } from 'src/app/global/globalConstants';
import { KeyVal } from 'src/app/models/keyValue.model';
import { News } from 'src/app/models/news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constants: GlobalConstants = new GlobalConstants();
  news!: News;
  lang: string = '';
  title: KeyVal = {
    nl: 'Nieuws',
    en: 'News',
    ar: 'أخبار'
  }

  constructor(private translateService: TranslateService,
    private activatedRoute: ActivatedRoute){
  }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(params => {
      if(params['lang']) {
        this.constants._lang = params['lang'];
      }
      else {
        this.translateService.use(this.constants._lang);
      }
    })
  }
}
