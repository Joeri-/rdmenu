import { TestBed, inject } from '@angular/core/testing';

import { CarrService } from './carr.service';

describe('CarrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarrService]
    });
  });

  it('should ...', inject([CarrService], (service: CarrService) => {
    expect(service).toBeTruthy();
  }));
});
