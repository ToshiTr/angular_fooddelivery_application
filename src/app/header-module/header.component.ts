import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthenticationService } from '../shared/service/auth_service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  
  constructor(private authService : AuthenticationService){}

  ngOnInit(): void { 
  }
  
  logout(){
    this.authService.userLogout();
  }

}
