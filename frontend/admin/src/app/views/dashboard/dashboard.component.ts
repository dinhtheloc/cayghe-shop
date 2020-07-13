import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  config: any;
  constructor() { 

    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: 30
    };
  }

  ngOnInit(): void {
  }

  pageChanged(event): void{
    this.config.currentPage = event;
  }
}
