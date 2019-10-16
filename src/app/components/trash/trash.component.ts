import { Component, OnInit, Input } from '@angular/core';
import { ChangeViewService } from 'src/app/service/change-view.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { NoteService } from 'src/app/service/note.service';
import { Note } from 'src/app/model/note.model';
// import { TrashIconComponent } from '../trash-icon/trash-icon.component';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  trashNotes: [];
  view: any;
  direction: any;
  constructor(private changeViewService: ChangeViewService, private dialog: MatDialog,
              private noteService: NoteService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.fetchTrashedNotes();

    this.changeViewService.getView().subscribe(
      (res) => {
        this.view = res;
        this.direction = this.view.data;
        console.log(this.direction);
      });

  }

  fetchTrashedNotes() {
    this.noteService.fetchTrashedNotes().subscribe(
      (response: any) => {
        if (response.statusCode === 200) {
          this.trashNotes = response.body;
          console.log(response);
        } else {
          console.log(response);
        }
      });

  }

  onDelete(noteID: number) {
    this.noteService.deleteNotes(noteID).subscribe(
      (response: any) => {
        if (response.statusCode === 200) {
          this.trashNotes = response.body;
          console.log(response);
          this.snackBar.open(response.statusMessage, 'Undo', { duration: 2500});
        } else {
          console.log(response);
        }
      });
  }

  onRestore(note: any) {
    note.trash = false;
    this.noteService.updateNotes(note).subscribe(
      (response: any) => {
        if (response.statusCode === 200) {
          this.trashNotes = response.body;
          console.log(response);
          this.snackBar.open('Note restored', 'Undo', { duration: 2500});
        } else {
          console.log(response);
        }
      });

  }
}

