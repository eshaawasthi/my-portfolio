import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/json/personalDetails.json';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.less']
})
export class SkillsComponent implements OnInit {

  data: any = data.personalDetails;

  constructor() { }

  ngOnInit(): void {
  }
  getColor(i) {
    switch (i) {
      case 0:
        return { 'background-color': "#6c6ce5", 'color': "#fff" };
      case 1:
        return { 'background-color': "#f9d74c" };
      case 2:
        return { 'background-color': "#ff4c60", 'color': "#fff" };
    }
  }
}
