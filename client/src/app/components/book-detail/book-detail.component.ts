import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../models/Book';
import { BooksService } from '../../services/books.service';

@Component({
	selector: 'app-book-detail',
	templateUrl: './book-detail.component.html',
	styleUrls: ['./book-detail.component.css'],
	encapsulation: ViewEncapsulation.None
})

export class BookDetailComponent implements OnInit {

	book: Book = new Book();

	constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, private booksService: BooksService) { }

	ngOnInit() {
		this.getBookDetail(this.route.snapshot.params['id']);
	}

	getBookDetail(id) {
		this.booksService.getBook(id).subscribe(data => {
			console.log(data);
			this.book = data;
		});
	}

	deleteBook(id) {
		this.booksService.deleteBook(id).subscribe(data => {
			console.log(data);
			this.router.navigate(['/books']);
		}, (err) => {
			console.log(err);
		});
	}
}