import { TestBed } from '@angular/core/testing';

import { FirebasestorageService } from './firebasestorage.service';

describe('FirebasestorageService', () => {
  let service: FirebasestorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebasestorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
