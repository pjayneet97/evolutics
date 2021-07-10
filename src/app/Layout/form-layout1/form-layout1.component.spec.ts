import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLayout1Component } from './form-layout1.component';

describe('FormLayout1Component', () => {
  let component: FormLayout1Component;
  let fixture: ComponentFixture<FormLayout1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLayout1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLayout1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
