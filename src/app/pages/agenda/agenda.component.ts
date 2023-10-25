import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/global/globalConstants';
import { KeyVal } from 'src/app/models/keyValue.model';
import { Lesson } from 'src/app/models/lesson.model';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent  implements OnInit {

  currentPage: number = 0;
  pageSize: number = 9;

  constants: GlobalConstants = new GlobalConstants();
  title: KeyVal = {
    nl: 'Agenda',
    en: 'Agenda',
    ar: 'جدول الأعمال'
  }

  program: Lesson[] = [];

  constructor(private lessonService: LessonService){}

  ngOnInit() {
    this.getLessons('date_publication', 'desc', this.currentPage, this.pageSize);

  }

  private getLessons(sortField?: string, sortOrder?: string, pageNumber?: number, pageSize?: number) {
    this.lessonService.getLessons(sortField, sortOrder, pageNumber, pageSize).subscribe({
      next: (v) => {this.program = v},
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
