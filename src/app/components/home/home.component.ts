import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/json/personalDetails.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  data: any = data.personalDetails;

  constructor() { }

  ngOnInit(): void {
  }

}
