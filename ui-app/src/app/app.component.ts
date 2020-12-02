import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent {
  title = 'ui-app';

  constructor(public authService: AuthService) {
  }

  isAuth(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }

  getUserDetails() {
    return this.authService.userDetails();
  }
}
