import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatInputModule, MatCardModule, MatButtonModule,
  MatIconModule, MatToolbarModule, MatMenuModule, MatDividerModule, MatRippleModule, MatDialogModule
} from '@angular/material';


import { MatRadioModule } from '@angular/material/radio';


import { MatSidenavModule } from '@angular/material/sidenav';


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
    MatDialogModule
  ]
})
export class MaterialModule { }
