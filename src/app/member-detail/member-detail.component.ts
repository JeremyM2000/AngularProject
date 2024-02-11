import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterOutlet, RouterModule } from '@angular/router'
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

import Member from '../members/members.component';
import { members } from '../members/members.component';

import { LoanDetailComponent } from '../loan-detail/loan-detail.component';
import Loans from '../loans/loans.component';
import { loans } from '../loans/loans.component';

@Component({
  selector: 'app-member-detail',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    RouterModule, 
    LoanDetailComponent,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule
  ],
  templateUrl: './member-detail.component.html',
  styleUrl: './member-detail.component.css'
})
export class MemberDetailComponent implements OnInit {
  member: Member | undefined;
  loan: Loans[] = []

  constructor(private route: ActivatedRoute) {};

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const memberIdFromRoute = Number(routeParams.get('id'));
    
    this.member = members.find(member => member.id === memberIdFromRoute);

    if(this.member != undefined)
      this.loan = loans.filter(loan => loan.id_member === memberIdFromRoute);   
    
  }
}