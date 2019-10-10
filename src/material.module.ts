import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatInputModule, MatCardModule, MatButtonModule,
  MatIconModule, MatToolbarModule, MatMenuModule,
  MatDividerModule, MatRippleModule, MatDialogModule,
  MatSnackBarModule, MatRadioModule, MatSidenavModule
} from '@angular/material';


@NgModule({
  exports: [
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatRadioModule,
    CommonModule,
    MatSidenavModule,
    MatMenuModule,
    MatDividerModule,
    MatRippleModule,
    MatDialogModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
