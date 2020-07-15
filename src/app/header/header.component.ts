import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedInUserName = null;
  constructor(private _router : Router, private _authService:AuthService) {
    this.loggedInUserName = this._authService.loggedInUserName();
   }

  ngOnInit() {
  
  }
  
}
