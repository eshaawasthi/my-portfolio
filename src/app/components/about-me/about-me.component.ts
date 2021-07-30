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
    ],
    "metricStats": [
      {
        "metric": "10",
        "title": "Projects",
        "iconClass": "fa-thumbs-o-up"
      },
      {
        "metric": "3.5",
        "title": "Experience",
        "iconClass": "fa-calendar-check-o"
      },
      {
        "metric": "400",
        "title": "Cup of Coffee",
        "iconClass": "fa-coffee"
      },
      {
        "metric": "10",
        "title": "Certifications",
        "iconClass": "fa-certificate"
      }

    ]
  }

  constructor() { }
  ngOnInit(): void {
  }


}
