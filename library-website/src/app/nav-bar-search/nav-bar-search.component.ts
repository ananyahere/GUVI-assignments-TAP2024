import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {
  IconDefinition,
  faSearch
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar-search',
  templateUrl: './nav-bar-search.component.html',
  styleUrls: ['./nav-bar-search.component.css']
})
export class NavBarSearchComponent implements OnInit{
  @Output() SearchBooks = new EventEmitter<string>();
  faSearch: IconDefinition = faSearch;
  searchForm: FormGroup = null;
  constructor(private fb: FormBuilder){}
  ngOnInit(): void {
    this.searchForm = this.fb.group({
      title: this.fb.control('') // '' is default value
    })
  }
  filterProducts(): void{
    console.log("filterProduct in nav-bar-search", this.searchForm.value.title)
    this.SearchBooks.emit(this.searchForm.value.title)
  }
}
