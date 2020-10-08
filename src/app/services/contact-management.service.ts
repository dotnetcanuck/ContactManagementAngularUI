import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContactManagementService {
  baseUrl = environment.apiUrl;
  routeGuard;

  constructor(private httpSvc: HttpClient) { }

  getContacts(): Observable<Contact[]> {
    return this.httpSvc.get<Contact[]>(this.baseUrl + 'contactmanagement');
  }

  createContact(contact: Contact): Observable<any> {
    return this.httpSvc.post(this.baseUrl + 'contactmanagement/createcontact', contact);
  }

  updateContact(contact: Contact): Observable<any> {
    return this.httpSvc.post(this.baseUrl + 'contactmanagement/updatecontact', contact);
  }
}
