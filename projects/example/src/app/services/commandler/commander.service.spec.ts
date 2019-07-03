import {TestBed} from '@angular/core/testing';

import {CommandlerService} from './commandler.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CommandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: CommandlerService = TestBed.get(CommandlerService);
    expect(service).toBeTruthy();
  });
});
