import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import { NoteService } from 'src/app/service/note.service';
import { Note } from 'src/app/model/note.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  note = new Note();
  expand = false;
  title = new FormControl();
  description = new FormControl();
  constructor(private snackbar: MatSnackBar, private noteService: NoteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  expandNote() {
    this.expand = !this.expand;
  }

  onClose() {
    this.expand = false;
    if (this.note.title !== undefined || this.note.description !== undefined) {
      console.log(this.note);
      return this.noteService.createNote(this.note)
        .subscribe(response => {
          if (response.statusCode === 200) {
            console.log(response);
            this.snackbar.open(response.statusMessage, 'undo', { duration: 2500 });
          } else {
            console.log(response);
            this.snackbar.open(response.statusMessage, 'Undo', { duration: 2500 });
          }
        });
    }

  }
}
