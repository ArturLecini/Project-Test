import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core'; 
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './modules/home/pages/home/home.component';

import { AddUserComponent } from './core/admin/add-user/add-user.component';
import { EditUserComponent } from './core/admin/edit-user/edit-user.component';
import { ListUserComponent } from './core/admin/list-user/list-user.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { AboutComponent } from './modules/home/about/about.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule} from '@angular/forms';
import { AuthGuard } from './core/guards/auth.guard';
import { LayoutComponent } from './core/layout/layout.component';
import { LoginDeactivateGuard } from './core/guards/loginGuard/deactivate/login-deactivate.guard';
import { MaterialModule } from './styles/material/material.module';
import { UserComponent } from './core/user/user.component';
import { LoginComponent } from './core/user/login/login.component';
import { SignUpComponent } from './core/user/sign-up/sign-up.component';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    LayoutComponent,
      UserComponent,
      LoginComponent,
      SignUpComponent
      

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
   ReactiveFormsModule,
  
   MaterialModule
  ],
  providers: [AuthGuard,LoginDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
