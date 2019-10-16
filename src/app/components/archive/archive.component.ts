import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/note.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  archivedNotes: [];

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.fetchArchivedNotes();
  }

  fetchArchivedNotes() {
    this.noteService.fetchArchivedNotes().subscribe(
      (response: any) => {
        if (response.statusCode === 200) {
        this.archivedNotes = response.body;
        console.log(response);
        } else {
          console.log(response);
        }
      });

  }
}
