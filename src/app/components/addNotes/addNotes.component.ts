import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { NoteService } from 'src/app/service/note.service';
import { Note } from 'src/app/model/note.model';

@Component({
  selector: 'app-add-notes',
  templateUrl: './addNotes.component.html',
  styleUrls: ['./addNotes.component.scss']
})
export class AddNotesComponent implements OnInit {
  note: any;
  expand = false;
  formGroup: FormGroup;
  constructor(private snackbar: MatSnackBar, private noteService: NoteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.formGroup = new FormGroup(
      {
        title: new FormControl(''),
        description: new FormControl('')
      }
    );
  }

  expandNote() {
    this.expand = !this.expand;
  }

  onClose() {
    this.note = this.formGroup.value;
    this.expand = false;
    if (this.note.title !== '' || this.note.description !== '') {
      console.log(this.note);
      this.noteService.createNote(this.note)
        .subscribe((response: any) => {
          if (response.statusCode === 200) {
            console.log(response);
            this.snackbar.open(response.statusMessage, 'undo', { duration: 2500 });
          } else {
            console.log(response);
          }
        });
    }
  }
}
