import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedInstagramComponent } from './feed-instagram.component';

describe('FeedInstagramComponent', () => {
  let component: FeedInstagramComponent;
  let fixture: ComponentFixture<FeedInstagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedInstagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedInstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
