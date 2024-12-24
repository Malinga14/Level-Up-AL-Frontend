import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginSingupPageComponent } from '../login-singup-page.component';
import { TokenService } from '../../../token.service';

@Component({
  selector: 'app-login-singup-body',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, RouterOutlet, LoginSingupPageComponent],
  templateUrl: './login-singup-body.component.html',
  styleUrl: './login-singup-body.component.css'
})
export class LoginSingupBodyComponent {
  public student: any = {
    name: "",
    school: "",
    phoneNo: "",
    dob: "",
    email: "",
    username: "",
    password: ""
  };


  headers = new HttpHeaders();


  constructor(private http: HttpClient, private tokenService: TokenService) { }
  addStudent() {
    if (this.student != null) {

      this.http.post("http://localhost:8080/api/v1/auth/register", this.student).subscribe(
        (data: any) => {
          console.log("Student added successfully", data);
          alert("Student added successfully!");
  
          this.tokenService.saveToken(data.token);
  
          this.headers = new HttpHeaders().set('Authorization', `Bearer ${this.tokenService.getToken()}`);
  
          console.log("Sending student data to authenticated endpoint:", this.student);
          this.http.post("http://localhost:8080/api/v1/auth/add-student", this.student).subscribe(
            (response) => {
              console.log("Student added to authenticated endpoint successfully", response);
              alert("Student added to authenticated endpoint successfully!");
            },
            (error) => {
              console.error("Error occurred while adding student to authenticated endpoint:", error);
              alert("Error adding student to authenticated endpoint");
            }
          );
        },
        (error) => {
          console.error("Error occurred during registration:", error);
          alert("Error adding student");
        }
      );
    } else {
      alert("Please fill all the fields");
    }
  }  
}
