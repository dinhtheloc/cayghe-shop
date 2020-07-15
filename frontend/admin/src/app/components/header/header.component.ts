import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() isShowMenu: boolean;

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onToggleMenu: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.isShowMenu = !this.isShowMenu;
    this.onToggleMenu.emit(this.isShowMenu);
  }

}
