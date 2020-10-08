import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  contact: Contact;
  constructor() { }
}
