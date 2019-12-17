import {Component, OnInit} from '@angular/core';
import {CityService} from '../api/city.service';

@Component({
    selector: 'app-select-picker',
    templateUrl: './select-picker.page.html',
    styleUrls: ['./select-picker.page.scss'],
})
export class SelectPickerPage implements OnInit {
    result: string;
    selectedValue: string;
    singleArea = [];

    multiResult = 'multiSelect';
    multiSelectedValue: string;
    multiData = [];

    seaResult = 'multiSelect';
    seaSelectedValue: string;
    seaData = [
        {
            label: '2019',
            children: [
                {
                    label: 'spring',
                    children: []
                },
                {
                    label: 'summer',
                    children: []
                },
                {
                    label: 'autumn',
                    children: []
                },
                {
                    label: 'winter',
                    children: []
                }
            ]
        },
        {
            label: '2020',
            children: [
                {
                    label: 'spring',
                    children: []
                },
                {
                    label: 'summer',
                    children: []
                },
                {
                    label: 'autumn',
                    children: []
                },
                {
                    label: 'winter',
                    children: []
                }
            ]
        }
    ];

    constructor(private dataService: CityService) {

        this.dataService.getProvinces().subscribe(result => {
            this.singleArea = result;
            this.singleArea = this.singleArea.filter(p => p.country === 'US').map(p => p.name);
        });

        this.dataService.getMuti().subscribe(result => {
            this.multiData = result;
        });


    }

    ngOnInit() {
    }

    getResult(result) {
        const value = [];
        result.map(item => value.push(item.label || item));
        return value.map(v => v).join(',');
    }

    onOk(result) {
        this.result = this.getResult(result);
    }

    onOk2(result) {
        this.multiResult = this.getResult(result);
    }

    onOk5(result) {
        this.seaResult = this.getResult(result);
    }

}
