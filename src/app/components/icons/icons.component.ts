import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/service/note.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  constructor() { }

  arrayColor = [
    [
      {
        name: 'white', hexcode: '#ffffff '
      },
      {
        name: 'orange', hexcode: '#f28b82'
      },
      {
        name: 'yellow1', hexcode: '#fbbc04'
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
        name: 'seaGreen', hexcode: '#a7ffeb'
      },
      {
        name: 'lightBlue', hexcode: '#cbf0f8'
      },
      {
        name: 'violet', hexcode: '##aecbfa'
      },
    ],
    [
      {
        name: 'purple', hexcode: '#d7aefb'
      },
      {
        name: 'lightPink', hexcode: ' #fdcfe8 '
      },
      {
        name: 'beige', hexcode: '#e6c9a8 '
      }
      ,
      {
        name: 'grey', hexcode: '#e8eaed'
      }
    ],
  ];


  ngOnInit() {
  }

}
