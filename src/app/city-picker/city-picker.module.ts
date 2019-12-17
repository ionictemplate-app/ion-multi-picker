import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CityPickerPageRoutingModule } from './city-picker-routing.module';

import { CityPickerPage } from './city-picker.page';
import {ListModule, PickerModule} from 'ng-zorro-antd-mobile';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CityPickerPageRoutingModule,
        ListModule,
        PickerModule
    ],
  declarations: [CityPickerPage]
})
export class CityPickerPageModule {}
