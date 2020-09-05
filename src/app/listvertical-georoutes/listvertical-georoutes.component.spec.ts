import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListverticalGeoroutesComponent } from './listvertical-georoutes.component';

describe('ListverticalGeoroutesComponent', () => {
  let component: ListverticalGeoroutesComponent;
  let fixture: ComponentFixture<ListverticalGeoroutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListverticalGeoroutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListverticalGeoroutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
