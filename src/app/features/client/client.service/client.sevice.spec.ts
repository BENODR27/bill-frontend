import { TestBed } from '@angular/core/testing';

import { ClientSevice } from './client.sevice';

describe('ClientSevice', () => {
  let service: ClientSevice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientSevice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
