import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { Contact } from '../models/contact';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';
import { ContactManagementService } from '../services/contact-management.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {
  model: Contact;
  bsConfig: Partial<BsDatepickerConfig>;
  constructor(private formBuilder: FormBuilder, private sharedSvc: SharedService, private routerSvc: Router,
              private contactSvc: ContactManagementService, private alertifySvc: AlertifyService ) {
  }

  ngOnInit() {
    this.model = this.sharedSvc.contact;
  }

  cancel(createContactFormGp: NgForm) {
    createContactFormGp.reset();
    createContactFormGp.resetForm();
    this.sharedSvc.contact = null;
    this.routerSvc.navigate(['/home']);
  }

  createEditContact(createContactFormGp: NgForm) {
    if (createContactFormGp.valid) {
      this.alertifySvc.confirm('Do you want to update/create the contact?', () => {
        this.model = Object.assign({}, createContactFormGp.value);
        if (this.model != null && this.model.id != null && this.model.id >= 0) {
        this.contactSvc.updateContact(this.model)
        .subscribe(() => {
          this.alertifySvc.success('Contact details is updated successfully.');
        }, error => {
          this.alertifySvc.error('Update failed.');
        }, () => {
          this.routerSvc.navigate(['/home']);
        });
      } else {
        this.model.id = 0;
        this.contactSvc.createContact(this.model).subscribe(() => {
          this.alertifySvc.success('New contact is created successfully.');
        }, error => {
          this.alertifySvc.error('Creation failed.');
        }, () => {
          this.routerSvc.navigate(['/home']);
        });
      }
      });
    }
  }
}
