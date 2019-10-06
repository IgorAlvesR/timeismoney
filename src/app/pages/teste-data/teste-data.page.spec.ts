import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteDataPage } from './teste-data.page';

describe('TesteDataPage', () => {
  let component: TesteDataPage;
  let fixture: ComponentFixture<TesteDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteDataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
