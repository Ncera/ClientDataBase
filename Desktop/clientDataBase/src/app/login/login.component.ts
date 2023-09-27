import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signupUser: any[] = [];
  signupObj: any = {
    userName: '',
    email: '',
    password: ''
  };
  loginObj: any = {
    email: '',
    password: ''
  }

  constructor() {}

  ngOnInit(): void {
    
  }

}
