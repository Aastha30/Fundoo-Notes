import { TestBed } from '@angular/core/testing';

import { ChangeViewService } from './change-view.service';

describe('ChangeViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangeViewService = TestBed.get(ChangeViewService);
    expect(service).toBeTruthy();
  });
});
