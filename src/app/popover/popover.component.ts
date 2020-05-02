import { Component, OnInit, OnChanges, HostListener, Renderer2 } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SigninholderService } from '../services/signinholder.service';
import { EditkeyService } from '../services/editkey.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { EventEmitterService } from '../services/event-emitter.service';


@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.css']
})
export class PopoverComponent implements OnInit {

  require: any
  organizationTypeArr = [
    { id : '2019-20', value: '2019-20'},
    { id : '2020-21', value: '2020-21'},
    { id : '2021-22', value: '2021-22'},
    { id : '2022-23', value: '2022-23'},
    { id : '2023-24', value: '2023-24'},
  ];


  newname:string='';
  newdate:string='';
  newtotal:number=0;
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
  newfinancialyear:string='';
  totalinwords:string='';
  

  oldname:string='';
  olddate:string='';
  oldtotal:string='';
  oldcount:string='';
  oldp1:string='';
  oldp2:string='';
  oldp3:string='';
  oldp4:string='';
  oldp5:string='';
  oldv1:string='';
  oldv2:string='';
  oldv3:string='';
  oldv4:string='';
  oldv5:string='';
  oldiscancelled:string='';
  oldfinancialyear:string=''

  
  msgus:string='';
  msgpw:string='';
  key:string='';
  session=false;
  
    
 

  constructor( private eventEmitterService: EventEmitterService  ,private router:Router,private http: HttpClient,private keyobj:EditkeyService,private dss:DataService, private fb:FormBuilder, private signinholder:SigninholderService) { 
    this.dss.newname.subscribe(oldname => this.oldname = oldname);
    this.dss.newdate.subscribe(olddate => this.olddate = olddate);
    this.dss.newtotal.subscribe(oldtotal => this.oldtotal = oldtotal);
    this.dss.newcount.subscribe(oldcount => this.oldcount = oldcount);
    this.dss.newp1.subscribe(oldp1 => this.oldp1 = oldp1);
    this.dss.newp2.subscribe(oldp2 => this.oldp2 = oldp2);
    this.dss.newp3.subscribe(oldp3 => this.oldp3 = oldp3);
    this.dss.newp4.subscribe(oldp4 => this.oldp4 = oldp4);
    this.dss.newp5.subscribe(oldp5 => this.oldp5 = oldp5);

    this.dss.newv1.subscribe(oldv1 => this.oldv1 = oldv1);
    this.dss.newv2.subscribe(oldv2 => this.oldv2 = oldv2);
    this.dss.newv3.subscribe(oldv3 => this.oldv3 = oldv3);
    this.dss.newv4.subscribe(oldv4 => this.oldv4 = oldv4);
    this.dss.newv5.subscribe(oldv5 => this.oldv5 = oldv5);
    this.dss.newiscancelled.subscribe(oldiscancelled => this.oldiscancelled = this.oldiscancelled);
    this.dss.newfinancialyear.subscribe(oldfinancialyear => this.oldfinancialyear = this.oldfinancialyear);

   
    
  }

  async ngOnInit() {
    this.signinholder.newpassword.subscribe(msgus => this.msgus = msgus);
    this.signinholder.newpassword.subscribe(msgpw => this.msgpw = msgpw);
    this.keyobj.newkey.subscribe(key => this.key = key);
    console.log(this.key);
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

     

    

  }

  
  editform = this.fb.group({

    name : [''],
    date: [''],
    p1:[''],
    p2:[''],
    p3:[''],
    p4:[''],
    p5:[''],
    v1:[''],
    v2:[''],
    v3:[''],
    v4:[''],
    v5:[''],
    financialyear:['']
    
  })

  onSubmitEdit()
  {

    this.newname = this.editform.get('name').value;
    this.newdate = this.editform.get('date').value;
    this.newp1 = this.editform.get('p1').value;
    this.newv1 = this.editform.get('v1').value;
    this.newp2 = this.editform.get('p2').value;
    this.newv2 = this.editform.get('v2').value;
    this.newp3 = this.editform.get('p3').value;
    this.newv3 = this.editform.get('v3').value;
    this.newp4 = this.editform.get('p4').value;
    this.newv4 = this.editform.get('v4').value;
    this.newp5 = this.editform.get('p5').value;
    this.newv5 = this.editform.get('v5').value;
    this.newfinancialyear = this.editform.get('financialyear').value;

     this.newtotal = +this.newv1+ +this.newv2 + +this.newv3 + +this.newv4 + +this.newv5;
     var writtenNumber = require('written-number');
    this.totalinwords = writtenNumber(+this.newtotal);
    this.totalinwords += ' only.'

    console.log("SUBMIT MADE");
    
    this.http.patch<any>('https://urlhere.com/'+this.msgus+'/'+this.key+'.json',{total:this.newtotal, name: this.newname, date: this.newdate, p1:this.newp1,v1:this.newv1, p2:this.newp2,v2:this.newv2,p3:this.newp3,v3:this.newv3,p4:this.newp4,v4:this.newv4,p5:this.newp5,v5:this.newv5,financialyear:this.newfinancialyear,totalinwords:this.totalinwords})
                .subscribe((data) =>{

                  Swal.fire(
                    'Yaay!',
                    'Edited Successfully',
                    'success'
                  )
                  this.eventEmitterService.oninvokefunction();    
                                  
                });
    
  }


  close(){    
    this.eventEmitterService.oninvokefunction();    
  }  

 
  

}
