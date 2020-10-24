import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core'; 
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddUserComponent } from './modules/admin/add-user/add-user.component';
import { EditUserComponent } from './modules/admin/edit-user/edit-user.component';
import { ListUserComponent } from './modules/admin/list-user/list-user.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { AboutComponent } from './shared/about/about.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule} from '@angular/forms';
import { AuthGuard } from './core/guards/auth.guard';
import { LayoutComponent } from './core/layout/layout.component';

import { MaterialModule } from './styles/material/material.module';
import { UserComponent } from './modules/user/user.component';
import { LoginComponent } from './modules/user/login/login.component';
import { SignUpComponent } from './modules/user/sign-up/sign-up.component';
import { AccountComponent, DialogContent } from './modules/user/account/account.component';
import { ServiceComponent } from './shared/service/service.component';
import { MainHomeComponent } from './modules/home/main-home/main-home.component';
import { HomeComponent } from './modules/home/home.component';
import { MinitoolbarComponent } from './core/layout/minitoolbar/minitoolbar.component';
import { ButtonComponent } from './core/layout/button/button.component';






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
      AccountComponent,
      ServiceComponent,
      MainHomeComponent,
      HomeComponent,
      MinitoolbarComponent,
      ButtonComponent,
    FooterComponent,
DialogContent
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
  providers: [AuthGuard,],
  bootstrap: [AppComponent]
})
export class AppModule { }
