import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickerViewPage } from './picker-view.page';

describe('PickerViewPage', () => {
  let component: PickerViewPage;
  let fixture: ComponentFixture<PickerViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickerViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickerViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
