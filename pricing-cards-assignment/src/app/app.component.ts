import { Component } from '@angular/core';
import data from "../assets/json/data.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pricing-cards-assignment';
  cards = data
}
