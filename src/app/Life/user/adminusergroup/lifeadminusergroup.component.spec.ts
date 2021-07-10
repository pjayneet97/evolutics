import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeadminusergroupComponent } from './lifeadminusergroup.component';

describe('AdminusergroupComponent', () => {
  let component: LifeadminusergroupComponent;
  let fixture: ComponentFixture<LifeadminusergroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeadminusergroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeadminusergroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
