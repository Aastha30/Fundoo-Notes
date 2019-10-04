import { Component, OnInit } from '@angular/core';
import { ChangeViewService } from 'src/app/service/change-view.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  show: boolean;
  search = '';
  open: boolean;

  constructor(private changeViewService: ChangeViewService) { }

  ngOnInit() {
  }

  changeView(show: boolean) {
    this.show = !show;
    this.changeViewService.changeView();
  }

  clear() {
    this.search = '';
  }

  openImageDialog() {

  }


}
