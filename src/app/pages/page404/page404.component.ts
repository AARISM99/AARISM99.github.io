import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/global/globalConstants';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss']
})
export class Page404Component implements OnInit {

  constants: GlobalConstants = new GlobalConstants();

  constructor() {}

  ngOnInit() {
  }
}
