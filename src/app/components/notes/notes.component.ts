import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/note.service';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notes = [];
  view: any;

  constructor(private noteService: NoteService, private dialog: MatDialog) { }

  ngOnInit() {
    this.fetchNotes();

  }

  fetchNotes() {
    this.noteService.fetchNotes().subscribe(
     (response: any) => {
       this.notes = response.body;
       console.log(response);
     }
    );
    }


    onUpdate(note: any): void {
      console.log('note1', note);
      const dialogRef = this.dialog.open(UpdateNoteComponent, {
          width: '430px',
          height: '210px',
          data: {
                 title: note.title,
                  description: note.description,
                  noteId: note.noteId
                }

        });
    }
}
