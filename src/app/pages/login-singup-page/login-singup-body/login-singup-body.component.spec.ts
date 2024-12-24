import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSingupBodyComponent } from './login-singup-body.component';

describe('LoginSingupBodyComponent', () => {
  let component: LoginSingupBodyComponent;
  let fixture: ComponentFixture<LoginSingupBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginSingupBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSingupBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
