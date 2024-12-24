import { Component } from '@angular/core';
import { PastPaperBodyComponent } from './past-paper-body/past-paper-body.component';
import { PastPaperFootterComponent } from './past-paper-footter/past-paper-footter.component';

@Component({
  selector: 'app-past-papers-page',
  standalone: true,
  imports: [PastPaperBodyComponent,PastPaperFootterComponent],
  templateUrl: './past-papers-page.component.html',
  styleUrl: './past-papers-page.component.css'
})
export class PastPapersPageComponent {

}
