import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerfiyUserComponent } from './components/verfiy-user/verfiy-user.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { AddNotesComponent } from './components/addNotes/addNotes.component';
import { Note } from './model/note.model';
import { ArchiveComponent } from './components/archive/archive.component';
import { DisplayNotesComponent } from './components/display-notes/display-notes.component';
import { NotesComponent } from './components/notes/notes.component';
import { TrashComponent } from './components/trash/trash.component';
import { ReminderComponent } from './components/reminder/reminder.component';

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
    component: DashboardComponent, children: [
      {
        path: '', component: AddNotesComponent
      },
      {
        path: 'display', component: DisplayNotesComponent
      },
      {
        path: 'editlabel', redirectTo: '/dashboard', pathMatch: 'full'
      },
      {
        path: 'notes', redirectTo: '/dashboard', pathMatch: 'full'
      },
      {
        path: 'archive', component: ArchiveComponent
      },
      {
        path: 'trash', component: TrashComponent
      },
      {
        path: 'reminder', component: ReminderComponent
      }

    ]
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
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
