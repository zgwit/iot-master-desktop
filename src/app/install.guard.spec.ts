import { TestBed } from '@angular/core/testing';

import { InstallGuard } from './install.guard';

describe('InstallGuard', () => {
  let guard: InstallGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InstallGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
