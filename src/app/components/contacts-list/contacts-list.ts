import {Component, signal} from '@angular/core';
import {Contact} from '../../model/contact';

@Component({
  selector: 'app-contacts-list',
  imports: [],
  templateUrl: './contacts-list.html',
  styleUrl: './contacts-list.scss'
})
export class ContactsList {
  contacts = signal<Contact[]>([
    {id: '1', name: 'John', email: '', phone: '123456789'},
    {id: '2', name: 'Jane', email: '', phone: '987654321'},
    {id: '3', name: 'Bob', email: '', phone: '098765432'},
  ]);
}
