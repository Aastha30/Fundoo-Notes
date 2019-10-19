import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/note.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {
  notes: [];
  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.fetchReminderNotes();
  }

  fetchReminderNotes() {
    this.noteService.fetchReminderNotes().subscribe(
      (response: any) => {
        this.notes = response.body;
        console.log(response);
      });
  }
}
