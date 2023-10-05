import { Component, ElementRef, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { GlobalConstants } from 'src/app/global/globalConstants';
import { KeyVal } from 'src/app/models/keyValue.model';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnChanges {

  constants: GlobalConstants = new GlobalConstants();

  title: KeyVal = {
    nl: 'Contact',
    en: 'Contact',
    ar: 'اتصل بنا'
  }

  contactForm!: FormGroup;
  validated: boolean = false;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private el: ElementRef,
    private contactService: ContactService,
    private translateService: TranslateService,
    private activatedRoute: ActivatedRoute){
  }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(params => {
      if(params['lang']) {
        this.constants._lang = params['lang'];
      }
      else {
        this.translateService.use(this.constants._lang);
      }
    })

    this.contactForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', Validators.required],
      subject: ['', Validators.required],
      sex: ['man'],
      date_creation: [new Date()]
    });
  }

  get f() { return this.contactForm.controls; }

  ngOnChanges() {
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

  send() {

    this.validated = true;
    this.submitted = true;

    Object.keys(this.f).forEach(key => {
      if(this.f[key].errors) {
        // console.log('Form is invalid');
        this.validated = false;
        return;
      }
    });

    if(this.submitted && this.validated) {
      // console.log('Form is valid');
      this.contactService.send(this.contactForm.value);
    }
  }
}
