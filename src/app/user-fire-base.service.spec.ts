import { TestBed, inject } from '@angular/core/testing';

import { UserFireBaseService } from './user-fire-base.service';

describe('UserFireBaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserFireBaseService]
    });
  });

  it('should be created', inject([UserFireBaseService], (service: UserFireBaseService) => {
    expect(service).toBeTruthy();
  }));
});
