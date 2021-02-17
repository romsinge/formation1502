import { TestBed, async, inject } from '@angular/core/testing';

import { FormExitGuard } from './form-exit.guard';

describe('FormExitGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormExitGuard]
    });
  });

  it('should ...', inject([FormExitGuard], (guard: FormExitGuard) => {
    expect(guard).toBeTruthy();
  }));
});
