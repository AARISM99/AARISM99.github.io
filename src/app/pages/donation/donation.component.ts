import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GlobalConstants } from 'src/app/global/globalConstants';
import { KeyVal } from 'src/app/models/keyValue.model';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})
export class DonationComponent {

  constants: GlobalConstants = new GlobalConstants();
  lang: string = '';
  title: KeyVal = {
    nl: 'Doneren',
    en: 'Donation',
    ar: 'التبرع'
  }
  description: KeyVal = {
    nl: 'Door aan ons fonds te doneren, geeft u ons de middelen om zo snel mogelijk te handelen en iedereen in nood te helpen die een grote humanitaire noodsituatie ervaart.',
    en: 'By donating to our fund, you give us the resources to act as quickly as possible and help everyone in need who is experiencing a major humanitarian emergency.',
    ar: 'من خلال التبرع لصندوقنا، فإنك تمنحنا الموارد اللازمة للتصرف في أسرع وقت ممكن ومساعدة جميع المحتاجين الذين يعانون من حالة طوارئ إنسانية كبرى.'
  }

  donationExample: any = {
    title: {
      nl: 'Aardbeving in Marokko',
      en: 'Morocco earthquake',
      ar: 'زلزال المغرب'
    },
    description: {
      nl: 'In het belang van uw broeders in Marokko die getroffen zijn door de aardbeving, kunt u een donatie aan hen doen via de rekening van het Abdulaziz Ibn Baz Centrum “NL63INGB0005591130” of via de volgende link.',
      en: 'In the interest of your brothers in Morocco affected by the earthquake, you can make a donation to them via the account of the Abdulaziz Ibn Baz Center “NL63INGB0005591130” or via the following link.',
      ar: 'ولمصلحة إخوانكم في المغرب المتضررين من الزلزال يمكنكم التبرع لهم عبر حساب مركز عبد العزيز بن باز “NL63INGB0005591130” أو عبر الرابط التالي.'
    }
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
