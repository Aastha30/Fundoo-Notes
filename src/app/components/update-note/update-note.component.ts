import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { NoteService } from 'src/app/service/note.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  note: any;
  title = new FormControl(this.data.title);
  noteID = this.data.noteID;
  description = new FormControl(this.data.description);

  constructor( public dialogRef: MatDialogRef<UpdateNoteComponent>, private snackbar: MatSnackBar,
               private noteService: NoteService, private router: Router,
               @Inject(MAT_DIALOG_DATA) public data: any) {
    this.note = data;
  }

  ngOnInit() {
  }
  onClose() {
    console.log(this.data);
    this.noteService.updateNotes(this.note)
      .subscribe((response: any) => {

        if (response.statusCode === 200) {
          console.log(response);
          this.snackbar.open(response.statusMessage, 'undo', { duration: 2500 });
        } else {
          console.log(response);
        }
      });
    this.dialogRef.close();
  }
}
