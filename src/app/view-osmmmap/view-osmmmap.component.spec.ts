import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOsmmmapComponent } from './view-osmmmap.component';

describe('ViewOsmmmapComponent', () => {
  let component: ViewOsmmmapComponent;
  let fixture: ComponentFixture<ViewOsmmmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOsmmmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOsmmmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
