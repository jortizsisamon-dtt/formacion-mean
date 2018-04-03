import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Book } from '../../models/Book';
import { BooksService } from '../../services/books.service';

@Component({
	selector: 'app-book-create',
	templateUrl: './book-create.component.html',
	styleUrls: ['./book-create.component.css'],
	encapsulation: ViewEncapsulation.None
})

export class BookCreateComponent implements OnInit {

	book: Book = new Book();

	constructor(private http: HttpClient, private router: Router, private booksService: BooksService) { }

	ngOnInit() {
	}

	saveBook() {
		this.booksService.createBook(this.book).subscribe(data => {
			console.log(data);
			let id = data['_id'];
			this.router.navigate(['/book-details', id]);
		}, (err) => {
			console.log(err);
		});
	}
}