import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../shared/book.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Output() AddProductToCart = new EventEmitter<Book>();
  @Input() book: Book;
  productInCart: Book
  addToCart(book: Book){
    this.productInCart = book;
    this.AddProductToCart.emit(book)
  }
}
