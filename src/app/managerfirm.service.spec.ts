import { TestBed } from '@angular/core/testing';

import { ManagerfirmService } from './managerfirm.service';

describe('ManagerfirmService', () => {
  let service: ManagerfirmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerfirmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
