import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/auth/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  email;
  scEmail;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.email = localStorage.getItem('email') || '';
    this.scEmail = this.email.charAt(0) || '';
  }

  logout(): void {
    this.authenticationService.logout();
  }

}
