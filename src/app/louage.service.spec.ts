import { TestBed } from '@angular/core/testing';

import { LouageService } from './louage.service';

describe('LouageService', () => {
  let service: LouageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LouageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
