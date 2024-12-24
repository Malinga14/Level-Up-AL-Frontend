import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomePageComponent } from '../../pages/home-page/home-page.component';
import { PastPapersPageComponent } from '../../pages/past-papers-page/past-papers-page.component';
import { AboutUsPageComponent } from '../../pages/about-us-page/about-us-page.component';
import { LoginSingupPageComponent } from '../../pages/login-singup-page/login-singup-page.component';
import { ProfilePageComponent } from '../../pages/profile-page/profile-page.component';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TokenService } from '../../token.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, RouterOutlet, HomePageComponent, PastPapersPageComponent, AboutUsPageComponent, LoginSingupPageComponent, ProfilePageComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public user: any = {
    username: "",
    password: ""
  };


  headers = new HttpHeaders();

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  loginStudent() {
    localStorage.setItem("user",this.user.username);
    console.log("Sending student data:", this.user);
      this.http.post("http://localhost:8080/api/v1/auth/authenticate", this.user).subscribe(
        (data:any) => {
          console.log("Student added successfully", data);
          alert("Student added successfully!");
          this.tokenService.saveToken(data);
          this.headers.set('Authorization',`Bearer ${this.tokenService.getToken()}`);
        },
        (error) => {
          console.error("Error occurred:", error);
          alert("Error adding student");
        }
      );
  }
}
