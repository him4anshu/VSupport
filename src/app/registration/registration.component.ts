import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { RegistrationService } from '../service/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerComponentHeading="Register Form";
  user = new User()
  constructor(private _service : RegistrationService) { }

  ngOnInit() {
  }

  register(){
    console.log(this.user.password);
    console.log(this.user.confirmPassword);
    this._service.registerUser(this.user).subscribe(
      data => console.log("success"),
      error => console.log("error")
    );
  }
 
}
