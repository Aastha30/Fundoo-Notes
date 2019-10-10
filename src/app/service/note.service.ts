import { Injectable } from '@angular/core';
import { Note } from '../model/note.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json', token: localStorage.getItem('token')})} ;
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
    return this.http.get<Note[]>(this.url + 'fetch', httpOptions );
  }

  fetchArchivedNotes(): any {
    return this.http.get<Note[]>(this.url + 'fetchArchive', httpOptions );
  }

  fetchTrashedNotes(): any {
    return this.http.get<Note[]>(this.url + 'fetchTrashe', httpOptions );
  }
}

