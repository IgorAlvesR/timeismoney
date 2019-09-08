import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroFinalHoraExtraPage } from './registro-final-hora-extra.page';

describe('RegistroFinalHoraExtraPage', () => {
  let component: RegistroFinalHoraExtraPage;
  let fixture: ComponentFixture<RegistroFinalHoraExtraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroFinalHoraExtraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroFinalHoraExtraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
