import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeReportCreateComponent } from './life-report-create.component';

describe('LifeReportCreateComponent', () => {
  let component: LifeReportCreateComponent;
  let fixture: ComponentFixture<LifeReportCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeReportCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeReportCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
