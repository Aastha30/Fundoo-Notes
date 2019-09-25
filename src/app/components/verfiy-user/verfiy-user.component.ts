import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verfiy-user',
  templateUrl: './verfiy-user.component.html',
  styleUrls: ['./verfiy-user.component.scss']
})
export class VerfiyUserComponent implements OnInit {

  token: string;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token');
  }

  verifyUser() {
    return this.userService.verifyUser(this.token)
      .subscribe((response: any) => {
        if (response.statusCode === 200) {
          console.log(response);
          this.router.navigateByUrl('/login');
        } else {
          console.log(response);
        }


      });
  }

}

