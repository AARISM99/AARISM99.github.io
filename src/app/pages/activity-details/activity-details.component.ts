import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { GlobalConstants } from 'src/app/global/globalConstants';
import { Activity } from 'src/app/models/activity.model';
import { KeyVal } from 'src/app/models/keyValue.model';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.scss']
})
export class ActivityDetailsComponent {

  currentPage: number = 0;
  pageSize: number = 9;

  constants: GlobalConstants = new GlobalConstants();
  title: KeyVal = {
    nl: 'Activiteiten',
    en: 'Activities',
    ar: 'الأنشطة'
  }

  main_activity: Activity =  {
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
    locationCoordinates: {
      latitude: 53.1139402,
      longitude: 6.1184782
    },
    image: "assets/images/ramadan_basket.jpg"
  }

  activities: Activity[] = [];

  constructor(private activityService: ActivityService, private activatedRoute: ActivatedRoute, private router: Router) {}


  ngOnInit(): void {

    document.body.scrollIntoView({ behavior: 'instant', block: 'start' });

    this.getActivity();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        document.body.scrollIntoView({ behavior: 'instant', block: 'start' });
        this.getActivity();
      }
    });

    // for(var i = 0; i < 5; i++) this.activities.push({...this.main_activity});

  }

  private getRelatedActivities(id: any, cat: string, sortField?: string, sortOrder?: string, pageNumber?: number, pageSize?: number) {
    this.activityService.getRelatedActivities(id, cat,sortField, sortOrder, pageNumber, pageSize).subscribe({
      next: (v) => {this.activities = v},
      error: (e) => {for(var i = 0; i < 5; i++) this.activities.push({...this.main_activity});},
      complete: () => {}
    })
  }

  getActivity() {
    this.activatedRoute.queryParams.subscribe(params => {
      if(params['vqi']) {
        this.activityService.getOne(this.decodeString(params['vqi'])).subscribe({
          next: (v) => {
            this.main_activity = v;
            this.getRelatedActivities(this.main_activity._id, 'default','date_publication', 'desc', this.currentPage, this.pageSize);
            (document.getElementById('gmap_canvas') as HTMLDivElement).innerHTML = `<iframe id="gmap_iframe" class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=`+this.main_activity.locationCoordinates!.latitude+`,`+this.main_activity.locationCoordinates!.longitude+`&amp;width=600&amp;height=400&amp;hl=en&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>`;
          },
          error: (e) => {for(var i = 0; i < 5; i++) this.activities.push({...this.main_activity})},
          complete: () => {}
        });
      }
      else {
        this.router.navigate(['/page404']);
      }
    })
  }

  encodeString(val: any): string {
    return GlobalConstants.encoding(val);
  }

  decodeString(val: any): string {
    return GlobalConstants.decoding(val);
  }


  toogleMap($event: any) {
    var element = $event.target as HTMLElement;
    if(element.classList.contains('active')) {
      element.classList.remove('active');
      (document.getElementById("mapouter") as HTMLElement).style.display = "none";
    }
    else if(!element.classList.contains('active')) {
      element.classList.add('active');
      (document.getElementById("mapouter") as HTMLElement).style.display = "block";
    }
  }
}
