import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';
import { map, delay } from 'rxjs/operators';
import { SigninholderService } from '../services/signinholder.service';
import { DataService } from '../services/data.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopoverComponent } from '../popover/popover.component';
import { EditkeyService } from '../services/editkey.service';
import { EventEmitterService } from '../services/event-emitter.service';

@Component({
  selector: 'app-editbill',
  templateUrl: './editbill.component.html',
  styleUrls: ['./editbill.component.css']
})

export class EditbillComponent implements OnInit {

  msgus: string;
  msgpw:string;
  session: boolean=false;

  constructor(private eventEmitterService: EventEmitterService    ,private keyobj:EditkeyService,public dialog: MatDialog,private http: HttpClient,private signinholder:SigninholderService, private dss:DataService,private router:Router) { }
  
  
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


  if (this.eventEmitterService.subsVar==undefined) {    
    this.eventEmitterService.subsVar = this.eventEmitterService.    
    invokeFirstComponentFunction.subscribe((name:string) => {    
        this.close();   
    });    
  }   

}

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


  
  editbill(position:string,obj:string)
  {
    
    let count:number=0;
    
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
              count = count+1;
              if(count+""==position)
              {
                this.keyobj.changekey(key);
                
              }
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
        this.openDialog();
      });

      

      
    
  }

  openDialog() {
    let dialogRef = this.dialog.open(PopoverComponent, {
      width: '1200px',
      height : '570px',
     
    }); 
  }

  close()
  {
    
    this.dialog.closeAll();
    
    this.fetchPosts();
    this.ngOnInit();
  }

    
    
  
  


}

