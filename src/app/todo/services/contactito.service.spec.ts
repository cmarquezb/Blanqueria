import { TestBed } from '@angular/core/testing';

import { ContactitoService } from './contactito.service';

describe('ContactitoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactitoService = TestBed.get(ContactitoService);
    expect(service).toBeTruthy();
  });
});
