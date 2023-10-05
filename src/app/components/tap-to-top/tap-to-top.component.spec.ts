import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapToTopComponent } from './tap-to-top.component';

describe('TapToTopComponent', () => {
  let component: TapToTopComponent;
  let fixture: ComponentFixture<TapToTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TapToTopComponent]
    });
    fixture = TestBed.createComponent(TapToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
