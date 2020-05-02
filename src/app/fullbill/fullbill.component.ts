import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import { AddnewbillComponent } from '../addnewbill/addnewbill.component';
import { DataService } from '../services/data.service';
import { delay, timeout } from 'rxjs/operators';
import { SigninholderService } from '../services/signinholder.service';
@Component({
  selector: 'app-fullbill',
  templateUrl: './fullbill.component.html',
  styleUrls: ['./fullbill.component.css']
})
export class FullbillComponent implements OnInit {
 
 
  newname:string='';
  newdate:string='';
  newtotal:string='';
  newcount:string='';
  newp1:string='';
  newp2:string='';
  newp3:string='';
  newp4:string='';
  newp5:string='';
  newv1:string='';
  newv2:string='';
  newv3:string='';
  newv4:string='';
  newv5:string='';
  newiscancelled:string='';
  newtotalinwords:string='';
  newfinancialyear:string='';
  

  withrsnewv1:string='';
  withrsnewv2:string='';
  withrsnewv3:string='';
  withrsnewv4:string='';
  withrsnewv5:string='';
  withrsnewtotal:string='';


  msgus :string = '';
  msgpw :string ='';  

  username:string='INVALID';
  userb:boolean=false;
  userp:boolean=false;
  userc:boolean=false;
  session=false;

  constructor(private dss:DataService,private signinholder:SigninholderService) {}

  async ngOnInit() {

    this.signinholder.newpassword.subscribe(msgus => this.msgus = msgus);
      this.signinholder.newpassword.subscribe(msgpw => this.msgpw = msgpw);
      if(this.msgus=='bhupesh')
      {
          this.username='Bhupesh Khurpia';
          this.userb = true;
      }
      else if(this.msgus=='palash')
      {
        this.username='Palash Khurpia';
        this.userp = true;
      }
      else if(this.msgus=='calculation')
      {
        this.username='The calculation';
        this.userc = true;
      }

      
      if(this.msgus=='bhupesh' || this.msgus=='palash' || this.msgus=='calculation')
      {
        this.session=true;
        console.log(this.session);
      }
      else
      {
        this.session=false;
        console.log(this.session);
      }


        this.dss.newname.subscribe(newname => this.newname = newname);
        this.dss.newdate.subscribe(newdate => this.newdate = newdate);
        this.dss.newtotal.subscribe(newtotal => this.newtotal = newtotal);
        this.dss.newcount.subscribe(newcount => this.newcount = newcount);
        this.dss.newp1.subscribe(newp1 => this.newp1 = newp1);
        this.dss.newp2.subscribe(newp2 => this.newp2 = newp2);
        this.dss.newp3.subscribe(newp3 => this.newp3 = newp3);
        this.dss.newp4.subscribe(newp4 => this.newp4 = newp4);
        this.dss.newp5.subscribe(newp5 => this.newp5 = newp5);

        this.dss.newv1.subscribe(newv1 => this.newv1 = newv1);
        
        this.dss.newv2.subscribe(newv2 => this.newv2 = newv2);
        this.dss.newv3.subscribe(newv3 => this.newv3 = newv3);
        this.dss.newv4.subscribe(newv4 => this.newv4 = newv4);
        this.dss.newv5.subscribe(newv5 => this.newv5 = newv5);
        this.dss.newfinancialyear.subscribe(newfinancialyear => this.newfinancialyear = newfinancialyear);
        this.dss.newiscancelled.subscribe(newiscancelled => this.newiscancelled = newiscancelled);
        this.dss.newtotalinwords.subscribe(newtotalinwords => this.newtotalinwords = newtotalinwords);
        
       /*
       console.log(this.newname);
        console.log(this.newdate);
        console.log(this.newcount);
        console.log(this.newtotal);
        console.log(this.newp1);
        console.log(this.newp2);
        console.log(this.newp3);
        console.log(this.newp4);
        console.log(this.newp5);
        console.log(this.newv1);
        console.log(this.newv2);
        console.log(this.newv3);
        console.log(this.newv4);
        console.log(this.newv5);
        */
        //this.runafter();
  }

  

  printbill()
  {
    console.log(this.newtotalinwords);
    console.log("print clicked");
    window.print();
    //await delay(1000);

  }

 


  
  

  

  

  

}
