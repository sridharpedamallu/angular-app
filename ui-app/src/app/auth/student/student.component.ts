import { Component, OnInit } from '@angular/core';
import { ValidatorFn, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [AuthService]
})
export class StudentComponent implements OnInit {

  loginForm: FormGroup;
  showError = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  onSubmit() {

    this.authService.student_login(this.loginForm.value)
      .subscribe(res => {
        localStorage.setItem('userType', 'student');
        this.router.navigate(['/student']);
      }, err => {
        this.showError = true;
        setTimeout(() => {
            this.showError = false;
          }, 3000);
      });

  }

  loginUser() {
    return localStorage.getItem('userDetails');
  }

}
