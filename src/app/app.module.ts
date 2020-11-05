import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { AboutComponent } from './shared/about/about.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { LayoutComponent } from './core/layout/layout.component';


import { AddUserComponent } from './modules/admin/add-user/add-user.component';

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


import { DeleteDialogComponent } from './modules/admin/list-user/delete-dialog/delete-dialog.component';
import { EditDialogComponent } from './modules/admin/list-user/edit-dialog/edit-dialog.component';
import { AuthService } from './modules/user/auth.service';
import { TokenInterceptor} from './core/interceptor';
import { ChangePasswComponent } from './modules/user/change-passw/change-passw.component';
import { DataService } from './modules/admin/data.service';
import { DmatSpinnerOverlayComponent } from './shared/dmat-spinner-overlay/dmat-spinner-overlay.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
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
    DeleteDialogComponent,
EditDialogComponent,
ChangePasswComponent,
DmatSpinnerOverlayComponent
 

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule ,
    FlexLayoutModule ,
   ReactiveFormsModule,
   MaterialModule,
    AppRoutingModule,
   
  ],
  providers: [AuthGuard,AuthService ,DataService, {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true},
    {provide : MAT_DIALOG_DATA, useValue:{}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
