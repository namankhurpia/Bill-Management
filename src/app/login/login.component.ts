import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { SigninholderService } from '../services/signinholder.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  ngOnInit() {
  }
  username = ''
  password = ''
  role = ''

  constructor(public fb: FormBuilder,private router: Router,private signinholder:SigninholderService) {

  }

  loginForm = this.fb.group({
    username : [''],
    password: ['']
  })

  onLogin()
  {


    this.username = this.loginForm.get('username').value;
    this.password = this.loginForm.get('password').value;

    //console.log("username is "+this.username+" password "+this.password);
    if(this.username=="" && this.password=="")
    {
      this.signinholder.trylogin(this.username,this.password);

      Swal.fire(
        'Good job!',
        'You logged in',
        'success'
      )
      

      this.router.navigate(['/home/']);

    }
    else if(this.username=="" && this.password=="")
    {
      this.signinholder.trylogin(this.username,this.password);

      Swal.fire(
        'Good job!',
        'You logged in',
        'success'
      )
      
      this.router.navigate(['/home/']);
    }
    else if(this.username=="" && this.password=="")
    {
      this.signinholder.trylogin(this.username,this.password);
      Swal.fire(
        'Good job!',
        'You logged in',
        'success'
      )
      
      this.router.navigate(['/home/']);
    }
    else
    {
      Swal.fire('Oops...', 'Wrong username or password!', 'error')
    }


  }

}
