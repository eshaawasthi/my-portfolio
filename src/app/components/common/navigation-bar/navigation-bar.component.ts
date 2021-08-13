import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.less']
})
export class NavigationBarComponent implements OnInit {
  isResponsiveNav = false;
  @Output() isResponsiveNavValue = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onResponsiveNav(value?) {
    this.isResponsiveNav = value || false;
    this.isResponsiveNavValue.emit(!this.isResponsiveNav);
  }
}
