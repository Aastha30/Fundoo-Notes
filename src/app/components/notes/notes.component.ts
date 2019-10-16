import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/note.service';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { MatDialog } from '@angular/material';
import { ChangeViewService } from 'src/app/service/change-view.service';
import { Note } from 'src/app/model/note.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notes = [];
  view: any;
  direction: any;
  constructor(private noteService: NoteService) { }

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


}
