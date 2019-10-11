import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { FlexLayoutModule} from '@angular/flex-layout';
import { UserService } from './service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VerfiyUserComponent } from './components/verfiy-user/verfiy-user.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AddNotesComponent } from './components/addNotes/addNotes.component';
import { UpdateNoteComponent } from './components/update-note/update-note.component';
import { NotesComponent } from './components/notes/notes.component';
import { UpdateLabelComponent } from './components/update-label/update-label.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    VerfiyUserComponent,
    ToolbarComponent,
    AddNotesComponent,
    NotesComponent,
    UpdateNoteComponent,
    UpdateLabelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  entryComponents: [
    UpdateNoteComponent
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
