import { Component, OnInit } from '@angular/core';
import { ChangeViewService } from 'src/app/service/change-view.service';
import { Label } from 'src/app/model/label.model';
import { LabelService } from 'src/app/service/label.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material';
import { EditLabelComponent } from '../edit-label/edit-label.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  appName: string;
  list: boolean;
  grid = true;
  search = '';
  labels: Label[];
  emailID: string;
  fullName: string;
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor(private labelService: LabelService, private dialog: MatDialog,
              private router: Router, private changeViewService: ChangeViewService) {
    this.fetchLabels();
    this.emailID = localStorage.getItem('emailID');
    this.fullName = localStorage.getItem('firstName') + ' ' + localStorage.getItem('lastName');
  }

  ngOnInit() {
  }

  changeView() {
    if (this.list) {
      this.grid = true;
      this.list = false;
    } else {
      this.list = true;
      this.grid = false;
    }
    this.changeViewService.gridview();

  }
  clear() {
    this.search = '';
  }

  openImageDialog() {

  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  fetchLabels() {
    this.labelService.fetchLabels().subscribe(
      (response: any) => {
        this.labels = response.body;
        console.log(response);
      }
    );
  }
   onEditLabel() {
    const dialogRef = this.dialog.open(EditLabelComponent, {
      width: '315px',
      height: 'auto',
      data: this.labels,
      panelClass: 'custom-dialog-container'
    });
  }

  onReminder() {
    this.router.navigateByUrl('/dashboard/reminder');
  }

  onArchive() {
    this.router.navigateByUrl('/dashboard/archive');
  }
  onTrash() {
    this.router.navigateByUrl('/dashboard/trash');
  }


}
