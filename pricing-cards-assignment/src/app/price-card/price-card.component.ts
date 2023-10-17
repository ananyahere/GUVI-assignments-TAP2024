import { Component, Input } from '@angular/core';
import { PriceCard } from './price-card.model';
import {
  IconDefinition,
  faCheck,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.css']
})
export class PriceCardComponent {
  @Input() card: PriceCard;

  // Font Awesome Icons
  faCheck: IconDefinition = faCheck;
  faTimes: IconDefinition = faTimes;
}

// add "play" button
// change the text of "play" button to "pause" after click
// after "play" button, slide the image automatically
// after clicking pause button, stop the interval