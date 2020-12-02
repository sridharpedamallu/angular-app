// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { BehaviorSubject } from 'rxjs';
// import { environment } from 'src/environments/environment';
// import { map, filter, tap } from 'rxjs/operators'

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   readonly API_URL = environment.apiUrl;

//   public loggedIn = new BehaviorSubject<boolean>(this.isLoggedIn()); // {1}

//   constructor(
//     private http: HttpClient,
//     private router: Router) { }

//  authenticate(val) {
//    localStorage.clear();
//    return this.http.post(this.API_URL + 'login', val).pipe(
//      map((val) => {
//       localStorage.setItem('token', val['token']);
//       localStorage.setItem('userDetails', JSON.stringify(val['user']));
//       this.loggedIn.next(true);
//     })
//    );
//   }

//   isLoggedIn() {

//     if (localStorage.length > 0
//       && sessionStorage.getItem('user') !== null
//       && sessionStorage.getItem('token') !== null
//     ) {
//       // this.loggedIn.next(true);
//       return true;
//     } else {
//       // this.loggedIn.next(false);
//       return false;
//     }

//     // return this.loggedIn.asObservable(); // {2}
//   }

//   logout() {                            // {4}
//     this.loggedIn.next(false);
//     localStorage.clear();
//     this.router.navigate(['/auth/student']);
//   }
// }

// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { map, filter, tap } from 'rxjs/operators'
// import { environment } from 'src/environments/environment';


// @Injectable()
// export class AuthService {

//   readonly API_URL = environment.apiUrl;

//   isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());

//   constructor(
//     private http: HttpClient,
//     private router: Router) { }

//   /**
//    *
//    * @returns {Observable<T>}
//    */
//   isLoggedIn(): Observable<boolean> {
//     return this.isLoginSubject.asObservable();
//   }

//   /**
//    *  Login the user then tell all the subscribers about the new status
//    */
//   login(val: any): any {
//     return this.http.post(this.API_URL + 'login', val).pipe(
//         map((val) => {
//           localStorage.setItem('token', val['token']);
//           localStorage.setItem('userDetails', JSON.stringify(val['user']));
//           this.isLoginSubject.next(true);
//           console.log(this.isLoginSubject.getValue());
//       })
//       );
//   }

//   /**
//    * Log out the user then tell all the subscribers about the new status
//    */
//   logout(): void {
//     localStorage.removeItem('token');
//     this.isLoginSubject.next(false);
//   }

//   /**
//    * if we have token the user is loggedIn
//    * @returns {boolean}
//    */
//   private hasToken(): boolean {
//     return !!localStorage.getItem('token');
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, filter, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable()
export class AuthService {

  readonly API_URL = environment.apiUrl;

  isAuthenticated = false;

  constructor(
    private http: HttpClient,
    private router: Router) { }

  get isLoggedIn() {
    return this.isAuthenticated;
  }

  get userDetails() {
    if (localStorage.getItem('userDetails')) {
      return JSON.parse(localStorage.getItem('userDetails'));
    } else {
      return null;
    }


  }

  login(value: any) {

    return this.http.post(this.API_URL + 'login', value).pipe(
        map((val) => {
          localStorage.setItem('token', val['token']);
          localStorage.setItem('userDetails', JSON.stringify(val['user']));
      })
      );
  }

  student_login(value: any) {

    return this.http.post(this.API_URL + 'student_login', value).pipe(
        map((val) => {
          localStorage.setItem('token', val['token']);
          localStorage.setItem('userDetails', JSON.stringify(val['user']));
      })
      );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }

}
