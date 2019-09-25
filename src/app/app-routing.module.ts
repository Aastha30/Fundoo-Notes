import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerfiyUserComponent } from './components/verfiy-user/verfiy-user.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    redirectTo: '/register',
    pathMatch: 'full'

  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'forgotpassword',
    component: ForgotPasswordComponent
  },
  {
    path: 'verify/:token',
    component: VerfiyUserComponent
  },
  {
    path: 'resetpassword/:token',
    component: ResetPasswordComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
