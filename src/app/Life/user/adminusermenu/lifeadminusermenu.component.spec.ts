import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LifeadminuserComponent } from '../adminuser/lifeadminuser.component';
import { LifeadminusermenuComponent } from './lifeadminusermenu.component';

describe('AdminusermenuComponent', () => {
  let component: LifeadminusermenuComponent;
  let fixture: ComponentFixture<LifeadminusermenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeadminusermenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeadminusermenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
