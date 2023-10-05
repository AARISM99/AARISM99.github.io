import { KeyVal } from "./keyValue.model";

export class PrayerTime {
  Asr?: string;
  Dhuhr?: string;
  Fajr?: string;
  Firstthird?: string;
  Imsak?: string;
  Isha?: string;
  Lastthird?: string;
  Maghrib?: string;
  Midnight?: string;
  Sunrise?: string;
  Sunset?: string;
}

export class PrayerTimesWithRestTimes {
  prayer?: string;
  title?: KeyVal;
  time?: string;
  restTime?: number;
  restTimeCustom?: TimeCustom;
}

export interface TimeCustom {
  h?: number;
  m?: number;
  s?: number;
}

