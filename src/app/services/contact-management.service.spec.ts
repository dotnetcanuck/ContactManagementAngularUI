/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContactManagementService } from './contact-management.service';

describe('Service: ContactManagement', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactManagementService]
    });
  });

  it('should ...', inject([ContactManagementService], (service: ContactManagementService) => {
    expect(service).toBeTruthy();
  }));
});
