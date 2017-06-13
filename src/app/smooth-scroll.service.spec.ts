import { TestBed, inject } from '@angular/core/testing';

import { SmoothScrollService } from './smooth-scroll.service';

describe('SmoothScrollService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmoothScrollService]
    });
  });

  it('should be created', inject([SmoothScrollService], (service: SmoothScrollService) => {
    expect(service).toBeTruthy();
  }));
});
