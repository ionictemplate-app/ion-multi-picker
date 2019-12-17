import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPickerPage } from './select-picker.page';

describe('SelectPickerPage', () => {
  let component: SelectPickerPage;
  let fixture: ComponentFixture<SelectPickerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPickerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPickerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
