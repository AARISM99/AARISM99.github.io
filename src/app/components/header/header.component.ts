import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private translateService: TranslateService,
              private activatedRoute: ActivatedRoute){
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if(params['lang']) {
        this.translateService.use(params['lang']);
      }
    })
  }
}
