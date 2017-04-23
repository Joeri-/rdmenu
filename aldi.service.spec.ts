import { TestBed, inject } from '@angular/core/testing';

import { AldiService } from './aldi.service';

describe('AldiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AldiService]
    });
  });

  it('should ...', inject([AldiService], (service: AldiService) => {
    expect(service).toBeTruthy();
  }));
});
