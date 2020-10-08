import { Component, OnInit, NgZone } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';
import { Helper } from '../guard/helper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private sharedSvc: SharedService, private routerSvc: Router, private zone: NgZone) { }

  ngOnInit() {
  }

  createContactPage(){
    Helper.isNextStep = true;
    this.sharedSvc.contact = null;
    this.zone.run(() => {
      this.routerSvc.navigate(['/createcontact']);
    });
  }
}
