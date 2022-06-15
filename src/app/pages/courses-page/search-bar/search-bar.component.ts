import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  search: string = '';
  @Output() onSearch = new EventEmitter();
  handleChange() {
    if(this.search.length === 0) {
      this.onSearch.emit(this.search.toLowerCase());
    }
  }
  handleSearch(): void {
    this.onSearch.emit(this.search.toLowerCase());
  }
}
