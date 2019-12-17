import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PickerViewPage } from './picker-view.page';
import {PickerViewModule} from 'ng-zorro-antd-mobile';

const routes: Routes = [
  {
    path: '',
    component: PickerViewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    PickerViewModule
  ],
  declarations: [PickerViewPage]
})
export class PickerViewPageModule {}
