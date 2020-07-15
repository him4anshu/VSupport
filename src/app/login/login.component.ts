import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms'; 
import { User } from '../classes/user';
import { RegistrationService } from '../service/registration.service';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginComponentHeading = "Login Form";
  msg='';
  user = new User();
  constructor(private _authservice : AuthService, private _router : Router) { }

  ngOnInit() {
  }
  async login(){
    console.log("--1-- Entered Email Id in login component : "+this.user.emailId);
    console.log("--2-- Entered Password in login component : "+this.user.password);
    let userAuthenticated = await this._authservice.authenticateSynchronous(this.user);
    console.log("--7-- User is Authenticated : "+userAuthenticated);

    if(userAuthenticated){
      console.log("--8-- success in login component");
      this._router.navigate(["employees"]);
    }else{
      console.log("--9-- error in login component");
      this.msg='Please provide correct Username and Password';
    }
    console.log("--10-- Login check done");
  }
  
  goToRegistration(){
    this._router.navigate(["register"]);
  }
}
