import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { SigninholderService } from '../services/signinholder.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  msgus :string = '';
  msgpw :string ='';  

  username:string='INVALID'
  session=false;
  constructor(private router: Router,private signinholder:SigninholderService) { }

  ngOnInit() {

      this.signinholder.newpassword.subscribe(msgus => this.msgus = msgus);
      this.signinholder.newpassword.subscribe(msgpw => this.msgpw = msgpw);
      if(this.msgus=='bhupesh')
      {
          this.username='Bhupesh Khurpia';
      }
      else if(this.msgus=='palash')
      {
        this.username='Palash Khurpia';
      }
      else if(this.msgus=='calculation')
      {
        this.username='The calculation';
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

  }

  home()
  {
    this.router.navigate(['/home/']);
  }


  addnewbill()
  {
    this.router.navigate(['/add/']);
  }

  viewbill()
  {
    this.router.navigate(['/view/']);
  }

  deletebill()
  {
    this.router.navigate(['/delete/']);
  }
  fullbill()
  {
    this.router.navigate(['/fullbill/']);
  }

}
