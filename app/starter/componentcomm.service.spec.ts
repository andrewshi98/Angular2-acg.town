import { TestBed, inject } from '@angular/core/testing';

import { ComponentcommService } from './componentcomm.service';

describe('ComponentcommService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentcommService]
    });
  });

  it('should be created', inject([ComponentcommService], (service: ComponentcommService) => {
    expect(service).toBeTruthy();
  }));
});
