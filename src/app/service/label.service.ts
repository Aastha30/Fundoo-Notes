import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Label } from '../model/label.model';

const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json', token: localStorage.getItem('token')})} ;
@Injectable({
  providedIn: 'root'
})
export class LabelService {

  private url = 'http://localhost:8080/fundoo/label/';

  constructor(private http: HttpClient) { }

  createLabel(label: any): any {
    return this.http.post<Label[]>(this.url + 'create', label, httpOptions);
  }

  deleteLabel(labelID: number): any {
    return this.http.delete(this.url + 'delete/' + labelID, httpOptions);
  }

  fetchLabels(): any {
    return this.http.get<Label[]>(this.url + 'fetch', httpOptions );
  }

  updateLabel(label: Label): any {
    return this.http.put<Label[]>(this.url + 'update', label  , httpOptions);
  }
}
