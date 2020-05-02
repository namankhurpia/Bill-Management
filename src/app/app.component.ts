import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigninholderService } from './services/signinholder.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit() {
    
  }
  constructor(private router: Router,private signinholder:SigninholderService)
  {
    
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

  logout()
  {
    this.signinholder.trylogin('INVALID','INVALID');
    this.router.navigate(['/login/']);
  }

  editbill()
  {
    this.router.navigate(['/editbill/']);
  }

  







}
