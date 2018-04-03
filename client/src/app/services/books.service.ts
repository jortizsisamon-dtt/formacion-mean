import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Book } from '../models/Book';

@Injectable()
export class BooksService {

	constructor(private http: HttpClient) { }

	public getBooks(): Observable<Book[]> {
		let fullUrl = 'http://localhost:3000/book';
		return this.http.get<Book[]>(fullUrl);
	}

	public createBook(book: Book): Observable<Book> {
		let fullUrl = 'http://localhost:3000/book';
		return this.http.post<Book>(fullUrl, book);
	}

	public getBook(bookId: number): Observable<Book> {
		let fullUrl = 'http://localhost:3000/book/' + bookId;
		return this.http.get<Book>(fullUrl);
	}
	
	public updateBook(bookId: number, book: Book): Observable<Book> {
		let fullUrl = 'http://localhost:3000/book/' + bookId;
		return this.http.put<Book>(fullUrl, book);
	}

	public deleteBook(bookId: number): Observable<Book> {
		let fullUrl = 'http://localhost:3000/book/' + bookId;
		return this.http.delete<Book>(fullUrl);
	}
}
