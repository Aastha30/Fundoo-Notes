import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  emailID: string;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  constructor(private userService: UserService, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
  }

  onforgot() {
    return this.userService.forgotPassword(this.emailID)
    .subscribe((response: any) => {
      if ( response.statusCode === 202) {
        this.snackBar.open(response.body.statusMessage, '', {duration: 2000, verticalPosition: 'bottom'});
        console.log(response);
        this.router.navigateByUrl('/login');
      } else {
        console.log(response);
      }
    });



  }

}
