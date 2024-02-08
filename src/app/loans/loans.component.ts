import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { LoanDetailComponent } from '../loan-detail/loan-detail.component';
import loansData from '../../assets/loans.json'

// import { books } from '../books/books.component';
// import Book from '../books/books.component';

// import { members } from '../members/members.component';
// import Member from '../members/members.component';

// export default class Loan {
//   id: Number;
//   date: String;
//   end_date: String;

//   member: Member | undefined;
//   book: Book | undefined;

//   // constructor(id: Number, id_member: Number, id_book: String, 
//   //   date: String, end_date: String){

//   //   this.id = id;
//   //   this.date = date;
//   //   this.end_date = end_date;

//   //   this.member = members.find(member => member.id === id_member);
//   //   this.book = books.find(book => book.id === id_book)
//   // }

//   constructor(data: any){

//     this.id = data.id;
//     this.date = data.date;
//     this.end_date = data.end_date;

//     this.member = members.find(member => member.id === data.id_member);
//     this.book = books.find(book => book.id === data.id_book)
//   }
// }

// let loan = new Loan(JSON.parse(loansData.toString()));

export default interface Loans{
  id: Number;
  id_member: Number
  id_book: String[]
  date: String;
  end_date: String;
}

const loans: Loans[] = loansData;
export { loans };

@Component({
  selector: 'app-loans',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, LoanDetailComponent],
  templateUrl: './loans.component.html',
  styleUrl: './loans.component.css'
})
export class LoansComponent {
  loans: Loans[] = loansData;
}
