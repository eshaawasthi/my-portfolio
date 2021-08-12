import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/json/personalDetails.json';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';


@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.less']
})
export class ContactMeComponent implements OnInit {
  data: any = data.personalDetails;
  public isMessageSent: boolean = false;
  public messageCode: string = '';
  person = {
    "name": '',
    "message": '',
    "emailId": '',
    "subject": ''
  }
  constructor() { }

  ngOnInit(): void {
  }

  sendMail(e?: Event) {
    console.log(e.target);
    e.preventDefault();
    emailjs.sendForm('service_m7vx5tl', 'template_e1c0cx2', e.target as HTMLFormElement,
      'user_zistKSlVPXwlfWFsWDXEf').then(
        (response: EmailJSResponseStatus) => {
          this.isMessageSent = true;
          this.messageCode = "200";
        },
        (error) => {
          this.isMessageSent = true;
          this.messageCode = "500";
        }
      );
  }
  onClose() {
    this.isMessageSent = false;
  }

}
