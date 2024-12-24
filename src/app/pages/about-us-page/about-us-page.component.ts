import { Component } from '@angular/core';
import { AboutUsHeadderComponent } from './about-us-headder/about-us-headder.component';
import { AboutUsBodyComponent } from './about-us-body/about-us-body.component';
import { AboutUsFootterComponent } from './about-us-footter/about-us-footter.component';

@Component({
  selector: 'app-about-us-page',
  standalone: true,
  imports: [AboutUsHeadderComponent,AboutUsBodyComponent,AboutUsFootterComponent],
  templateUrl: './about-us-page.component.html',
  styleUrl: './about-us-page.component.css'
})
export class AboutUsPageComponent {

}
