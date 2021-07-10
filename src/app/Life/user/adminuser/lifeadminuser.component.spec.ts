import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeadminuserComponent } from './lifeadminuser.component';

describe('AdminuserComponent', () => {
  let component: LifeadminuserComponent;
  let fixture: ComponentFixture<LifeadminuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeadminuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeadminuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
