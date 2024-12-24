import { Component } from '@angular/core';
import { HomeHeadderComponent } from './home-headder/home-headder.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { HomeFootterComponent } from './home-footter/home-footter.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HomeHeadderComponent,HomeBodyComponent,HomeFootterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
