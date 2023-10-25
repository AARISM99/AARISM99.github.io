import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalConstants } from 'src/app/global/globalConstants';
import { Coords } from 'src/app/models/coords.model';
import { KeyVal } from 'src/app/models/keyValue.model';
import { PrayerTime, TimeCustom, PrayerTimesWithRestTimes } from 'src/app/models/prayerTime.model';
import { CalendarService } from 'src/app/services/calendar.service';
import { LocationService } from 'src/app/services/location.service';

interface Method {
  id?: number;
  location?: any;
  address?: KeyVal;
  name?: string;
  params?: any;
}

@Component({
  selector: 'app-prayer-times',
  templateUrl: './prayer-times.component.html',
  styleUrls: ['./prayer-times.component.scss']
})
export class PrayerTimesComponent implements OnInit {

  constants: GlobalConstants = new GlobalConstants();

  title: KeyVal = {
    nl: 'Gebedstijden',
    en: 'Prayer times',
    ar: 'أوقات الصلوات'
  }

  method!: Method;

  calendar: any[] = [];


  public calendarConfigForm!: FormGroup;

  public dateNow: Date = new Date();
  public timeNow = {
    hours: this.dateNow.getHours(),
    minutes: this.dateNow.getMinutes()
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
              private formBuilder: FormBuilder) {}

  ngOnInit() {

    this.calendarConfigForm = this.formBuilder.group({
      month: [this.dateNow.getMonth(), Validators.required],
      year: [this.dateNow.getFullYear(), Validators.required],
      address: ['', Validators.required],
      method: [this.constants._method, Validators.required],
      juristicSchool: [0, Validators.required],
      latitudeAdjustment: [3, Validators.required],
      midnightMode: [0, Validators.required],
      customFajrAngle: [18, Validators.required],
      customMaghribAngle: [4.5, Validators.required],
      customIshaAngle: [90, Validators.required],
      tune: ["", Validators.required],
      tuneImsak: [0, Validators.required],
      tuneFajr: [0, Validators.required],
      tuneSunrise: [0, Validators.required],
      tuneZhuhr: [0, Validators.required],
      tuneAsr: [0, Validators.required],
      tuneSunset: [0, Validators.required],
      tuneMaghrib: [0, Validators.required],
      tuneIsha: [0, Validators.required],
      tuneMidnight: [0, Validators.required]
    })

    this.getCurrentPosition();

    setInterval(() => {
      this.dateNow = new Date();
      this.timeNow = {
        hours: this.dateNow.getHours(),
        minutes: this.dateNow.getMinutes()
      };
      this.checkUpcomingPrayerTime();
    }, 1000);

  }

  get f() { return this.calendarConfigForm.controls; }

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
        // console.log(result);
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

    var keys = ['Fajr','Sunrise','Dhuhr','Asr','Maghrib','Isha'];

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

  generateCalendar() {
    this.f['tune'].setValue(
      this.f['tuneImsak'].value + ',' +
      this.f['tuneFajr'].value + ',' +
      this.f['tuneSunrise'].value + ',' +
      this.f['tuneZhuhr'].value + ',' +
      this.f['tuneAsr'].value + ',' +
      this.f['tuneSunset'].value + ',' +
      this.f['tuneMaghrib'].value + ',' +
      this.f['tuneIsha'].value + ',' +
      this.f['tuneMidnight'].value
    );
    console.log(this.calendarConfigForm.value);
    this.calendarService.getCalendarByParams(this.calendarConfigForm.value).subscribe(
      (cal) => {
        // console.log(cal);
        this.calendar = cal.data;
      }
    );
  }

}
