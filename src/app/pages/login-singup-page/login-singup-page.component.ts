import { Component } from '@angular/core';
import { LoginSingupHeadderComponent } from './login-singup-headder/login-singup-headder.component';
import { LoginSingupBodyComponent } from './login-singup-body/login-singup-body.component';
import { LoginSingupFootterComponent } from './login-singup-footter/login-singup-footter.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-singup-page',
  standalone: true,
  imports: [LoginSingupHeadderComponent,LoginSingupBodyComponent,LoginSingupFootterComponent,FormsModule,CommonModule],
  templateUrl: './login-singup-page.component.html',
  styleUrl: './login-singup-page.component.css'
})
export class LoginSingupPageComponent {

}
