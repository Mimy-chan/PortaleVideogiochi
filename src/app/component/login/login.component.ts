import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  username: string;
  password: string;

login(){
  if(this.username != null && this.username != '' && this.password != null && this.password != ''){
    sessionStorage.setItem('user',this.username);
  this.router.navigateByUrl('/home'); 
  }else if(this.username != null && this.username === sessionStorage.getItem('admin')) {
    sessionStorage.setItem('admin', this.username);
    this.router.navigateByUrl('/editGame');
  }
}

}

