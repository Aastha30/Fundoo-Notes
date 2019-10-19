import { Component, OnInit, Input } from '@angular/core';
import { ChangeViewService } from 'src/app/service/change-view.service';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { NoteService } from 'src/app/service/note.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
@Input() notes: any;
  view: any;
  direction: any;
  constructor(private noteService: NoteService, private changeViewService: ChangeViewService,
              private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit() {

    this.changeViewService.getView().subscribe(
      (res) => {
        this.view = res;
        this.direction = this.view.data;
        console.log(this.direction);
      });

  }

  onUpdate(note: any): void {
    console.log('note1', note);
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: '430px',
      height: 'auto',
      data: note,
      panelClass: 'custom-dialog-container'
    });
  }
  onRemoveReminder(note: any) {
    this.noteService.removeReminder(note.noteID)
      .subscribe((response: any) => {
        console.log(response.body);
        if (response.statusCode === 200) {
          this.snackBar.open(response.statusMessage, 'Undo', { duration: 2500 });
        }
      });
}
}
