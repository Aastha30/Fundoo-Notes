import { Component, OnInit } from '@angular/core';
import { ResetPassword } from 'src/app/model/reset-password.model';
import { UserService } from 'src/app/service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  setPassword: ResetPassword = new ResetPassword();
  token: string;

  constructor(private userService: UserService, private snackBar: MatSnackBar, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token');
  }
  resetPassword() {
    return this.userService.resetPassword(this.setPassword, this.token)
      .subscribe((response: any) => {
        if (response.statusCode === 200) {
          this.snackBar.open(response.body.statusMessage, '', {duration: 2000, verticalPosition: 'bottom'});
          console.log(response);
          this.router.navigateByUrl('/login');
        } else {
          this.snackBar.open(response.body.statusMessage, '', {duration: 2000, verticalPosition: 'bottom'});
          console.log(response);
        }

      });
  }
}
