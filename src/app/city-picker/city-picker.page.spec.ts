import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CityPickerPage } from './city-picker.page';

describe('CityPickerPage', () => {
  let component: CityPickerPage;
  let fixture: ComponentFixture<CityPickerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityPickerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CityPickerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
