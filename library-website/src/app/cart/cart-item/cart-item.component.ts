import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  IconDefinition,
  faTrash
} from '@fortawesome/free-solid-svg-icons';
import { Book } from 'src/app/shared/book.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Output() DeleteFromCart = new EventEmitter<Book>();
  @Input() book: Book
  faTrash: IconDefinition = faTrash
  deleteFromCart(){
    this.DeleteFromCart.emit(this.book)
  }
}
