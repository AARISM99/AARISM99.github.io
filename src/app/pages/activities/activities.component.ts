import { Component } from '@angular/core';
import { GlobalConstants } from 'src/app/global/globalConstants';
import { Activity } from 'src/app/models/activity.model';
import { KeyVal } from 'src/app/models/keyValue.model';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent {
  currentPage: number = 0;
  pageSize: number = 9;
  constants: GlobalConstants = new GlobalConstants();
  title: KeyVal = {
    nl: 'Activiteiten',
    en: 'Activities',
    ar: 'الأنشطة'
  }

  main_activity: Activity =         {
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
  }

  activities: Activity[] = [];

  constructor(private activityService: ActivityService) {}

  ngOnInit(): void {

    document.body.scrollIntoView({ behavior: 'instant', block: 'start' });

    // for(var i = 0; i < 5; i++) this.activities.push({...this.main_activity});
    this.getActivities('date_publication', 'desc', this.currentPage, this.pageSize);

  }

  private getActivities(sortField?: string, sortOrder?: string, pageNumber?: number, pageSize?: number) {
    this.activityService.getActivities(sortField, sortOrder, pageNumber, pageSize).subscribe({
      next: (v) => {this.activities = v},
      error: (e) => {for(var i = 0; i < 5; i++) this.activities.push({...this.main_activity});},
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
