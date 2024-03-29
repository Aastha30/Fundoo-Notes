import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeViewService {

  result: boolean;
  subject = new Subject();

  constructor() { }

  getView() {
    this.gridview();
    return this.subject.asObservable();
  }

  gridview() {
    if (this.result) {
      this.subject.next({ data: 'row' });
      this.result = false;
    } else {
      this.subject.next({ data: 'column' });
      this.result = true;
    }
  }
}
