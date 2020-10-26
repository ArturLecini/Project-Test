import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './modules/user/login/login.component';
import { AddUserComponent } from './modules/admin/add-user/add-user.component';
import { EditUserComponent } from './modules/admin/edit-user/edit-user.component';
import { ListUserComponent } from './modules/admin/list-user/list-user.component';
import { SignUpComponent } from './modules/user/sign-up/sign-up.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AboutComponent } from './shared/about/about.component';

import { LayoutComponent } from './core/layout/layout.component';
import { AccountComponent } from './modules/user/account/account.component';

import { ServiceComponent } from './shared/service/service.component';
import { MainHomeComponent } from './modules/home/main-home/main-home.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  
   { path: '', redirectTo: '/login', pathMatch: 'full' },
   {path :'login', component : LoginComponent,canActivate:[AuthGuard],data:['ADMIN'] },
   {path : 'sign-up', component: SignUpComponent},
   {path : 'layout', component: LayoutComponent ,canActivate:[AuthGuard], data:['ADMIN']},
 
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },

  {path: 'home-root', component : MainHomeComponent },
  {path: 'home', component : HomeComponent },
 
  {path : 'about-us', component: AboutComponent},
  {path : 'account', component: AccountComponent},
  {path : 'services', component:ServiceComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
