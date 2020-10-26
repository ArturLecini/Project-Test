import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core'; 
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS,} from "@angular/common/http";

import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { AboutComponent } from './shared/about/about.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { LayoutComponent } from './core/layout/layout.component';


import { AddUserComponent } from './modules/admin/add-user/add-user.component';
import { EditUserComponent } from './modules/admin/edit-user/edit-user.component';
import { UserComponent } from './modules/user/user.component';
import { LoginComponent } from './modules/user/login/login.component';
import { SignUpComponent } from './modules/user/sign-up/sign-up.component';
import { ListUserComponent } from './modules/admin/list-user/list-user.component';

import { HomeComponent } from './modules/home/home.component';
import { AccountComponent, } from './modules/user/account/account.component';
import { MainHomeComponent } from './modules/home/main-home/main-home.component';
import { MinitoolbarComponent } from './core/layout/minitoolbar/minitoolbar.component';


import { ServiceComponent } from './shared/service/service.component';
import { AuthGuard } from './core/guards/auth.guard';
import { MaterialModule } from './styles/material/material.module'; 

import { ApiService } from './core/services/api.service';
import {TokenInterceptor} from "./core/interceptor";

import { DialogContentComponent } from './modules/admin/list-user/dialog-content/dialog-content.component';




@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    LayoutComponent,
      UserComponent,
      LoginComponent,
      SignUpComponent,
      

      ServiceComponent,
      MainHomeComponent,
      HomeComponent,
      MinitoolbarComponent,
    
    FooterComponent,
    AccountComponent,





DialogContentComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule ,
    FlexLayoutModule ,
   ReactiveFormsModule,
   MaterialModule,
    AppRoutingModule
  
  ],
  providers: [AuthGuard,ApiService,{provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
