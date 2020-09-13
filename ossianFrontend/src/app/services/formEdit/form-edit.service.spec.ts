import { TestBed } from '@angular/core/testing';

import { FormEditService } from './form-edit.service';

describe('FormEditService', () => {
  let service: FormEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
