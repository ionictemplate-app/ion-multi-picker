import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'city-picker',
        pathMatch: 'full'
    },
    {
        path: 'city-picker',
        loadChildren: () => import('./city-picker/city-picker.module').then(m => m.CityPickerPageModule)
    },
    {
        path: 'world-picker',
        loadChildren: () => import('./world-picker/world-picker.module').then(m => m.WorldPickerPageModule)
    },
    {
        path: 'select-picker',
        loadChildren: () => import('./select-picker/select-picker.module').then(m => m.SelectPickerPageModule)
    },
    {
        path: 'picker-view',
        loadChildren: () => import('./picker-view/picker-view.module').then(m => m.PickerViewPageModule)
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
