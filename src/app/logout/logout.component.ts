import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _authservice:AuthService, private _router:Router) { }

  ngOnInit() {
    this._authservice.logout();
    this._router.navigate(["login"]);
  }

}
