import { Component, Input, OnInit } from '@angular/core';
import { PaginationControlsDirective } from 'ngx-pagination';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('paginationData') p: PaginationControlsDirective;
  config: any;
  collection = { count: 60, data: [] };
  constructor() {
    // Create dummy data
    for (let i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          id: i + 1,
          value: 'items number ' + (i + 1)
        }
      );
    }

    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }

  ngOnInit(): void {
  }

  pageChanged(event): void {
    this.config.currentPage = event;
  }
}
