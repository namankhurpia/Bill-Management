import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigninholderService {

  constructor() { }

  private username =new BehaviorSubject<string>("wrong ");
  newusername = this.username.asObservable();

  private password =new BehaviorSubject<string>("wrong password");
  newpassword = this.password.asObservable();

  trylogin(usernameparam:string,passwordparam:string)
  {
    this.username.next(usernameparam);
    this.password.next(passwordparam);
  }

  
}
