import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeReportIndexComponent } from './life-report-index.component';

describe('LifeReportIndexComponent', () => {
  let component: LifeReportIndexComponent;
  let fixture: ComponentFixture<LifeReportIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeReportIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeReportIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
