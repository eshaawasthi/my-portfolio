import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricsHorizontalListComponent } from './metrics-horizontal-list.component';

describe('MetricsHorizontalListComponent', () => {
  let component: MetricsHorizontalListComponent;
  let fixture: ComponentFixture<MetricsHorizontalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetricsHorizontalListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricsHorizontalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
