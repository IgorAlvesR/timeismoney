import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioDeslocamentoPage } from './relatorio-deslocamento.page';

describe('RelatorioDeslocamentoPage', () => {
  let component: RelatorioDeslocamentoPage;
  let fixture: ComponentFixture<RelatorioDeslocamentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatorioDeslocamentoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioDeslocamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
