import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.less']
})
export class AlertsComponent implements OnInit {
  @Input() messageCode;
  @Output() onClose = new EventEmitter();

  alertMessage: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.messageCode === "200" ? this.alertMessage = "Message Sent Successfully!!" : this.alertMessage = "Try After Sometime!! Server Down!"
  }

  onCloseAlert(e?: Event) {
    this.onClose.emit();
  }
  getColor() {
    if (this.messageCode === "200") {
      return { backgroundColor: "#8bc34a" };
    }
    return { backgroundColor: "#ff776d" };
  }
}
