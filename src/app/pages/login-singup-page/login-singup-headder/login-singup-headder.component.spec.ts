import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSingupHeadderComponent } from './login-singup-headder.component';

describe('LoginSingupHeadderComponent', () => {
  let component: LoginSingupHeadderComponent;
  let fixture: ComponentFixture<LoginSingupHeadderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginSingupHeadderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSingupHeadderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
