import { TestBed } from '@angular/core/testing';

import { TwitchService } from './twitch.service';

describe('TwitchLiveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TwitchService = TestBed.get(TwitchService);
    expect(service).toBeTruthy();
  });
});
