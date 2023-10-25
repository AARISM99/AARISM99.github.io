import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GlobalConstants } from 'src/app/global/globalConstants';
import { Activity } from 'src/app/models/activity.model';
import { Lesson } from 'src/app/models/lesson.model';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-agenda-calendar',
  templateUrl: './agenda-calendar.component.html',
  styleUrls: ['./agenda-calendar.component.scss']
})
export class AgendaCalendarComponent {

  constants: GlobalConstants = new GlobalConstants();

  customSlideActivitiesOptions: OwlOptions = {
    rtl: this.constants._direction == 'rtl' ?  true : false,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    nav: true,
    navSpeed: 700,
    navText: ['&#8249;', '&#8250;'],
    responsive: {
      0: {
        items: 1
      }
    },
    autoplay: true,
    autoplayTimeout: 8000,
    autoplayHoverPause: false
  }

  lessons: Lesson[] = [
    {
      _id: 0,
      title: {
        nl: 'Assunah nabawiyah',
        en: 'Assunah nabawiyah',
        ar: 'السنة النبوية'
      },
      lecturer: {
        nl: '',
        en: '',
        ar: ''
      },
      description: {
        nl: '',
        en: '',
        ar: ''
      },
      from: new Date(2023, 9, 12, 9, 30),
      to: new Date(2023, 9, 12, 12, 0),
      image: ""
    },
    {
      _id: 1,
      title: {
        nl: 'Uitleg van de Muwatta',
        en: 'Explanation of the Muwatta',
        ar: 'شرح الموطأ'
      },
      lecturer: {
        nl: '',
        en: '',
        ar: ''
      },
      description: {
        nl: '',
        en: '',
        ar: ''
      },
      from: new Date(),
      to: new Date(),
      image: ""
    },
    {
      _id: 2,
      title: {
        nl: 'Lees “Sabbih“ Hizb',
        en: 'Reading Hizb “Sabbih“',
        ar: 'قراءة حزب “سبح“'
      },
      lecturer: {
        nl: '',
        en: '',
        ar: ''
      },
      description: {
        nl: '',
        en: '',
        ar: ''
      },
      from: new Date(),
      to: new Date(),
      image: ""
    },
    {
      _id: 3,
      title: {
        nl: 'Lezing getiteld “Addawah to Allah“',
        en: 'Lecture entitled “Addawah to Allah“',
        ar: 'محاضرة بعنوان “الدعوة إلى الله“'
      },
      lecturer: {
        nl: '',
        en: '',
        ar: ''
      },
      description: {
        nl: '',
        en: '',
        ar: ''
      },
      from: new Date(),
      to: new Date(),
      image: ""
    },
    {
      _id: 4,
      title: {
        nl: 'Lees Amma Hizb',
        en: 'Reading Hizb Amma',
        ar: 'قراءة حزب “عمّ“'
      },
      lecturer: {
        nl: '',
        en: '',
        ar: ''
      },
      description: {
        nl: '',
        en: '',
        ar: ''
      },
      from: new Date(),
      to: new Date(),
      image: ""
    },
    {
      _id: 5,
      title: {
        nl: 'Lezing getiteld “Monotheïsme“',
        en: 'Lecture entitled "Monotheism"',
        ar: 'محاضرة بعنوان “التوحيد“'
      },
      lecturer: {
        nl: '',
        en: '',
        ar: ''
      },
      description: {
        nl: '',
        en: '',
        ar: ''
      },
      from: new Date(),
      to: new Date(),
      image: ""
    }
  ];
  activities: Activity[] = [
    {
      _id: 23879320421490174912,
      title: {
        nl: 'Ramadan-geschenkmand',
        en: 'Ramadan gift basket',
        ar: 'سلة رمضانية'
      },
      description: {
        nl: 'Terwijl de heilige maand Ramadan nadert, kondigt het Icentrum de start aan van het organiseren van een solidariteitscampagne om donaties in te zamelen voor de armen en behoeftigen in de regio Amsterdam en de omliggende gebieden onder de slogan ‘Ramadan geschenkmand. deelname aan het donatieproces moet contact opnemen met het centrum of rechtstreeks doneren via de bankrekening van het centrum',
        en: "As the holy month of Ramadan approaches, Icentrum announces the start of organizing a solidarity campaign to collect donations for the poor and needy in the Amsterdam region and the surrounding areas under the slogan “Ramadan Gift basket”. Therefore, those wishing to participate in the donation process must contact the center or donate directly through the account. The center's bank account",
        ar: 'مع اقتراب شهر رمضان المبارك يعلن مركز عبد العزيز ابن باز الاسلامي عن بدأ تنظيم حملة تضامنية لجمع التبرعات من أجل الفقراء و المحتاجين في منطقة أمستردام و النواحي تحت شعار "قفة رمضان"، لهذا على الراغبين في الانخراط في عملية التبرع الاتصال بالمركز أو التبرع مباشرة عبر الحساب البنكي التابع للمركز'
      },
      by: {
        nl: "Hoofd van het centrum",
        en: "Head of the center",
        ar: "رئيس المركز"
      },
      from: new Date(2024, 1, 25, 25, 65),
      to: new Date(2023, 3, 7, 25, 65),
      locationAddress: {
        nl: 'Drachten moskee',
        en: 'Drachten mosque',
        ar: 'مسجد دراختن'
      },
      image: "assets/images/ramadan_basket.jpg"
    },
    {
      _id: 23879320421490174915,
      title: {
        nl: 'Lezing getiteld “Vreedzaam samenleven” door Dr. Rashid Nafi',
        en: 'Lecture entitled “Peaceful Coexistence” by Dr. Rashid Nafi',
        ar: 'محاضرة بعنوان "التعايش السلمي" للدكتور رشيد نافع'
      },
      description: {
        nl: 'Gesponsord door het Icentrum, zal Dr. Rashid Nafi op de negentiende van deze maand een lezing houden onder de titel ‘Vreedzaam samenleven’. Om een ​​uitnodiging aan te vragen, kunt u contact met ons opnemen via het e-mailadres of telefoonnummer van het centrum.',
        en: "Sponsored by the Abdul Aziz Ibn Baz Islamic Center, Dr. Rashid Nafi will deliver a lecture under the title “Peaceful Coexistence” on the nineteenth of this month. To request an invitation, please contact us via the center’s email or phone number.",
        ar: 'برعاية مركز عبد العزيز ابن باز الاسلامي، سيقوم الدكتور رشيد نافع بإلقاء محاضرة تحت عنوان "التعايش السلمي" و ذلك يوم التاسع عشر من هذا الشهر، لطلب الدعوة المرجو التواصل معنا عبر البريد الالكتروني أو رقم الهاتف الخاصين بالمركز'
      },
      by: {
        nl: "Dr. Rashid Nafie",
        en: "Dr. Rashid Nafie",
        ar: "د. رشيد نافع"
      },
      from: new Date(2023, 10, 19, 25, 65),
      to: new Date(2023, 10, 20, 25, 65),
      locationAddress: {
        nl: 'Drachten moskee',
        en: 'Drachten mosque',
        ar: 'مسجد دراختن'
      },
      image: "assets/images/rachid_nafie.jpg"
    },
  ];

  constructor(private translateService: TranslateService,private activatedRoute: ActivatedRoute){}

  ngOnInit() {

    // console.log(new Date(2023, 9, 12, 9, 30));

    // this.lessons = [];
    // this.activities = [];

    // this.activatedRoute.queryParams.subscribe(params => {
    //   if(params['lang']) {
    //     this.translateService.use(params['lang']);
    //     if(params['lang'] == 'ar') {
    //       // this.customSlideActivitiesOptions.rtl = true;
    //     }
    //   }
    //   else {
    //     this.translateService.use(this.constants._lang);
    //   }
    // })

  }

  showTab(id: string) {
    var i;
    var tabs = document.getElementsByClassName("tab") as HTMLCollectionOf<HTMLElement>;
    var tabs_content = document.getElementsByClassName("tab-content") as HTMLCollectionOf<HTMLElement>;
    for (i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("active");
    }
    for (i = 0; i < tabs_content.length; i++) {
      tabs_content[i].classList.remove("active");
    }
    document.getElementById("tab_" + id)!.classList.add("active");
    document.getElementById("content_" + id)!.classList.add("active");
  }

  encodeString(val: any): string {
    return GlobalConstants.encoding(val);
  }

  decodeString(val: any): string {
    return GlobalConstants.decoding(val);
  }
}
