import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeViewService {

  private view = new BehaviorSubject(false);
  currentView = this.view.asObservable();

  private xyz;

  constructor() {
  }

  changeView() {
    this.currentView.subscribe(
      response =>
      this.xyz = response
    );
    this.view.next(!this.xyz);
  }
}
