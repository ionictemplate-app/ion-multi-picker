import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CityPickerPage } from './city-picker.page';

const routes: Routes = [
  {
    path: '',
    component: CityPickerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CityPickerPageRoutingModule {}
