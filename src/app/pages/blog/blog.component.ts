import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { GlobalConstants } from 'src/app/global/globalConstants';
import { Blog } from 'src/app/models/blog.model';
import { KeyVal } from 'src/app/models/keyValue.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  currentPage: number = 0;
  pageSize: number = 9;

  constants: GlobalConstants = new GlobalConstants();
  title: KeyVal = {
    nl: 'Blogs',
    en: 'Blogs',
    ar: 'مقالات'
  }
  main_blog: Blog =     {
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
      nl: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus mattis felis ac mollis. Donec leo massa, accumsan nec purus iaculis, tincidunt iaculis orci. Quisque ac purus sit amet elit elementum scelerisque. Donec consequat suscipit magna, ut blandit est finibus et. Duis ut convallis tortor. Phasellus elementum magna at venenatis vulputate. Nunc at nisi enim. Curabitur ornare ac ex in lobortis. Curabitur vehicula turpis non aliquam sollicitudin. Quisque at luctus sapien. Nulla facilisi. Nam blandit lacus magna, sed lacinia mi ultricies in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

      Nullam feugiat libero erat. Fusce condimentum mi nec urna consequat tincidunt ac non tortor. Nulla feugiat libero mi, vel congue diam ornare at. Mauris non purus a felis rhoncus bibendum. Vivamus ornare sollicitudin felis id sodales. In luctus ex vitae nisi ullamcorper interdum. Nunc blandit elit vel velit auctor, ut maximus sem consectetur. Integer a dignissim justo, a efficitur tellus. Vestibulum eleifend scelerisque eros, ut pharetra tortor placerat at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris pretium iaculis neque eget ultrices. Curabitur nec mollis orci. Proin euismod, est vel ullamcorper porta, eros urna semper ligula, sit amet suscipit dui orci non enim. Cras ultricies tempus euismod. Suspendisse blandit nisi id felis malesuada, sit amet ultricies lectus pretium. Sed tempus dui quis nunc aliquam, non condimentum purus tempus.

      Morbi sollicitudin ligula at massa ultricies, sed tempus odio auctor. Praesent congue commodo malesuada. Nullam viverra, nisl ac viverra efficitur, eros urna facilisis est, sit amet accumsan neque enim et mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt felis fringilla, ornare nunc et, viverra lacus. Vestibulum eu arcu turpis. Ut lobortis sodales leo quis convallis. Quisque non urna mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras quis mollis enim, ut efficitur lacus. Quisque condimentum tincidunt fermentum.

      Phasellus dictum pellentesque urna, vitae venenatis lacus condimentum sit amet. Donec est orci, consectetur vitae maximus at, vulputate a eros. Nam at libero mi. Donec rutrum et ipsum quis porttitor. Duis elementum lectus lacinia, euismod velit non, ullamcorper elit. Phasellus sed ipsum venenatis purus malesuada eleifend non sit amet quam. Integer egestas interdum enim id lobortis.

      Cras dignissim dolor eu finibus gravida. Aenean porttitor neque at placerat mollis. Donec in molestie diam. Maecenas bibendum sed urna eget aliquam. Suspendisse non sollicitudin purus. Morbi id dictum odio. Quisque ut quam a elit ultrices condimentum. Sed eu neque nec enim pulvinar pulvinar. Etiam tempor tempus dictum. Vivamus suscipit nunc in finibus mollis. Cras in sapien fringilla, ultrices ligula in, ultricies sapien. Suspendisse nulla tellus, vulputate nec ante ut, facilisis dapibus justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

      Sed mollis arcu vitae sollicitudin mollis. Quisque convallis nunc id dapibus dictum. Donec finibus nunc et risus ornare, eget dapibus mauris faucibus. Cras luctus, felis consectetur commodo porttitor, neque ex tincidunt lacus, ut aliquet nulla ante a nisl. Vestibulum nec tortor sed libero porttitor molestie. Sed ut tellus ligula. Duis mauris orci, ullamcorper eget elementum placerat, tincidunt vel magna. Mauris malesuada et arcu ac commodo. Curabitur vel semper est. Integer interdum finibus ultricies. Integer id leo venenatis, dictum odio a, commodo ipsum. Nam feugiat ac quam eu sodales. Nunc commodo rhoncus pharetra.

      Donec rhoncus ante felis, bibendum consequat lacus tempor id. Phasellus nec erat in sem viverra tristique. Nam eu neque sit amet leo volutpat semper quis eget libero. Etiam congue eros eget tempus mattis. Nullam elit massa, tincidunt vel elit varius, condimentum feugiat massa. Integer eu luctus leo, at interdum tellus. Proin elementum vestibulum orci vel ullamcorper. Ut ultrices pellentesque nunc, quis porta neque luctus dignissim. Curabitur ornare finibus libero, quis accumsan odio. Cras viverra nisi in sagittis fermentum. Proin volutpat turpis ligula, ut sollicitudin turpis faucibus eu. In dictum pellentesque pretium. Mauris efficitur massa in lacinia scelerisque. Aenean tincidunt nisl massa, non tincidunt leo tempor sed.`,
      en: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus mattis felis ac mollis. Donec leo massa, accumsan nec purus iaculis, tincidunt iaculis orci. Quisque ac purus sit amet elit elementum scelerisque. Donec consequat suscipit magna, ut blandit est finibus et. Duis ut convallis tortor. Phasellus elementum magna at venenatis vulputate. Nunc at nisi enim. Curabitur ornare ac ex in lobortis. Curabitur vehicula turpis non aliquam sollicitudin. Quisque at luctus sapien. Nulla facilisi. Nam blandit lacus magna, sed lacinia mi ultricies in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

      Nullam feugiat libero erat. Fusce condimentum mi nec urna consequat tincidunt ac non tortor. Nulla feugiat libero mi, vel congue diam ornare at. Mauris non purus a felis rhoncus bibendum. Vivamus ornare sollicitudin felis id sodales. In luctus ex vitae nisi ullamcorper interdum. Nunc blandit elit vel velit auctor, ut maximus sem consectetur. Integer a dignissim justo, a efficitur tellus. Vestibulum eleifend scelerisque eros, ut pharetra tortor placerat at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris pretium iaculis neque eget ultrices. Curabitur nec mollis orci. Proin euismod, est vel ullamcorper porta, eros urna semper ligula, sit amet suscipit dui orci non enim. Cras ultricies tempus euismod. Suspendisse blandit nisi id felis malesuada, sit amet ultricies lectus pretium. Sed tempus dui quis nunc aliquam, non condimentum purus tempus.

      Morbi sollicitudin ligula at massa ultricies, sed tempus odio auctor. Praesent congue commodo malesuada. Nullam viverra, nisl ac viverra efficitur, eros urna facilisis est, sit amet accumsan neque enim et mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt felis fringilla, ornare nunc et, viverra lacus. Vestibulum eu arcu turpis. Ut lobortis sodales leo quis convallis. Quisque non urna mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras quis mollis enim, ut efficitur lacus. Quisque condimentum tincidunt fermentum.

      Phasellus dictum pellentesque urna, vitae venenatis lacus condimentum sit amet. Donec est orci, consectetur vitae maximus at, vulputate a eros. Nam at libero mi. Donec rutrum et ipsum quis porttitor. Duis elementum lectus lacinia, euismod velit non, ullamcorper elit. Phasellus sed ipsum venenatis purus malesuada eleifend non sit amet quam. Integer egestas interdum enim id lobortis.

      Cras dignissim dolor eu finibus gravida. Aenean porttitor neque at placerat mollis. Donec in molestie diam. Maecenas bibendum sed urna eget aliquam. Suspendisse non sollicitudin purus. Morbi id dictum odio. Quisque ut quam a elit ultrices condimentum. Sed eu neque nec enim pulvinar pulvinar. Etiam tempor tempus dictum. Vivamus suscipit nunc in finibus mollis. Cras in sapien fringilla, ultrices ligula in, ultricies sapien. Suspendisse nulla tellus, vulputate nec ante ut, facilisis dapibus justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

      Sed mollis arcu vitae sollicitudin mollis. Quisque convallis nunc id dapibus dictum. Donec finibus nunc et risus ornare, eget dapibus mauris faucibus. Cras luctus, felis consectetur commodo porttitor, neque ex tincidunt lacus, ut aliquet nulla ante a nisl. Vestibulum nec tortor sed libero porttitor molestie. Sed ut tellus ligula. Duis mauris orci, ullamcorper eget elementum placerat, tincidunt vel magna. Mauris malesuada et arcu ac commodo. Curabitur vel semper est. Integer interdum finibus ultricies. Integer id leo venenatis, dictum odio a, commodo ipsum. Nam feugiat ac quam eu sodales. Nunc commodo rhoncus pharetra.

      Donec rhoncus ante felis, bibendum consequat lacus tempor id. Phasellus nec erat in sem viverra tristique. Nam eu neque sit amet leo volutpat semper quis eget libero. Etiam congue eros eget tempus mattis. Nullam elit massa, tincidunt vel elit varius, condimentum feugiat massa. Integer eu luctus leo, at interdum tellus. Proin elementum vestibulum orci vel ullamcorper. Ut ultrices pellentesque nunc, quis porta neque luctus dignissim. Curabitur ornare finibus libero, quis accumsan odio. Cras viverra nisi in sagittis fermentum. Proin volutpat turpis ligula, ut sollicitudin turpis faucibus eu. In dictum pellentesque pretium. Mauris efficitur massa in lacinia scelerisque. Aenean tincidunt nisl massa, non tincidunt leo tempor sed.`,
      ar: 'هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق "ليتراسيت" (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل "ألدوس بايج مايكر" (Aldus PageMaker) والتي حوت أيضاً على نسخ من هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق "ليتراسيت" (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل "ألدوس بايج مايكر" (Aldus PageMaker) والتي حوت أيضاً على نسخ من هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق "ليتراسيت" (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل "ألدوس بايج مايكر" (Aldus PageMaker) والتي حوت أيضاً على نسخ من'
    },
    author: {
      nl: 'Kamal Hachimi',
      en: 'Kamal Hachimi',
      ar: 'كمال هاشمي'
    },
    image: 'assets/images/who_is_allah.jpg',
    external: true,
    external_link: '',
    date_publication: new Date('2021-12-15'),
  };
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

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
              private blogService: BlogService){
  }

  ngOnInit(): void {

    document.body.scrollIntoView({ behavior: 'instant', block: 'start' });

    this.getBlog();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        document.body.scrollIntoView({ behavior: 'instant', block: 'start' });
        this.getBlog();
      }
    });

  }

  getBlog() {
    this.activatedRoute.queryParams.subscribe(params => {
      if(params['vqi']) {
        this.blogService.getOne(this.decodeString(params['vqi'])).subscribe({
          next: (v) => {
            this.main_blog = v;
            this.getRecentsBlogs('date_publication', 'desc', this.currentPage, this.pageSize);
          }
        })
      }
      else {
        this.router.navigate(['/page404']);
      }
    })
  }

  getRecentsBlogs(sortField?: string, sortOrder?: string, pageNumber?: number, pageSize?: number) {
    this.blogService.getRecentBlogs(sortField, sortOrder, pageNumber, pageSize).subscribe({
      next: (v) => {this.recentBlogs = v;}
    })
  }

  encodeString(val: any): string {
    return GlobalConstants.encoding(val);
  }

  decodeString(val: any): string {
    return GlobalConstants.decoding(val);
  }

}
