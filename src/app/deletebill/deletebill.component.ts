import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';
import { map, delay } from 'rxjs/operators';
import { SigninholderService } from '../services/signinholder.service';
import { DataService } from '../services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deletebill',
  templateUrl: './deletebill.component.html',
  styleUrls: ['./deletebill.component.css']
})
export class DeletebillComponent implements OnInit {
  msgus: string;
  msgpw:string;
  session: boolean=false;

  constructor(private http: HttpClient,private signinholder:SigninholderService, private dss:DataService) { }
  
  

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
        'https://generatebill.firebaseio.com/'+this.msgus+'.json'
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


  
  deletebill(position:string,obj:string)
  {
    

    let count:number=0;
    
    //console.log("cancel bill cliked " + position );
    this.http
      .get<{ [key: string]: Post }>(
        'https://generatebill.firebaseio.com/'+this.msgus+'.json'
      )
      .pipe(
        map(responseData => {
          const postsArray: Post[] = [];
        
          for (let key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
              count = count+1;
              if(count+""==position)
              {
                //console.log(key);
                
                this.http.patch<any>('https://generatebill.firebaseio.com/'+this.msgus+'/'+key+'.json',{iscancelled:true})
                .subscribe((data) =>{
                    console.log("REQUEST SECCUESS");
                    //
                    this.fetchPosts();
                    this.ngOnInit();
                    
                });
                

              }
              
            }
          }
          
          

          
        })
      )
      .subscribe(posts => {
        Swal.fire(
          'Great!',
          'Cancelling your bill ' ,
          'success'
        )
        
      });

      
      
    
  }


}
