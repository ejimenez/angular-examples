import { Component, OnInit, Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import {ContactListComponent} from '../contact-list/contact-list.component';

interface Member {
  id: number;
  fname: string;
  lname: string;
}

@Component({
  selector: 'add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

@Input() contactList: ContactListComponent;

  member: Member;

  constructor() { 
  }

  ngOnInit() {
  }

  clickCancelHandler(form: NgForm) {
    form.reset();
  }
  saveNewContact(form: NgForm) {
    this.member = form.value
    this.contactList.addMember(this.member)
    form.reset();

  }

}
