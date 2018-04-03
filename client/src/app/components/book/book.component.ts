import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../../models/Book';
import { BooksService } from '../../services/books.service';

@Component({
	selector: 'app-book',
	templateUrl: './book.component.html',
	styleUrls: ['./book.component.css'],
	encapsulation: ViewEncapsulation.None
})

export class BookComponent implements OnInit {

	books: Book[];

	constructor(private booksService: BooksService) { }

	ngOnInit() {
		this.booksService.getBooks().subscribe(data => {
			console.log(data);
			this.books = data;
		});
	}
}