import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators'; 


import { Post } from '../models/post.model';
import { SigninholderService } from '../services/signinholder.service';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewbill',
  templateUrl: './viewbill.component.html',
  styleUrls: ['./viewbill.component.css']
})
export class ViewbillComponent implements OnInit {
  msgus: string;
  msgpw:string;
  session: boolean=false;

  
  constructor(private http: HttpClient,private signinholder:SigninholderService,private dss:DataService,private router:Router) { }
  
  

  loadedPosts: Post[] = [];
  isFetching = false;

  

  async ngOnInit() {
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

  fetchPosts() {
    this.isFetching = true;
    this.http
      .get<{ [key: string]: Post }>(
        'https://urlhere.com/'+this.msgus+'.json'
      )
      .pipe(
        map(responseData => {
          const postsArray: Post[] = [];
          
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });

              
            }
          }
          return postsArray;
        })
      )
      .subscribe(posts => {
        this.isFetching = false;
        this.loadedPosts = posts;
        
      });
  }


  newname:string='';
  newdate:string='';
  newtotal:number=0;
  newcount:number=0;
  newp1:string='';
  newp2:string='';
  newp3:string='';
  newp4:string='';
  newp5:string='';
  newv1:number=0;
  newv2:number=0;
  newv3:number=0;
  newv4:number=0;
  newv5:number=0;
  newiscancelled='';
  newfinancialyear='';
  newtotalinwords='';


  viewbill(position:string,obj:string)
  {

    let count:number=0;
    
    //console.log("view bill cliked " + position );
    this.http
      .get<{ [key: string]: Post }>(
        'https://urlhere.com/'+this.msgus+'.json'
      )
      .pipe(
        map(responseData => {
          const postsArray: Post[] = [];
        
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          
          //console.log(postsArray);
          
          for(const i in postsArray)
          {
           
            if(+i+1 +""== position )
            {
               const Postobj:Post = postsArray[i];
               this.dss.changemessage(Postobj.name,Postobj.date,Postobj.total,Postobj.count,Postobj.p1,Postobj.p2,Postobj.p3,Postobj.p4,Postobj.p5,Postobj.v1,Postobj.v2,Postobj.v3,Postobj.v4,Postobj.v5,Postobj.iscancelled,Postobj.financialyear,Postobj.totalinwords);

            }
          }
          
        })
      )
      .subscribe(posts => {
        
      });

      //console.log("VIEWING");
      this.router.navigate(['/fullbill/']);

      
    
  }


}