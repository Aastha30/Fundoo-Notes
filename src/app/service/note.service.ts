import { Injectable } from '@angular/core';
import { Note } from '../model/note.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', token: localStorage.getItem('token') }) };
@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private url = 'http://localhost:8080/fundoo/note/';

  constructor(private http: HttpClient) { }

  createNote(note: Note): any {
    return this.http.post(this.url + 'create', note, httpOptions);
  }

  fetchNotes(): any {
    return this.http.get<Note[]>(this.url + 'fetch', httpOptions);
  }

  updateNotes(note: any): any {
    return this.http.put<Note[]>(this.url + 'update', note, httpOptions);
  }

  deleteNotes(noteID: number): any {
    return this.http.delete(this.url + 'delete/' + noteID , httpOptions);
  }

  fetchArchivedNotes(): any {
    return this.http.get<Note[]>(this.url + 'fetchArchive', httpOptions);
  }

  fetchTrashedNotes(): any {
    return this.http.get<Note[]>(this.url + 'fetchTrash', httpOptions);
  }

  addReminder(noteID: number, reminder: string): any {
    return this.http.get(this.url + 'addReminder/' + noteID + '?reminder=' + reminder, httpOptions);
  }

  removeReminder(noteID: number): any {
    return this.http.get(this.url + 'removeReminder/' + noteID , httpOptions);
  }

  fetchReminderNotes(): any {
    return this.http.get(this.url + 'fetchReminder', httpOptions);
  }
}

