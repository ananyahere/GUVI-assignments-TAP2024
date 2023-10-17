import { Component, Input } from '@angular/core';
import {
  IconDefinition,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @Input() cartCount: number;
  faShoppingCart: IconDefinition = faShoppingCart;
}
