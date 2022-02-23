import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  message: string;

  constructor() {
    this.message = 'Hola';
  }

  ngOnInit(): void {
    console.log(this.message);
  }
}
