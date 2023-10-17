import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../shared/book.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent{
  @Input() cartInformation
  @Output() DeleteProductFromCart = new EventEmitter<Book>();
  deleteFromCart(book: Book){
    this.DeleteProductFromCart.emit(book);
  }
}
