import { Component } from '@angular/core';
import { ProfilePageBodyComponent } from './profile-page-body/profile-page-body.component';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [ProfilePageBodyComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {

}
