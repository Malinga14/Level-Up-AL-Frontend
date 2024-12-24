import { Component } from '@angular/core';
import { ProfileSettingsComponent } from '../profile-settings/profile-settings.component';
import { SpeedTrackComponent } from '../speed-track/speed-track.component';
import { PaperPathComponent } from '../paper-path/paper-path.component';
import { QuizComponent } from '../quiz/quiz.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile-page-body',
  standalone: true,
  imports: [ProfileSettingsComponent,SpeedTrackComponent,PaperPathComponent,QuizComponent,RouterLink,RouterOutlet],
  templateUrl: './profile-page-body.component.html',
  styleUrl: './profile-page-body.component.css'
})
export class ProfilePageBodyComponent {

}
