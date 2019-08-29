import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitetvComponent } from './unitetv.component';

describe('UniteTVComponent', () => {
  let component: UnitetvComponent;
  let fixture: ComponentFixture<UnitetvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitetvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitetvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
