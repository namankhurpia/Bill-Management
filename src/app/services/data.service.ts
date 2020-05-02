import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private namemsg =new BehaviorSubject<string>("kindly login again");
  newname = this.namemsg.asObservable();

  private datemsg =new BehaviorSubject<string>("login again");
  newdate = this.datemsg.asObservable();

  private countmsg = new BehaviorSubject<string>(" ");
  newcount = this.countmsg.asObservable();

  private totalmsg = new BehaviorSubject<string>(" ");
  newtotal = this.totalmsg.asObservable();

  private p1msg =new BehaviorSubject<string>("");
  newp1 = this.p1msg.asObservable();

  private p2msg =new BehaviorSubject<string>("");
  newp2 = this.p2msg.asObservable();

  private p3msg =new BehaviorSubject<string>("");
  newp3 = this.p3msg.asObservable();

  private p4msg =new BehaviorSubject<string>(" ");
  newp4 = this.p4msg.asObservable();

  private p5msg =new BehaviorSubject<string>(" ");
  newp5 = this.p5msg.asObservable();

  private v1msg =new BehaviorSubject<string>(" ");
  newv1 = this.v1msg.asObservable();

  private v2msg =new BehaviorSubject<string>(" ");
  newv2 = this.v2msg.asObservable();

  private v3msg =new BehaviorSubject<string>(" ");
  newv3 = this.v3msg.asObservable();

  private v4msg =new BehaviorSubject<string>(" ");
  newv4 = this.v4msg.asObservable();

  private v5msg =new BehaviorSubject<string>(" ");
  newv5 = this.v5msg.asObservable();

  private iscancelledmsg =new BehaviorSubject<string>(" ");
  newiscancelled = this.iscancelledmsg.asObservable();
  
  private financialyearmsg =new BehaviorSubject<string>(" ");
  newfinancialyear = this.financialyearmsg.asObservable();
  

  private totalinwordsmsg =new BehaviorSubject<string>(" ");
  newtotalinwords = this.totalinwordsmsg.asObservable();
  


  constructor() { }

  changemessage(newname:string,newdate:string,newtotal:number,newcount:number,newp1:string,newp2:string,newp3:string,newp4:string,newp5:string,newv1:number,newv2:number,newv3:number,newv4:number,newv5:number,newiscancelled:string,newfinancialyear:string,newtotalinwords:string)
  {
    this.namemsg.next(newname);
    this.datemsg.next(newdate);
    this.totalmsg.next(newtotal+"");
    this.countmsg.next(newcount+"");
    this.p1msg.next(newp1);
    this.p2msg.next(newp2);
    this.p3msg.next(newp3);
    this.p4msg.next(newp4);
    this.p5msg.next(newp5);

    
    if(newv1!=0)
    {
      this.v1msg.next(`₹ ${newv1}`);
    }
    else
    {
      this.v1msg.next(newv1+"");
    }


    if(newv2!=0)
    {
      this.v2msg.next(`₹ ${newv2}`);
    }
    else
    {
      this.v2msg.next(newv2+"");
    }


    if(newv3!=0)
    {
      this.v3msg.next(`₹ ${newv3}`);
    }
    else
    {
      this.v3msg.next(newv3+"");
    }


    if(newv4!=0)
    {
      this.v4msg.next(`₹ ${newv4}`);
    }
    else
    {
      this.v4msg.next(newv4+"");
    }


    if(newv5!=0)
    {
      this.v5msg.next(`₹ ${newv5}`);
    }
    else
    {
      this.v5msg.next(newv5+"");
    }


    if(newtotal!=0)
    {
      this.totalmsg.next(`₹ ${newtotal}`);
    }
    else
    {
      this.totalmsg.next(newtotal+"");
    }


    this.iscancelledmsg.next(newiscancelled);
    this.financialyearmsg.next(newfinancialyear);
    this.totalinwordsmsg.next(newtotalinwords);


  }
}
