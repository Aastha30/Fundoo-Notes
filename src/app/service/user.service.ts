import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../model/login.model';
import { ResetPasswordComponent } from '../components/reset-password/reset-password.component';
import { ResetPassword } from '../model/reset-password.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
    private url = 'http://localhost:8080/fundoo/user/';

    register(user: User): any {
      return this.http.post(this.url + 'register', user);

    }

    login(login: Login): any {
      return this.http.post(this.url + 'login', login);
    }

    forgotPassword(emailID: string) {
      return this.http.post(this.url + 'forgotpassword?emailID=' + emailID, '');
    }

    verifyUser(token: string) {
      return this.http.get(this.url + 'verify/' + token);
    }

    resetPassword(resetPassword: ResetPassword, token: string): any {
      return this.http.put(this.url + 'resetpassword/' + token, resetPassword);
    }

  }
