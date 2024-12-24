import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-past-paper-body',
  standalone: true,
  imports: [],
  templateUrl: './past-paper-body.component.html',
  styleUrls: ['./past-paper-body.component.css']
})
export class PastPaperBodyComponent implements AfterViewInit {
  @ViewChild('slider') slider!: ElementRef;
  isDragging = false;
  startX: number = 0;
  currentRotation: number = 0;

  ngAfterViewInit() {
    const sliderElement = this.slider.nativeElement;

    sliderElement.addEventListener('mousedown', (e: MouseEvent) => {
      this.isDragging = true;
      this.startX = e.pageX - sliderElement.offsetLeft;
      sliderElement.style.animation = 'none'; // Stop the automatic rotation
      sliderElement.style.cursor = 'grabbing';
    });

    sliderElement.addEventListener('mouseleave', () => {
      this.isDragging = false;
      sliderElement.style.cursor = 'grab';
    });

    sliderElement.addEventListener('mouseup', () => {
      this.isDragging = false;
      sliderElement.style.cursor = 'grab';
    });

    sliderElement.addEventListener('mousemove', (e: MouseEvent) => {
      if (!this.isDragging) return;
      const x = e.pageX - sliderElement.offsetLeft;
      const walk = (x - this.startX) * 0.5; // Adjust the sensitivity here
      this.currentRotation += walk;
      sliderElement.style.transform = `perspective(1000px) rotateX(-5deg) rotateY(${this.currentRotation}deg)`;
      this.startX = x; // Reset startX for the next move
    });
  }
}