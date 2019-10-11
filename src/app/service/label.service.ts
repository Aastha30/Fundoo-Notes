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

  fetchLabels(): any {
    return this.http.get<Label[]>(this.url + 'fetch', httpOptions );
  }

  updateLabels(label: Label , labelID: number): any {
    return this.http.put<Label[]>(this.url + 'update/' + labelID , label  , httpOptions);
  }
}
