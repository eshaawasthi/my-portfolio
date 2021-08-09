import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/json/personalDetails.json';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.less']
})
export class ContactMeComponent implements OnInit {
  data: any = data.personalDetails;
  person: any = {
    "name": '',
    "emailId": '',
    "message": '',
    "subject": ''
  }
  constructor() { }

  ngOnInit(): void {
  }

}
