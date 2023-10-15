export class GlobalConstants {

  private static defaultLang: string = "nl";
  private static lang: string = "nl";
  private static langs: string[] = ["nl", "en", "ar"];
  private static direction: string = "ltr";
  private static method: number = 3; // Muslim World League method
  private static openCageToken: string = "f37cb9d77203422bb1b3d0687b8bc362";
  private static ipgeolocationToken: string = "23b9d5190adf4b7282e233d6e6f5a9ae";
  public static prayerTimes: any = {
    Fajr: {
      nl: 'Fajr',
      en: 'Fajr',
      ar: 'الفجر'
    },
    Sunrise: {
      nl: 'Zonsopkomst',
      en: 'Sunrise',
      ar: 'الشروق'
    },
    Dhuhr: {
      nl: 'Dhuhr',
      en: 'Dhuhr',
      ar: 'الظهر'
    },
    Asr: {
      nl: 'Asr',
      en: 'Asr',
      ar: 'العصر'
    },
    Maghrib: {
      nl: 'Maghreb',
      en: 'Maghrib',
      ar: 'المغرب'
    },
    Isha: {
      nl: 'Isha',
      en: 'Isha',
      ar: 'العشاء'
    },
  }

  get _defaultLang(){return GlobalConstants.defaultLang}
  get _lang() {return GlobalConstants.lang}
  get _langs() {return GlobalConstants.langs}
  get _direction() {return GlobalConstants.direction}
  get _method() {return GlobalConstants.method}
  get _openCageToken() {return GlobalConstants.openCageToken}
  get _ipgeolocationToken() {return GlobalConstants.ipgeolocationToken}

  // set _defaultLang(_defaultLang: string) {GlobalConstants.defaultLang = _defaultLang}
  set _lang(_lang: string) {GlobalConstants.lang = _lang}
  set _langs(_langs: string[]) {GlobalConstants.langs = _langs}
  set _direction(_direction: string) {GlobalConstants.direction = _direction}
  set _method(_method: number) {GlobalConstants.method = _method}
  set _openCageToken(_openCageToken: string) {GlobalConstants.openCageToken = _openCageToken}
  set _ipgeolocationToken(_ipgeolocationToken: string) {GlobalConstants.ipgeolocationToken = _ipgeolocationToken}



  public static toHoursAndMinutesAndSeconds(totalSeconds: number): any {
    const totalMinutes = Math.floor(totalSeconds / 60);

    const seconds = totalSeconds % 60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return { h: hours, m: minutes, s: seconds };
  }

  public static getUsersLocale(defaultValue: string): string {
    if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
      return defaultValue;
    }
    const wn = window.navigator as any;
    let lang = wn.languages ? wn.languages[0] : defaultValue;
    lang = lang || wn.language || wn.browserLanguage || wn.userLanguage;
    return lang;
  }

  public static extractTextByLanguage(inputString: string, lang: string): string {

    // console.log("inputString = " + inputString);
    // console.log("lang = " + lang);

    // Define a regular expression to match Arabic script (including the dash character).
    var arabicPattern = /[\u0600-\u06FF]+/g;
    // Use the regular expression to find all Arabic parts in the input string.
    var arabicParts = inputString.match(arabicPattern);
    // Join the matched Arabic parts into a single string.
    var arabicText = arabicParts ? arabicParts.join(' ') : '';

    //

    var englishPattern = /[A-Za-z][A-Za-z0-9À-ú-_]+/g;
    var englishParts = inputString.match(englishPattern);
    var englishText = englishParts ? englishParts.join(' ') : '';

    // Check the language and return the appropriate text.
    if (lang === 'ar') {
      return arabicText.trim(); // Trim any leading/trailing spaces
    }
    else {
      return englishText.trim();
    }
  }

  public static settelementHierarchy(address: any) {
    const hierarchy: string[] = ["city","village","town","hamlet"];
    let selctedItem: string = hierarchy[0]

    hierarchy.forEach((h: string) => {
      if(address[h] != undefined) {
        selctedItem = address[h];
      }
    });

    return selctedItem
  }

  public static encoding(val: string) {
    return btoa(btoa(btoa(btoa(val))));
  }

  public static decoding(val: string) {
    return atob(atob(atob(atob(val))));
  }


}
