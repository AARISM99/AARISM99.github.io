import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/global/globalConstants';


@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.scss']
})
export class UnderConstructionComponent {
  constants: GlobalConstants = new GlobalConstants();

  constructor() {}

  ngOnInit() {
  }
}
