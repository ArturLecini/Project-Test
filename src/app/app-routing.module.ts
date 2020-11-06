import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './modules/user/login/login.component';
import { AddUserComponent } from './modules/admin/add-user/add-user.component';

import { ListUserComponent } from './modules/admin/list-user/list-user.component';
import { SignUpComponent } from './modules/user/sign-up/sign-up.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AboutComponent } from './shared/about/about.component';

import { LayoutComponent } from './core/layout/layout.component';
import { AccountComponent } from './modules/user/account/account.component';

import { ServiceComponent } from './shared/service/service.component';
import { MainHomeComponent } from './modules/home/main-home/main-home.component';
import { HomeComponent } from './modules/home/home.component';
import { ChangePasswComponent } from './modules/user/change-passw/change-passw.component';

const routes: Routes = [
  
   { path: '', redirectTo: '/login', pathMatch: 'full' },
   {path :'login', component : LoginComponent,canActivate:[AuthGuard],data:['ADMIN'] },
   {path : 'sign-up', component: SignUpComponent},
   {path : 'changepassw', component: ChangePasswComponent},

   {path : 'layout', component: LayoutComponent },
  { path: 'add-user', component: AddUserComponent,canActivate: [AuthGuard], data: {role: 'admin'} },
  { path: 'list-user', component: ListUserComponent,canActivate: [AuthGuard], data: {role: 'admin'} },
  {path : 'account', component: AccountComponent,canActivate: [AuthGuard], data: {role: 'admin'}},

  {path: 'home-root', component : MainHomeComponent },
  {path: 'home', component : HomeComponent },
 
  {path : 'about-us', component: AboutComponent},
 
  {path : 'services', component:ServiceComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
