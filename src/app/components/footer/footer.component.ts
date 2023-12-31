import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GlobalConstants } from 'src/app/global/globalConstants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constants: GlobalConstants = new GlobalConstants();

  constructor(private translateService: TranslateService,
              private activatedRoute: ActivatedRoute){
  }

  ngOnInit(): void {
    // this.activatedRoute.queryParams.subscribe(params => {
    //   if(params['lang']) {
    //     if(params['lang'] == "ar") {
    //       this.constants._direction = "rtl";
    //     }
    //     else {
    //       this.constants._direction = "ltr";
    //     }
    //     this.constants._lang = params['lang'];
    //   }
    //   this.translateService.use(this.constants._lang);
    // })
  }
}
