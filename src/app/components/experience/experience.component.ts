import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/json/personalDetails.json';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.less']
})
export class ExperienceComponent implements OnInit {
  data: any = data.personalDetails;

  constructor() { }

  ngOnInit(): void {
  }

}
