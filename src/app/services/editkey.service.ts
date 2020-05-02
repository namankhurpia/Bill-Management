import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditkeyService {

  constructor() { }

  private key =new BehaviorSubject<string>("NOKEY");
  newkey = this.key.asObservable();

  changekey(keyparam:string)
  {
    this.key.next(keyparam);
  }
  
}
