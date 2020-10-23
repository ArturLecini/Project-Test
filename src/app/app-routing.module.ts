import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { LoginComponent } from './core/user/login/login.component';
import { AddUserComponent } from './core/admin/add-user/add-user.component';
import { EditUserComponent } from './core/admin/edit-user/edit-user.component';
import { SignUpComponent } from './core/user/sign-up/sign-up.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AboutComponent } from './modules/home/about/about.component';
import { LoginDeactivateGuard } from './core/guards/loginGuard/deactivate/login-deactivate.guard';
import { LayoutComponent } from './core/layout/layout.component';
import { AccountComponent } from './core/user/account/account.component';
import { ServiceService } from './core/services/service.service';
import { ServiceComponent } from './shared/service/service.component';

const routes: Routes = [
  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'home', component : HomeComponent  },
  {path :'login', component : LoginComponent,canActivate:[AuthGuard], data: ["ADMIN"],canDeactivate:[LoginDeactivateGuard]},
  {path: 'add-user', component : AddUserComponent},
  {path: 'edit-user', component : EditUserComponent},
  {path : 'sign-up', component: SignUpComponent},
  {path : 'about-us', component: AboutComponent},
  {path : 'account', component: AccountComponent},
  {path : 'layout', component: LayoutComponent ,canActivate:[AuthGuard], data:['ADMIN']},
  {path : 'services', component:ServiceComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
