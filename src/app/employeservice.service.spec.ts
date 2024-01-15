import { TestBed } from '@angular/core/testing';

import { EmployeserviceService } from './employeservice.service';

describe('EmployeserviceService', () => {
  let service: EmployeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
