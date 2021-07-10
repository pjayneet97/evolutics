import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeReportShowComponent } from './life-report-show.component';

describe('LifeReportShowComponent', () => {
  let component: LifeReportShowComponent;
  let fixture: ComponentFixture<LifeReportShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeReportShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeReportShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
