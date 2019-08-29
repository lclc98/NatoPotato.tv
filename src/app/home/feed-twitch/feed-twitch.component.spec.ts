import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedTwitchComponent } from './feed-twitch.component';

describe('FeedTwitchComponent', () => {
  let component: FeedTwitchComponent;
  let fixture: ComponentFixture<FeedTwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedTwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedTwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
