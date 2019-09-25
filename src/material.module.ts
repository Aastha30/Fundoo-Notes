import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule, MatCardModule, MatButtonModule, MatIconModule, MatToolbarModule, MatRadioModule} from '@angular/material';


@NgModule({
   // declarations: [],
  exports: [
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatRadioModule,
    CommonModule
  ]
})
export class MaterialModule { }
