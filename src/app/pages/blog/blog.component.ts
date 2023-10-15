import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GlobalConstants } from 'src/app/global/globalConstants';
import { KeyVal } from 'src/app/models/keyValue.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  constants: GlobalConstants = new GlobalConstants();
  title: KeyVal = {
    nl: 'Bloggen',
    en: 'Blog',
    ar: 'مدونة'
  }

  constructor(private translateService: TranslateService,
              private activatedRoute: ActivatedRoute){
  }

  ngOnInit(): void {

    // this.activatedRoute.params.subscribe(params => {
    //   console.log(params);
    // });

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
