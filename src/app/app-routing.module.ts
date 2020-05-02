import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddnewbillComponent } from './addnewbill/addnewbill.component';
import { ViewbillComponent } from './viewbill/viewbill.component';
import { DeletebillComponent } from './deletebill/deletebill.component';
import { FullbillComponent } from './fullbill/fullbill.component';
import { EditbillComponent } from './editbill/editbill.component';
import { PopoverComponent } from './popover/popover.component';



const routes: Routes = [
  { path:'' , redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'add', component:AddnewbillComponent},
  {path:'view',component:ViewbillComponent},
  {path:'delete',component:DeletebillComponent},
  {path:'fullbill',component:FullbillComponent},
  {path:'editbill',component:EditbillComponent},
  {path:'popover',component:PopoverComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
