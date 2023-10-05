import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerTimeCalendarComponent } from './prayer-time-calendar.component';

describe('PrayerTimeCalendarComponent', () => {
  let component: PrayerTimeCalendarComponent;
  let fixture: ComponentFixture<PrayerTimeCalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrayerTimeCalendarComponent]
    });
    fixture = TestBed.createComponent(PrayerTimeCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
