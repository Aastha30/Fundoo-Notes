import { Component, OnInit } from '@angular/core';
import { ChangeViewService } from 'src/app/service/change-view.service';
import { Label } from 'src/app/model/label.model';
import { LabelService } from 'src/app/service/label.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  show: boolean;
  search = '';
  labels: Label[];

  constructor(private labelService: LabelService, private changeViewService: ChangeViewService) {
    this. fetchLabels();
  }

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

  fetchLabels() {
    this.labelService.fetchLabels().subscribe(
      (response: any) => {
        this.labels = response.body;
        console.log(response);
      }
    );
  }


}
