import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isLoggedIn : boolean = false;
  constructor(private fireauth: AngularFireAuth,
    private router: Router) { 
     
    }

  //login method
  userLogin(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
      this.isLoggedIn = true;
      this.router.navigate(['/restaurant/restaurants-listing']);
    }, err => {

      alert('Something went wrong');
      this.router.navigate(['/login']);
    });
  }

  //registration method 

  userRegistration(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(() => {

      alert("Registration Successfull");
      this.router.navigate(['/login']);
    }, err => {

      alert(err.message);
      this.router.navigate(['/register']);
    });
  }

  //logout method
  userLogout() {
     this.fireauth.signOut().then( () =>{
      localStorage.removeItem('token');
      this.isLoggedIn = false;
      this.router.navigate(['/login']);
     }, err => {
        alert(err.message);
     });
  }

  getIsLoggedIn() : boolean{
    return this.isLoggedIn;
  }
}
