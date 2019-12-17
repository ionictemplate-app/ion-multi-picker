import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SelectPickerPage } from './select-picker.page';
import {ListModule, PickerModule} from 'ng-zorro-antd-mobile';

const routes: Routes = [
  {
    path: '',
    component: SelectPickerPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ListModule,
        PickerModule
    ],
  declarations: [SelectPickerPage]
})
export class SelectPickerPageModule {}
