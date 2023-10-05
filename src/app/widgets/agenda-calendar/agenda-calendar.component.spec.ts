import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaCalendarComponent } from './agenda-calendar.component';

describe('AgendaCalendarComponent', () => {
  let component: AgendaCalendarComponent;
  let fixture: ComponentFixture<AgendaCalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgendaCalendarComponent]
    });
    fixture = TestBed.createComponent(AgendaCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
