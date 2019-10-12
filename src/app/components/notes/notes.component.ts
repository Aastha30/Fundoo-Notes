import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/note.service';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { MatDialog } from '@angular/material';
import { ChangeViewService } from 'src/app/service/change-view.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notes = [];
  view: any;
  direction: any;

  constructor(private noteService: NoteService, private dialog: MatDialog, private changeViewService: ChangeViewService) { }

  ngOnInit() {
    this.fetchNotes();
    this.changeViewService.getView().subscribe(
    (res) => {
                this.view = res;
                this.direction = this.view.data;
                console.log(this.direction);
      });

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
          height: 'auto',
          data: {
                 title: note.title,
                  description: note.description,
                  noteID: note.noteID
                }

        });
    }
}
