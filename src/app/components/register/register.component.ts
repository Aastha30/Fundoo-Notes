import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onRegister() {
    return this.userService.register(this.user)
      .subscribe(response => {
        if (response.statusCode === 200) {
          console.log(response);
          this.router.navigateByUrl('/login');
        } else {
          console.log(response);
        }
      });
  }

}
