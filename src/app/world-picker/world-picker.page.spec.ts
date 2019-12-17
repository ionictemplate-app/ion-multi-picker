import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldPickerPage } from './world-picker.page';

describe('WorldPickerPage', () => {
  let component: WorldPickerPage;
  let fixture: ComponentFixture<WorldPickerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldPickerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldPickerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
