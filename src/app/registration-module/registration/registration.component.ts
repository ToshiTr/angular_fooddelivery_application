import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/service/auth_service/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  username: string ='';
  email: string = '';
  password: string = '';

  constructor(private auth: AuthenticationService){}

  ngOnInit(): void { }

  register() {

    if(this.email === '') {
      alert('Please Enter Email');
      return;
    }
    if(this.password === '') {
      alert('Please Enter Password');
      return;
    }
    
    this.auth.userRegistration(this.email,this.password);
    this.email = '';
    this.password = '';
  }

}
