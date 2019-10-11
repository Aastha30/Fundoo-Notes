import { Component, OnInit } from '@angular/core';
import { LabelService } from 'src/app/service/label.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-update-label',
  templateUrl: './update-label.component.html',
  styleUrls: ['./update-label.component.scss']
})
export class UpdateLabelComponent implements OnInit {


  constructor(private snackBar: MatSnackBar, private labelService: LabelService) {

  }

  ngOnInit() {
  }


}


