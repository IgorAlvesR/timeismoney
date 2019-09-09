import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDeslocamentoPage } from './registro-deslocamento.page';

describe('RegistroDeslocamentoPage', () => {
  let component: RegistroDeslocamentoPage;
  let fixture: ComponentFixture<RegistroDeslocamentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroDeslocamentoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroDeslocamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
