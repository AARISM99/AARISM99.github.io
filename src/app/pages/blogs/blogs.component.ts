import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/global/globalConstants';
import { Blog } from 'src/app/models/blog.model';
import { KeyVal } from 'src/app/models/keyValue.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  currentPage: number = 0;
  pageSize: number = 9;

  constants: GlobalConstants = new GlobalConstants();
  title: KeyVal = {
    nl: 'Blogs',
    en: 'Blogs',
    ar: 'مقالات'
  }
  recentBlogs: Blog[] = [
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
        nl: 'Kamal Hachimi',
        en: 'Kamal Hachimi',
        ar: 'كمال هاشمي'
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
        nl: 'Said El Moutawakil',
        en: 'Said El Moutawakil',
        ar: 'سعيد المتوكل'
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
        nl: 'Abdellah El Fatimi',
        en: 'Abdellah El Fatimi',
        ar: 'عبد الله الفاطمي'
      },
      image: 'assets/images/miracles_of_quran.jpg',
      external: true,
      external_link: '',
      date_publication: new Date() //26 juli, 2023
    }
  ];

  constructor(private blogService: BlogService){}

  ngOnInit() {
    this.getBlogs('date_publication', 'desc', this.currentPage, this.pageSize);

  }

  private getBlogs(sortField?: string, sortOrder?: string, pageNumber?: number, pageSize?: number) {
    this.blogService.getBlogs(sortField, sortOrder, pageNumber, pageSize).subscribe({
      next: (v) => {this.recentBlogs = v},
      error: (e) => {},
      complete: () => {}
    })
  }


  encodeString(val: any): string {
    return GlobalConstants.encoding(val);
  }

  decodeString(val: any): string {
    return GlobalConstants.decoding(val);
  }

}
