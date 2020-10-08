import { Component } from '@angular/core';
import { Helper } from './guard/helper';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(location: PlatformLocation) {
    location.onPopState(() => {
      Helper.isNextStep = false;
    });
  }
  title = 'contact-management-SPA';
}
