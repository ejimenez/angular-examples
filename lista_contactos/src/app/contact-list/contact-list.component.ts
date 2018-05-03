import { Component, OnInit } from '@angular/core';

interface Member {
  id: number;
  fname: string;
  lname: string;
}

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  private memberListDefaults: Array<Member> = [
    { id: 0, fname: 'John', lname: 'Doe'},
  ];

  memberList: Array<Member> = [];

  constructor() {
	for (const member of this.memberListDefaults){
      	this.addMember(member);
    }
   }

  // Add member
  addMember(member: Member) {
  console.log('add member');
    this.memberList.push(member);
  }

  editMemberFName(index:number) {
    console.log('Edit member with index:'+index+' First Name' );
  }

  editMemberLName(index:number) {
    console.log('Edit member with index:'+index+' Last Name' );
  }

  removeMember(index:number) {
    console.log('Removed member with index:'+index+' First Name' );
    this.memberList.splice(index,1);
  }

  ngOnInit() {
  }

}
