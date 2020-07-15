import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1';
  constructor(private _http : HttpClient) { }

  public loginUser(user:User):Observable<any>{
    console.log("--4-- In RegistrationService loginUser Call")
   return this._http.post<any>(this.baseUrl+"/login",user);
  }

  async loginUserSynchronousCall(user:User):Promise<any>{
    console.log("--4-- In RegistrationService lohinUserSynchronousCall")
    return await this._http.post(this.baseUrl+"/login",user).toPromise();
   }

  public registerUser(user:User):Observable<any>{
    return this._http.post<any>(this.baseUrl+"/register",user);
   }
}
