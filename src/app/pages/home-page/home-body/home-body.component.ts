import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-home-body',
  standalone: true,
  imports: [],
  templateUrl: './home-body.component.html',
  styleUrl: './home-body.component.css'
})
export class HomeBodyComponent implements OnInit {
  constructor(){}
  ngOnInit() {
      AOS.init({
        duration: 1500
      });
  }

}
