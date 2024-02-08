import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MemberDetailComponent } from '../member-detail/member-detail.component';
import membersData from '../../assets/members.json';

export default class Member {
  id: Number;
  last_name: String;
  first_name: String;
  inscription_date: String;
  email_address: String;
  phone_number: String;

  constructor(id: Number, last_name: String, first_name: String, 
    inscription_date: String, email_address: String, phone_number: String){

    this.id = id;
    this.last_name = last_name;
    this.first_name = first_name;
    this.inscription_date = inscription_date;
    this.email_address = email_address;
    this.phone_number = phone_number;
  }
}

const members: Member[] = membersData;
export { members };

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, MemberDetailComponent],
  templateUrl: './members.component.html',
  styleUrl: './members.component.css'
})
export class MembersComponent {
  members: Member[] = membersData;
}
