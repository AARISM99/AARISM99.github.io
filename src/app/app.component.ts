import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GlobalConstants } from './global/globalConstants';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'icentrum';
  public constants: GlobalConstants = new GlobalConstants();

  constructor(private translateService: TranslateService, private activatedRoute: ActivatedRoute) {
    this.translateService.addLangs(this.constants._langs);
    this.translateService.setDefaultLang(this.constants._defaultLang);
    this.activatedRoute.queryParams.subscribe(params => {
      if(params['lang']) {
        if(this.constants._langs.includes(params['lang'])) {
          this.constants._lang = params['lang'];
          if(params['lang'] == 'ar') {
            this.constants._direction = 'rtl';
          }
          this.translateService.use(params['lang']);
        }
      }
      else {
        this.translateService.use(this.constants._lang);
      }
      // console.log(this.constants._lang);
    })
  }
}
