import { Component, OnInit } from '@angular/core';
import { PrayerTime, PrayerTimesWithRestTimes, TimeCustom } from 'src/app/models/prayerTime.model';
import { GlobalConstants } from 'src/app/global/globalConstants';
import { CalendarService } from 'src/app/services/calendar.service';
import { LocationService } from 'src/app/services/location.service';
import { Coords } from 'src/app/models/coords.model';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prayer-time-calendar',
  templateUrl: './prayer-time-calendar.component.html',
  styleUrls: ['./prayer-time-calendar.component.scss']
})
export class PrayerTimeCalendarComponent implements OnInit {

  constants: GlobalConstants = new GlobalConstants();

  public dateNow: Date = new Date();
  public timeNow = {
    hours: NaN,
    minutes: NaN
  };
  public dateGregorian!: any;
  public dateHijri!: any;
  public location!: Coords;
  public locationAddress!: any;
  public prayerTimes: PrayerTime = new PrayerTime;
  public prayerTimesCalendar: PrayerTime[] = [];

  public upcomingPrayerTime: PrayerTimesWithRestTimes = {};

  public prayerTimesWithRestTimes: PrayerTimesWithRestTimes[] = [];

  constructor(private calendarService: CalendarService,
              private locationService: LocationService,
              private translateService: TranslateService,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(params => {
      if(params['lang']) {
        this.translateService.use(params['lang']);
      }
      else {
        this.translateService.use(this.constants._lang);
      }
    })

    setInterval(() => {
      this.dateNow = new Date(); // new Date('May 04, 2023 19:14:07');
      this.timeNow = {
        hours: this.dateNow.getHours(),
        minutes: this.dateNow.getMinutes()
      };
      this.checkUpcomingPrayerTime();
    }, 1000);

    this.getCurrentPosition();
  }

  getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
        this.getPrayerTimesByCoordinates(this.location.latitude, this.location.longitude);
      },
      (error) => {
        this.locationService.getAddressViaIPAddress().subscribe(
          addressRes => {
            this.location = {
              latitude: addressRes.latitude,
              longitude: addressRes.longitude
            }
            this.getPrayerTimesByCoordinates(this.location.latitude, this.location.longitude);
          }
        )
      }
    );
  }

  getPrayerTimesByCoordinates(latitude: number = 0, longitude: number = 0) {
    var params = {latitude: latitude, longitude: longitude};
    this.calendarService.getDateHijriForToday(params).subscribe(
      result => {
        // this.method = result.data.meta.method;
        this.getAddressViaCoordinates(latitude,longitude);
        this.prayerTimes = result.data.timings;
        this.dateGregorian = result.data.date.gregorian;
        this.dateHijri = result.data.date.hijri;
        this.checkUpcomingPrayerTime();
      }
    )
  }

  getAddressViaCoordinates(latitude: number, longitude: number) {
    this.locationService.getAddressViaCoordinates(latitude,longitude).subscribe(
      addressRes => {
        this.locationAddress = addressRes.address;
        // console.log(this.locationAddress);
      }
    )
  }

  checkUpcomingPrayerTime() {

    var keys = ['Fajr','Dhuhr','Asr','Maghrib','Isha'];

    var restTime;

    this.prayerTimesWithRestTimes = [];

    keys.forEach(key => {
      restTime = this.getRestTime(key);
      // console.log(restTime);
      this.prayerTimesWithRestTimes.push({
        prayer: key,
        title: GlobalConstants.prayerTimes[key],
        time: this.prayerTimes[key as keyof PrayerTime],
        restTime: (restTime?.h || 0) * 60 * 60 * 60 + (restTime?.m || 0) * 60 * 60 + (restTime?.s || 0) * 60,
        restTimeCustom: restTime
      });

    })

    // console.log(this.prayerTimesWithRestTimes);

    this.upcomingPrayerTime = this.prayerTimesWithRestTimes.reduce((prev: any, curr: any) => (prev.restTime <= curr.restTime) && (prev.restTime > 0) ? prev : curr);

    // console.log(this.upcomingPrayerTime);
  }

  getRestTime(prayerName: string = ""): TimeCustom {

    var diff = NaN;
    var result = null;

    var time = {
      hours: NaN,
      minutes: NaN
    }

    time.hours = Number(this.prayerTimes[prayerName as keyof PrayerTime]?.split(':')[0]);
    time.minutes = Number(this.prayerTimes[prayerName as keyof PrayerTime]?.split(':')[1]);

    if(time.hours >= this.timeNow.hours) {
      if(time.hours == this.timeNow.hours) {
        if(time.minutes >= this.timeNow.minutes) {
          diff = (time.minutes - this.timeNow.minutes) * 60;
          result = GlobalConstants.toHoursAndMinutesAndSeconds(diff);
        }
        else {
          diff = NaN;
          result = null;
        }
      }
      else if(time.hours > this.timeNow.hours) {
        if(time.minutes >= this.timeNow.minutes) {
          diff = (time.hours - this.timeNow.hours) * 60 * 60 + (time.minutes - this.timeNow.minutes) * 60;
          result = GlobalConstants.toHoursAndMinutesAndSeconds(diff);
        }
        else {
          diff = (time.hours - this.timeNow.hours) * 60 * 60 + (time.minutes - this.timeNow.minutes) * 60;
          result = GlobalConstants.toHoursAndMinutesAndSeconds(diff);
        }
      }
    }
    else {
      diff = NaN;
      result = null;
    }

    // console.log("diff = " + diff);
    // console.log(result);

    return result;
  }

  getSettelementHierarchy(address: any) {
    return GlobalConstants.settelementHierarchy(address);
  }

  extractTextByLanguage(text: string, lang: string = this.constants._lang) {
    // console.log(text);
    return GlobalConstants.extractTextByLanguage(text, lang);
  }
}
