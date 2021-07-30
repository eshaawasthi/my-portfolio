import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-metrics-horizontal-list',
  templateUrl: './metrics-horizontal-list.component.html',
  styleUrls: ['./metrics-horizontal-list.component.less']
})
export class MetricsHorizontalListComponent implements OnInit {
  @Input() iconClass;
  @Input() metric;
  @Input() title;

  constructor() { }

  ngOnInit(): void {
  }

}
