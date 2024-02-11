import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router'
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

import Book from '../books/books.component';
import { books } from '../books/books.component';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [
    CommonModule, 
    MatToolbarModule,
    MatCardModule
  ],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent implements OnInit{
  book: Book | undefined;

  constructor(private route: ActivatedRoute) {};

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const bookIdFromRoute = String(routeParams.get('id'));
    this.book = books.find(book => book.id === bookIdFromRoute);
  }
}
