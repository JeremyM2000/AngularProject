import { Routes } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { BooksComponent } from './books/books.component';
import { LoansComponent } from './loans/loans.component';
import { ContactComponent } from './contact/contact.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { LoanDetailComponent } from './loan-detail/loan-detail.component';

export const routes: Routes = [
    { path: 'members', component: MembersComponent, },
    { path: 'books', component: BooksComponent },
    { path: 'loans', component: LoansComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'member/:id', component: MemberDetailComponent },
    { path: 'loan/:id', component: LoanDetailComponent }
];
