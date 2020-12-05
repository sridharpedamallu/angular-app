import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent {
  title = 'ui-app';

  lightStyle = './assets/css/blue/bootstrap.min.css';
  darkStyle = './assets/css/dark/bootstrap.min.css';

  constructor(
    public authService: AuthService,
    @Inject(DOCUMENT) private document
  ) {
    this.assignTheme(this.lightStyle);
  }

  changeTheme(theme) {
    if (theme === 'dark') {
      this.assignTheme(this.darkStyle);
    } else {
      this.assignTheme(this.lightStyle);
    }
  }

  assignTheme(theme) {
    const head = this.document.getElementsByTagName('head')[0];

    const style = this.document.createElement('link');
    style.rel = 'stylesheet';
    style.href = theme;

    head.appendChild(style);
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
