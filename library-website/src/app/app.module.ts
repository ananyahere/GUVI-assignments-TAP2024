import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { ProductComponent } from './product/product.component';
import { NavBarSearchComponent } from './nav-bar-search/nav-bar-search.component';



@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    NavBarComponent,
    CartItemComponent,
    ProductComponent,
    NavBarSearchComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
