import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'portfolio-esha';
  isResponsiveNav: boolean = true;

  isResponsiveNavValue(e?) {
    this.isResponsiveNav = e;
  }
}
