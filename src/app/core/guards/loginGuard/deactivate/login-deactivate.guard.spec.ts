import { TestBed } from '@angular/core/testing';

import { LoginDeactivateGuard } from './login-deactivate.guard';

describe('LoginDeactivateGuard', () => {
  let guard: LoginDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
