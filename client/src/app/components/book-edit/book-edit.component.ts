import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Book } from '../../models/Book';
import { BooksService } from '../../services/books.service';

@Component({
	selector: 'app-book-edit',
	templateUrl: './book-edit.component.html',
	styleUrls: ['./book-edit.component.css'],
	encapsulation: ViewEncapsulation.None
})

export class BookEditComponent implements OnInit {

	book: Book = new Book();

	constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private booksService: BooksService) { }

	ngOnInit() {
		this.getBook(this.route.snapshot.params['id']);
	}

	getBook(id) {
		this.booksService.getBook(id).subscribe(data => {
			console.log(data);
			this.book = data;
		});
	}

	updateBook(id) {
		this.book.updated_date = Date.now();
		this.booksService.updateBook(id, this.book).subscribe(data => {
			console.log(data);
			let id = data['_id'];
			this.router.navigate(['/book-details', id]);
		}, (err) => {
			console.log(err);
		});
	}
}