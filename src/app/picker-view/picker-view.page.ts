import {Component, OnInit} from '@angular/core';
import {CityService} from '../api/city.service';

@Component({
    selector: 'app-picker-view',
    templateUrl: './picker-view.page.html',
    styleUrls: ['./picker-view.page.scss'],
})
export class PickerViewPage implements OnInit {
    data = [];
    selectedValue = ['01', '01-01', '01-01-01'];

    constructor(private dataService: CityService) {
        this.dataService.getMuti().subscribe(result => {
            this.data = result;
        });
    }

    ngOnInit() {

    }

    onChange(result) {
        console.log(this.selectedValue, result);
    }

    getValue(result) {
        const value = [];
        result.forEach(item => {
            value.push(item.label || item);
        });
        return value;
    }

}
