import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GlobalConstants } from 'src/app/global/globalConstants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public transLangs: string[] = [];
  constants: GlobalConstants = new GlobalConstants();

  constructor(private translateService: TranslateService,
              private activatedRoute: ActivatedRoute,
              private router: Router){
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if(params['lang']) {
        this.constants._lang = params['lang'];
        if(params['lang'] == "ar") {
          this.constants._direction = "rtl";
        }
        else {
          this.constants._direction = "ltr";
        }
      }
      this.translateService.use(this.constants._lang);
    })
    this.getTransLanguage();
  }

  setTransLanguage($event: any) {
    this.constants._lang = $event.target.value;
    if($event.target.value == "ar") {
      this.constants._direction = "rtl";
    }
    else {
      this.constants._direction = "ltr";
    }
    this.translateService.use($event.target.value);

    let urlTree = this.router.parseUrl(this.router.url);
    urlTree.queryParams = {};
    urlTree.fragment = null; // optional
    this.router.navigate([urlTree.toString()], { queryParams: {lang: this.constants._lang}})
    .then(() => {
      window.location.reload();
    });
  }

  getTransLanguage() {
    this.transLangs = [...this.translateService.getLangs()];
  }

  openSidebar() {
    if(document.getElementById("sidebar")?.classList.contains("visible")) {
      document.getElementById("sidebar")?.classList.remove("visible");
    }
    else {
      document.getElementById("sidebar")?.classList.add("visible");
    }
  }

  openLanguagesList() {
    document.getElementById("lang-list")?.classList.remove("hidden");
  }

  closeLanguagesList() {
    document.getElementById("lang-list")?.classList.add("hidden");
  }
}
