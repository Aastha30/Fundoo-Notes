import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/login.model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();

  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  constructor(private userService: UserService, private snackbar: MatSnackBar, private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    return this.userService.login(this.login)
      .subscribe(response => {
        if (response.statusCode === 200) {
          this.snackbar.open(response.statusMessage, 'undo', { duration: 2500, verticalPosition: 'bottom'});
          console.log(response);
          localStorage.setItem('token', response.body.token);
          localStorage.setItem('firstName', response.body.firstName);
          localStorage.setItem('lastName', response.body.lastName);
          localStorage.setItem('emailID', response.body.emailID);
          this.router.navigateByUrl('/dashboard');
        } else {
          this.snackbar.open(response.statusMessage, 'undo', { duration: 2500, verticalPosition: 'bottom'});
          console.log(response);
        }
      });
  }

}
