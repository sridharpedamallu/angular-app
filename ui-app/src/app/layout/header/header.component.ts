import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() changeTheme = new EventEmitter<string>();

  theme = 'light';

  constructor( public authService: AuthService ) {}

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }

  getUserType() {
    return localStorage.getItem('userType');
  }

  selectTheme(e) {
    this.changeTheme.emit(e.target.value);
  }

}
