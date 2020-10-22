import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core'; 
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './modules/home/pages/home/home.component';
import { LoginComponent } from './core/user/login/login.component';
import { AddUserComponent } from './core/admin/add-user/add-user.component';
import { EditUserComponent } from './core/admin/edit-user/edit-user.component';
import { ListUserComponent } from './core/admin/list-user/list-user.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SignUpComponent } from './core/user/sign-up/sign-up.component';
import { AboutComponent } from './modules/home/about/about.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './styles/material/material.module';
import { ReactiveFormsModule} from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    HeaderComponent,
    FooterComponent,
    SignUpComponent,
    AboutComponent,
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule ,
    FlexLayoutModule ,
   MaterialModule,
   ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
