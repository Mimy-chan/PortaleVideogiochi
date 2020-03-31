import { TestBed } from '@angular/core/testing';

import { LoginAdminGuardService } from './login-admin-guard.service';

describe('LoginAdminGuardService', () => {
  let service: LoginAdminGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginAdminGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
