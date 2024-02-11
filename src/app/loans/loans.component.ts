import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { LoanDetailComponent } from '../loan-detail/loan-detail.component';
import loansData from '../../assets/loans.json'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';

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
  imports: [
    CommonModule, 
    RouterOutlet, 
    RouterModule, 
    LoanDetailComponent,
    MatToolbarModule,
    MatTableModule
  ],
  templateUrl: './loans.component.html',
  styleUrl: './loans.component.css'
})
export class LoansComponent {
  loans: Loans[] = loansData;
  dataSource = loansData;
  displayedColumns: string[] = ['id', 'id_member', 'id_book', 'date', 'end_date'];
}
