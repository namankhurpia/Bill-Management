import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

import { Router } from '@angular/router';
import { Post } from '../models/post.model';
import { map } from 'rxjs/operators';
import { DataService } from '../services/data.service';
import { SigninholderService } from '../services/signinholder.service';

import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-addnewbill',
  templateUrl: './addnewbill.component.html',
  styleUrls: ['./addnewbill.component.css']
})
export class AddnewbillComponent implements OnInit {
  

  constructor(public signinholder:SigninholderService,public fb: FormBuilder,private http: HttpClient, private router: Router,private dss:DataService) { }

  msgus:string='';
  msgpw:string='';
  session=false;
  

  

  ngOnInit() {
    this.signinholder.newpassword.subscribe(msgus => this.msgus = msgus);
    this.signinholder.newpassword.subscribe(msgpw => this.msgpw = msgpw);
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
    
    this.fetchPosts();
  }

  require: any;
  name: '';
  date :'';
  p1 : '';
  p2:'';
  p3:'';
  p4:'';
  p5:'';
  v1:number=0;
  v2:number=0;
  v3:number=0;
  v4:number=0;
  v5:number=0;
  total:number=0;
  financialyear:'';
  totalinwords:'';

  organizationTypeArr = [
    { id : '2019-20', value: '2019-20'},
    { id : '2020-21', value: '2020-21'},
    { id : '2021-22', value: '2021-22'},
    { id : '2022-23', value: '2022-23'},
    { id : '2023-24', value: '2023-24'},
  ];


  addform = this.fb.group({

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


  
  submit()
  {


    console.log("submit perfromed")
    this.name = this.addform.get('name').value;
    this.date = this.addform.get('date').value;
    this.p1 = this.addform.get('p1').value;
    this.v1 = this.addform.get('v1').value;
    this.p2 = this.addform.get('p2').value;
    this.v2 = this.addform.get('v2').value;
    this.p3 = this.addform.get('p3').value;
    this.v3 = this.addform.get('v3').value;
    this.p4 = this.addform.get('p4').value;
    this.v4 = this.addform.get('v4').value;
    this.p5 = this.addform.get('p5').value;
    this.v5 = this.addform.get('v5').value;
    this.financialyear = this.addform.get('financialyear').value;
    
    
    
    this.total= +this.v1+ +this.v2+ +this.v3+ +this.v4+ +this.v5;
    var writtenNumber = require('written-number');
    this.totalinwords = writtenNumber(+this.total);
    this.totalinwords += ' only.'

    if(this.name=="" || this.date=="")
    {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Kindly fill Name and Date'
      })
    }
    else
    {
      
      this.dss.changemessage(this.name,this.date,this.total,this.count,this.p1,this.p2,this.p3,this.p4,this.p5,this.v1,this.v2,this.v3,this.v4,this.v5,"false",this.financialyear,this.totalinwords);
      
    // console.log(this.total  );
      this.http.post<any>('https://urlhere.com/'+this.msgus+'.json',{ name: this.name, date: this.date,total:this.total,count:this.count, p1:this.p1,v1:this.v1, p2:this.p2,v2:this.v2,p3:this.p3,v3:this.v3,p4:this.p4,v4:this.v4,p5:this.p5,v5:this.v5,iscancelled:false,financialyear:this.financialyear,totalinwords:this.totalinwords})
      .subscribe(responseData =>{
  
        //console.log(responseData)
        Swal.fire(
          'Good job!',
          'Creating your bill',
          'success'
        )
        this.router.navigate(['/fullbill/']);
      
      },
      error => console.log('oops', error)
      );
    }
    
  }



  loadedPosts: Post[] = [];
  isFetching = false;
  count :number=0;

  //here
  fetchPosts() {
    this.isFetching = true;
    this.http
      .get<{ [key: string]: Post }>(
        'https://urlhere.firebaseio.com/'+this.msgus+'.json'
      )
      .pipe(
        map(responseData => {
          const postsArray: Post[] = [];
          
          
          for (const key in responseData) {
            
            
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });

              //console.log(responseData[key])
              
              
              for(const i in responseData[key])
              {
                this.count = +this.count+1;
              }
              

              
            }
          }
          return postsArray;
        })
      )
      .subscribe(posts => {
        this.isFetching = false;
        this.loadedPosts = posts;
        
        //console.log("count at end is "+this.count);
        this.count = this.count/17 +1 ;
        
        //console.log(this.name,this.date,this.total,this.count,this.p1,this.p2,this.p3,this.p4,this.p5,this.v1,this.v2,this.v3,this.v4,this.v5);

        
        
      });
  }





















}
