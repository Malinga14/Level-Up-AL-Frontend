import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent} from './common/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component'
import { PastPapersPageComponent } from './pages/past-papers-page/past-papers-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { LoginSingupPageComponent } from './pages/login-singup-page/login-singup-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,HomePageComponent,PastPapersPageComponent,AboutUsPageComponent,ProfilePageComponent,LoginSingupPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student-level-up';
}
