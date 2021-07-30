import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  public personalDetails = {
    "name": "Esha Awasthi",
    "title": "I'm a Full Stack Developer",
    "image": "assets/images/thumbnail_esha.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
