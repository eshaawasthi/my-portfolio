import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-percentage-bar',
  templateUrl: './percentage-bar.component.html',
  styleUrls: ['./percentage-bar.component.less']
})
export class PercentageBarComponent implements OnInit {
  @Input('skillName') skill: string;
  @Input('percentage') percentage: number;
  @Input() progressBarColor = 'black';

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {

  }
  public getPercentage() {
    return {
      'width': (this.percentage || 0) + '%',
      'background-color': this.progressBarColor
    };
  }

}
