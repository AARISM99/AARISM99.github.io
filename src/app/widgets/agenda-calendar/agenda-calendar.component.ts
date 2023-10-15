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

  customSlideActivitiesOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    nav: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
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
        nl: 'Uitleg van de Muwatta',
        en: 'Explanation of the Muwatta',
        ar: 'شرح الموطأ'
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
      _id: 0,
      title: {
        nl: 'Ramadan-geschenkmand',
        en: 'Ramadan gift basket',
        ar: 'سلة رمضانية'
      },
      description: {
        nl: '',
        en: '',
        ar: ''
      },
      from: new Date("20-11-2023"),
      to: new Date("20-12-2023"),
      image: "assets/images/who_is_allah.jpg"
    },
  ];

  constants: GlobalConstants = new GlobalConstants();

  constructor(private translateService: TranslateService,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {

    // this.lessons = [];
    this.activities = [];

    this.activatedRoute.queryParams.subscribe(params => {
      if(params['lang']) {
        this.translateService.use(params['lang']);
      }
      else {
        this.translateService.use(this.constants._lang);
      }
    })

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
}
