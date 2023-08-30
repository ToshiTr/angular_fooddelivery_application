import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/service/auth_service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  email: string = '';
  password: string = '';

  constructor(private auth: AuthenticationService){}

  ngOnInit(): void { }

  login() {

    if(this.email === '') {
      alert('Please Enter Email');
      return;
    }
    if(this.password === '') {
      alert('Please Enter Password');
      return;
    }
    
    this.auth.userLogin(this.email,this.password);
    this.email = '';
    this.password = '';
  }

}
