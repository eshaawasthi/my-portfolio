import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/json/personalDetails.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements OnInit {
  data: any = data.personalDetails;
  constructor() { }

  ngOnInit(): void {
  }
  getColor(i?) {
    return { 'color': this.getRandomColor() };
  }
  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}
