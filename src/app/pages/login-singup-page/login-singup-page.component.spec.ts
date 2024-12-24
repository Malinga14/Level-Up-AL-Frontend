import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSingupPageComponent } from './login-singup-page.component';

describe('LoginSingupPageComponent', () => {
  let component: LoginSingupPageComponent;
  let fixture: ComponentFixture<LoginSingupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginSingupPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSingupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
