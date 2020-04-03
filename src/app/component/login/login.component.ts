import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;


  constructor(private router: Router, private fb: FormBuilder) {
    this.createLogin();
  }
  createLogin() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    })
  };

  get usernameControl(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }
  get passwordControl(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  ngOnInit(): void {
  }

  login() {
    if (this.loginForm.get('username').value != null && this.loginForm.get('username').value !== '' && this.loginForm.get('password').value != null && this.loginForm.get('password').value !== '') {
      const isAdmin = this.loginForm.get('username').value === ('admin');
      sessionStorage.setItem(isAdmin ? 'admin' : 'user', this.loginForm.get('username').value);
      this.router.navigateByUrl('/home');
    }
  }

}



