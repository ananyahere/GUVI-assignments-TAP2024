import { Component, Input } from '@angular/core';
import data from '../assets/json/data.json'
import { Book } from './shared/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @Output() AddProductToCart = new EventEmitter<Book>();
  title = 'e-commerce-website';
  cartInfo = {
    "products": [],
    "amount": 0.00
  }
  cartAmt: number = 0.00
  books: Book[] = data
  displayBooks: Book[] = data
  cartBooks: Book[] = []
  cartLength: number = 0;
  calTotal(){
    let amount = 0
    for(let book of this.cartBooks){
      amount = amount + book.price.value
    }
    this.cartAmt = amount
  }
  addToCart(book: Book){
    this.cartBooks.push(book)
    this.cartLength = this.cartBooks.length
    this.calTotal()
    this.cartInfo = {
      "products": this.cartBooks,
      "amount": this.cartAmt
    }
  }
  removeFromCart(book: Book){
    this.cartBooks = this.cartBooks.filter(obj => obj.ISBN != book.ISBN)
    this.cartLength = this.cartBooks.length
    this.calTotal()
    this.cartInfo = {
      "products": this.cartBooks,
      "amount": this.cartAmt
    }
  }
  filterBooks(query: string){
    console.log("filterBooks in app.component.ts=", query)
    const returnBooks = this.books.filter(book => book.title?.toLowerCase().includes(query?.toLowerCase()))
    this.displayBooks = returnBooks
  }
}
