import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedTwitterComponent } from './feed-twitter.component';

describe('FeedTwitterComponent', () => {
  let component: FeedTwitterComponent;
  let fixture: ComponentFixture<FeedTwitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedTwitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedTwitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
