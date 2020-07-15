import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  constructor() { }
  isShowMenu = false;
  ngOnInit(): void {

  }

  onToggleMenu(event: boolean): void {
    this.isShowMenu = event;
    console.log('event', event);
  }

}
