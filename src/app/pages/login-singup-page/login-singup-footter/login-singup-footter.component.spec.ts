import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSingupFootterComponent } from './login-singup-footter.component';

describe('LoginSingupFootterComponent', () => {
  let component: LoginSingupFootterComponent;
  let fixture: ComponentFixture<LoginSingupFootterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginSingupFootterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSingupFootterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
