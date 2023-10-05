import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  send(contact: Contact) {
    console.log(contact);
  }
}
