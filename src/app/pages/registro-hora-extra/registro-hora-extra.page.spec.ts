import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroHoraExtraPage } from './registro-hora-extra.page';

describe('RegistroHoraExtraPage', () => {
  let component: RegistroHoraExtraPage;
  let fixture: ComponentFixture<RegistroHoraExtraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroHoraExtraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroHoraExtraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
