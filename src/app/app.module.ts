import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MatRadioModule } from '@angular/material';
import { AddnewbillComponent } from './addnewbill/addnewbill.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card/typings/card-module';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ViewbillComponent } from './viewbill/viewbill.component';
import { DeletebillComponent } from './deletebill/deletebill.component';
import { environment } from 'src/environments/environment';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FullbillComponent } from './fullbill/fullbill.component';
import {MatSelectModule} from '@angular/material/select';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { EditbillComponent } from './editbill/editbill.component';
import { PopoverComponent } from './popover/popover.component';
import { EventEmitter } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AddnewbillComponent,
    ViewbillComponent,
    DeletebillComponent,
    FullbillComponent,
    EditbillComponent,
    PopoverComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MDBBootstrapModule.forRoot(),
    MatDialogModule,
    MatRadioModule,
    MatSelectModule
    
    
  ],
  entryComponents: [
    PopoverComponent
  ],
  providers: [EventEmitter],
  bootstrap: [AppComponent]
})
export class AppModule { }
