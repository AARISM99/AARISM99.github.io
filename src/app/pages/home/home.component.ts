import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GlobalConstants } from 'src/app/global/globalConstants';
import { KeyVal } from 'src/app/models/keyValue.model';
import { News } from 'src/app/models/news.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constants: GlobalConstants = new GlobalConstants();

  recentNews: News[] = [
    {
      _id: 1,
      title: {
        nl: 'WIE IS ALLAH?',
        en: 'WHO IS ALLAH',
        ar: 'من هو الله'
      },
      summary: {
        nl: 'Enkele van de grootste misvattingen die veel niet-moslims hebben over de islam hebben te maken met het woord "ALLAH".',
        en: 'Some of the biggest misconceptions that many non-Muslims have about Islam have to do with the word "ALLAH."',
        ar: 'من أكبر المفاهيم الخاطئة لدى العديد من غير المسلمين عن الإسلام تتعلق بكلمة "الله".'
      },
      body: {
        nl: '',
        en: '',
        ar: ''
      },
      author: {
        nl: '',
        en: '',
        ar: ''
      },
      image: 'assets/images/who_is_allah.jpg',
      external: true,
      external_link: '',
      date_publication: new Date()
    },
    {
      _id: 2,
      title: {
        nl: 'WAT IS ISLAM?',
        en: 'WHAT IS ISLAM?',
        ar: 'ما هو الاسلام؟'
      },
      summary: {
        nl: `Het woord "islam" is een Arabisch woord dat betekent het onderwerpen en overgeven van je wil aan de Almachtige God. De religie van de islam is de acceptatie van en gehoorzaamheid aan de leringen van God, die Hij aan zijn laatste profeet Mohammed (vzmh) heeft geopenbaard.`,
        en: `The word "Islam" is an Arabic word that means submitting and surrendering one's will to God Almighty. The religion of Islam is the acceptance and obedience to the teachings of God, which He revealed to His last prophet Muhammad (PBUH).`,
        ar: `و كلمة "الاسلام" في اللغة العربية تعني الاتستسلام والتسليم لإرادة الله تعالى. دين الاسلام هو قبول و الخضوع لتعاليم الله التي أنزلها على نبيه الخاتم محمد صلى الله عليه و سلم.`
      },
      body: {
        nl: '',
        en: '',
        ar: ''
      },
      author: {
        nl: '',
        en: '',
        ar: ''
      },
      image: 'assets/images/what_is_islam.jpg',
      external: true,
      external_link: '',
      date_publication: new Date()
    },
    {
      _id: 3,
      title: {
        nl: 'WONDEREN VAN DE KORAN',
        en: 'MIRACLES OF QURAN',
        ar: 'معجزات القرآن'
      },
      summary: {
        nl: 'Veertien eeuwen geleden zond God de Koran naar de mensheid als een boek van leiding. Hij riep mensen op zich naar de waarheid te laten leiden door zich aan dit boek te houden. Vanaf de dag van zijn openbaring tot de dag des oordeels zal dit laatste goddelijke boek de enige gids voor de mensheid blijven.',
        en: 'Fourteen centuries ago, God sent the Quran to humanity as a book of guidance. He called on people to be guided to the truth by adhering to this book. From the day of its revelation until the day of judgment, this final divine book will remain the only guide for humanity.',
        ar: 'قبل أربعة عشر قرنا، أنزل الله القرآن للبشرية كتاب هدى. ودعا الناس إلى الهداية إلى الحق بالتمسك بهذا الكتاب. ومن يوم نزوله إلى يوم القيامة، سيبقى هذا الكتاب الإلهي الأخير المرشد الوحيد للبشرية.'
      },
      body: {
        nl: '',
        en: '',
        ar: ''
      },
      author: {
        nl: '',
        en: '',
        ar: ''
      },
      image: 'assets/images/miracles_of_quran.jpg',
      external: true,
      external_link: '',
      date_publication: new Date() //26 juli, 2023
    }
  ];

  introduction: KeyVal = {
    nl: "Bismi llaahi Rrahmani Rrahiem, Alle lof zij Allah, de Heer der werelden, gebeden en vrede zij met Zijn edele dienaar en Boodschapper Mohammed, en met zijn metgezellen en degenen die hem volgen tot de Dag des oordeels. Assalamou 3alaikom wa rahmatoullahi wa barakaatouh, Welkom op de website van moskee en islamitische stichting Drachten : Icentrum. Op deze site willen wij onze leden en andere bezoekers informeren over de gang van zaken wat betreft Icentrum.",
    en: "Bismi llaahi Rrahmani Rraheem, Praise be to Allah, the Lord of the worlds, prayers and peace be upon His noble servant and Messenger Muhammad, and upon his Companions and those who follow him until the Day of Judgment. Assalamou 3alaikom wa rahmatoullahi wa barakaatouh, Welcome to the website of the mosque and Islamic foundation Drachten: Icentrum. On this site we want to inform our members and other visitors about the state of affairs regarding Icentrum.",
    ar: "بسم الله الرحمن الرحيم، الحمد لله رب العالمين، والصلاة والسلام على عبده الكريم ورسوله محمد، وعلى أصحابه ومن تبعه إلى يوم الدين. السلام عليكم ورحمة الله وبركاته، مرحبا بكم في موقع مسجد ومؤسسة دراختن الإسلامية: Icentrum. نريد في هذا الموقع إبلاغ أعضائنا والزوار الآخرين بالحالة المتعلقة بـ Icentrum."
  }

  constructor(private translateService: TranslateService,
    private activatedRoute: ActivatedRoute){
  }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(params => {
      if(params['lang']) {
        this.translateService.use(params['lang']);
      }
      else {
        this.translateService.use(this.constants._lang);
      }
    })
  }
}
