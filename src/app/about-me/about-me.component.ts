import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.less']
})
export class AboutMeComponent implements OnInit {
  public personalDetails = {
    "image": "assets/images/thumbnail_esha.jpg",
    "aboutMe": "I am Esha Awasthi, Full Stack Developer from Pune, India. I have rich experience in web application development and customization, also I am good at Agile.",
    "skillList": [
      {
        "skillName": "Angular",
        "percentage": "80",
        "progressBarColor": "#ffd15c"
      },
      {
        "skillName": "HTML5",
        "percentage": "100",
        "progressBarColor": "#ff4c60"
      },
      {
        "skillName": "CSS3",
        "percentage": "90",
        "progressBarColor": "#6c6ce5"
      }
    ]
  }

  constructor() { }
  ngOnInit(): void {
  }


}
