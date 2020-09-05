import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewScrapeComponent } from './view-scrape.component';

describe('ViewScrapeComponent', () => {
  let component: ViewScrapeComponent;
  let fixture: ComponentFixture<ViewScrapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewScrapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewScrapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
