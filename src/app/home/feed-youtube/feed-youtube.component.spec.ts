import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedYoutubeComponent } from './feed-youtube.component';

describe('FeedYoutubeComponent', () => {
  let component: FeedYoutubeComponent;
  let fixture: ComponentFixture<FeedYoutubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedYoutubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
