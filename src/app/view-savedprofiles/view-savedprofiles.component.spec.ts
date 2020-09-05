import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSavedprofilesComponent } from './view-savedprofiles.component';

describe('ViewSavedprofilesComponent', () => {
  let component: ViewSavedprofilesComponent;
  let fixture: ComponentFixture<ViewSavedprofilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSavedprofilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSavedprofilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
