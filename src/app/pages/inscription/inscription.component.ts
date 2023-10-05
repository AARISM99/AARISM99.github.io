import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GlobalConstants } from 'src/app/global/globalConstants';
import { KeyVal } from 'src/app/models/keyValue.model';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent {

  constants: GlobalConstants = new GlobalConstants();
  lang: string = '';
  title: KeyVal = {
    nl: 'Inschriven lessons',
    en: 'Inscription',
    ar: 'التسجيل'
  }

  description: KeyVal = {
    nl: 'Het Icentrum wijdt lessen in de Koran en de Soennah, inclusief memoriseren, contemplatie en interpretatie. Dit centrum biedt onderwijs in drie talen: Nederlands, Engels en Arabisch. Het Icentrum onderscheidt zich door zijn hoge De kwaliteit van het lesgeven en de vereenvoudigde uitleg van de lessen maken het voor de leerlingen gemakkelijker om het te begrijpen. De lessen zijn overigens bedoeld voor mannen en vrouwen, maar het programma van het centrum omvat ook speciale lessen voor vrouwen.',
    en: 'Icentrum dedicates lessons in the Qur’an and Sunnah, including memorization, contemplation, and interpretation. This center provides education in three languages: Dutch, English, and Arabic. Icentrum is distinguished by its high quality of teaching in addition to Simplified explanation of the lessons makes it easier for learners to understand. On that occasion, the lessons include men and women. The center’s program includes special lessons for women as well.',
    ar: 'يخصص مركز عبد العزيز بن باز الاسلامي دروس في القرآن و السنة، بما فيها الحفظ و التدبر و التفسير، و يوفر هذا المركز التعليم بثلاث لغات و هي اللغة الهولندية و الانجليزية و العربية، يتميز مركز عبد العزيز بن باز الاسلامي بجودته العالية في التدريس بالإضافة إلى الشرح المبسط للدروس ما يسهل الفهم على المتعلمين. بالمناسبة الدروس تشمل الرجال والنساء، برنامج المركز يشمل دروس خاصة للنساء أيضا.'
  }

  dateNow: Date = new Date();

  submitted: boolean = false;
  validated: boolean = false;

  inscriptionForm!: FormGroup;

  constructor(private translateService: TranslateService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
  ){}

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(params => {
      if(params['lang']) {
        this.constants._lang = params['lang'];
      }
      else {
        this.translateService.use(this.constants._lang);
      }
    })

    this.inscriptionForm = this.formBuilder.group({
      firstname: ["", [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
      secondname: ["", [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
      lastname: ["", [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
      sex: ["man", Validators.required],
      date_of_birth: ["", Validators.required],
      year_of_birth: [null, Validators.required],
      month_of_birth: [null, Validators.required],
      day_of_birth: [null, Validators.required],
      address: ["", Validators.required],
      city: ["", Validators.required],
      postal_code: [""],
      email: ["", [Validators.required, Validators.email]],
      tel: ["", [Validators.required, Validators.pattern(new RegExp(/^\+?\d{1,4}\s?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/))]]
    })
  }

  get f() { return this.inscriptionForm.controls}

  selectDateOfBirth() {
    // console.log(this.f['date_of_birth'].value);
    this.f["year_of_birth"].setValue((this.f['date_of_birth'].value as String).split("-")[0]);
    this.f["month_of_birth"].setValue((this.f['date_of_birth'].value as String).split("-")[1]);
    this.f["day_of_birth"].setValue((this.f['date_of_birth'].value as String).split("-")[2]);
  }

  checkmanSex() {
    var womanSexBtn = document.getElementById('womanSex') as HTMLInputElement;
    womanSexBtn.checked = false;
    this.f['sex'].setValue('man');
  }

  checkwomanSex() {
    var manSexBtn = document.getElementById('manSex') as HTMLInputElement;
    manSexBtn.checked = false;
    this.f['sex'].setValue('woman');
  }

  register() {
    this.validated = true;
    this.submitted = true;

    Object.keys(this.f).forEach(key => {
      if(this.f[key].errors) {
        console.log('Field ' + key + ' is invalid');
        console.log(this.f[key].errors);
        this.validated = false;
        return;
      }
    });

    if(this.submitted && this.validated) {
      console.log('Form is valid');
      // console.log(this.inscriptionForm.value);
      // this.contactService.send(this.inscriptionForm.value);
    }
  }
}
