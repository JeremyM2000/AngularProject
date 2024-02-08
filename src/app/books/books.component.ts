import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import booksData from '../../assets/books.json';

export default class Book {
  name: String;
  id: String;
  author: String;
  publication_date: String;

  constructor(name: String, id: String, author: String, publication_date: String){
    this.id = id;
    this.name = name;
    this.author = author;
    this.publication_date = publication_date;
  }
}

const books: Book[] = booksData;
export { books };

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  books: Book[] = booksData;
}
