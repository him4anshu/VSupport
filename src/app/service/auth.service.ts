import { Injectable } from '@angular/core';
import { RegistrationService } from './registration.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedInSuccess = false;
  constructor(private _service:RegistrationService) { }
  authenticateAsynchronus(user) {
    this._service.loginUser(user).subscribe(
      data => {
        console.log("login successfull");
        sessionStorage.setItem('username', data.userName);
        this.isLoggedInSuccess = true;
      },
      error => {
        console.log("login failure");
        this.isLoggedInSuccess = false;
      }
    );
    return this.isLoggedInSuccess;
  }

   async authenticateSynchronous(user){
     console.log("--3-- in AuthService authenticateSynchronous call");
    await this._service.loginUserSynchronousCall(user).then(
      data => {
        console.log("--5-- login successfull authenticateSynchronous");
        sessionStorage.setItem('username', data.userName);
        this.isLoggedInSuccess = true;
      },
      error => {
        console.log("--5-- login failure authenticateSynchronous");
        this.isLoggedInSuccess = false;
      }
    );
    console.log("--6-- Final Returning from auth service");
    return this.isLoggedInSuccess;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    console.log("Username : "+user);
    return !(user === null);
  }

  logout() {
    console.log("login failure");
    sessionStorage.removeItem('username');
  }

  loggedInUserName(){
    return sessionStorage.getItem('username');
  }

}
