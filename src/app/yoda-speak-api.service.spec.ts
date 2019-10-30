import { TestBed } from '@angular/core/testing';

import { YodaSpeakApiService } from './services/yoda-speak-api.service';
import { HttpClientTestingModule  } from '@angular/common/http/testing';
describe('YodaSpeakApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: YodaSpeakApiService = TestBed.get(YodaSpeakApiService);
    expect(service).toBeTruthy();
  });
});
