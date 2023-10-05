import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GlobalConstants } from './global/globalConstants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'icentrum';
  public constants: GlobalConstants = new GlobalConstants();

  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(['nl','en','ar']);
    this.translateService.setDefaultLang(this.constants._defaultLang);
  }
}
