import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router'

import Loans from '../loans/loans.component';
import { loans } from '../loans/loans.component';

import Member from '../members/members.component';
import { members } from '../members/members.component';

import Book from '../books/books.component';
import { books } from '../books/books.component';

@Component({
  selector: 'app-loan-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loan-detail.component.html',
  styleUrl: './loan-detail.component.css'
})
export class LoanDetailComponent implements OnInit {
  loan: Loans | undefined;
  member: Member | undefined;
  book: Book[] = [];

  constructor(private route: ActivatedRoute) {};

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const loanIdFromRoute = Number(routeParams.get('id'));

    this.loan = loans.find(loan => loan.id === loanIdFromRoute);

    this.member = members.find(member => member.id === this.loan?.id_member)

    if(this.loan != undefined)
    {
      for(var id_book of this.loan.id_book) {
        var b = books.find(book => book.id === id_book);
        if(b != undefined)
          this.book.push(b);
      }
    }
  }
}
