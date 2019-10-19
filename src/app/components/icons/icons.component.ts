import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/service/note.service';
import { MatSnackBar } from '@angular/material';
import { Note } from 'src/app/model/note.model';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  @Input() note: any;
  now = new Date();

  constructor(private noteService: NoteService, private snackBar: MatSnackBar) { }

  arrayColor = [
    [
      {
        name: 'white', hexcode: '#ffffff '
      },
      {
        name: 'light red', hexcode: '#f28b82'
      },
      {
        name: 'yellow', hexcode: '#fbbc04'
      },
      {
        name: 'lemonYellow', hexcode: '#fff475'
      },
    ],
    [
      {
        name: 'lightGreen', hexcode: '#ccff90'
      },
      {
        name: 'Pale Turquoise', hexcode: '#a7ffeb'
      },
      {
        name: 'lightBlue', hexcode: '#cbf0f8'
      },
      {
        name: 'Pale Cornflower Blue', hexcode: '#aecbfa'
      },
    ],
    [
      {
        name: ' Pale Purple', hexcode: '#d7aefb'
      },
      {
        name: 'Lavender Pink', hexcode: ' #fdcfe8 '
      },
      {
        name: 'beige', hexcode: '#e6c9a8 '
      }
      ,
      {
        name: 'Solitude', hexcode: '#e8eaed'
      }
    ],
  ];


  ngOnInit() {
  }

  add_alert() {
  }

  setReminder(message: string) {
    let tempDate: any;
    let reminder: any;
    if (message === 'today') {
      tempDate = this.now;
    } else if (message === 'tomorrow') {
      tempDate = this.now.setDate(this.now.getDate() + 1);
    } else if (message === 'week') {
      tempDate = this.now.setDate(this.now.getDate() + 7);
    }
    reminder = formatDate(tempDate, 'yyyy-MM-ddT20:00:00', 'en-IND', '+5:30');
    this.noteService.addReminder(this.note.noteID, reminder)
      .subscribe((response: any) => {
        if (response.statusCode === 200) {
          this.snackBar.open(response.statusMessage, 'Undo', { duration: 2500 });
          this.note = response.body;
        } else {
          this.snackBar.open(response.statusMessage, 'Undo', { duration: 2500 });
        }
        console.log(response);
      });
  }
  color_lens() {
    console.log('Note Color');
  }

  changeColor(color: any) {
    console.log('Inside change color: hex code:' + color);
    this.note.color = color;
    this.noteService.updateNotes(this.note).subscribe(
      (response: any) => {
        if (response.statusCode === 200) {
          console.log(response);
          this.snackBar.open(response.statusMessage, 'undo', { duration: 2500 });
        } else {
          console.log(response);
        }
      });
  }

  archive() {
    this.note.archive = !this.note.archive;
    this.noteService.updateNotes(this.note).subscribe(
      (response: any) => {
        if (response.statusCode === 200) {
          console.log(response);
          this.snackBar.open('Note archived', 'Undo', { duration: 2500 });
        } else {
          console.log(response);
        }
      });
  }

  deleteNote() {
    this.note.trash = true;
    this.noteService.updateNotes(this.note).subscribe(
      (response: any) => {
        if (response.statusCode === 200) {
          console.log(response);
          this.snackBar.open('Note trashed', 'Undo', { duration: 2500 });
        } else {
          console.log(response);
        }
      });

  }
}
