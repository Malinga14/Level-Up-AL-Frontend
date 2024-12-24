import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { init } from 'aos';
import { TokenService } from '../../../token.service';


@Component({
  selector: 'app-profile-settings',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './profile-settings.component.html',
  styleUrl: './profile-settings.component.css'
})
export class ProfileSettingsComponent{

  
  public username:any;
  public student:any={
    name:"",
    school:"",
    phoneNo:"",
    dob:"",
    email:"",
    username:"",
    password:""
 };

 headers = new HttpHeaders();

 constructor(private http:HttpClient, private tokenService: TokenService){
  this.username=localStorage.getItem("user");
  this.headers = new HttpHeaders().set('Authorization', `Bearer ${this.tokenService.getToken()}`);
  this.setValues()
 }

 
 
 public setValues(){
    this.http.get(`http://localhost:8080/api/v1/auth/username/${this.username}`).subscribe(data=>{
      this.student=data;
    })
 }

}
