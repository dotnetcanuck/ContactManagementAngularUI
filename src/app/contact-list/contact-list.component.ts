import { Component, OnInit, NgZone } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactManagementService } from '../services/contact-management.service';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';
import { Helper } from '../guard/helper';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];

  constructor(private contactSvc: ContactManagementService, private sharedSvc: SharedService, private routerSvc: Router,
              private zone: NgZone) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.contactSvc.getContacts()
      .subscribe( (response: Contact[]) => {
        this.contacts = response;
      }, error => {
        console.log(error);
      });
  }

  editContact(contact: Contact) {
    Helper.isNextStep = true;
    this.sharedSvc.contact = contact;
    this.zone.run(() => {
      this.routerSvc.navigate(['createcontact']);
    });
  }
}
