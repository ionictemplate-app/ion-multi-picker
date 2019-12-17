import {Component, OnInit} from '@angular/core';
import {CityService} from '../api/city.service';

@Component({
    selector: 'app-world-picker',
    templateUrl: './world-picker.page.html',
    styleUrls: ['./world-picker.page.scss'],
})
export class WorldPickerPage implements OnInit {
    worldResult = 'world city Select';
    worldSelectedValue: string;
    worldData = [];

    worldResult2 = 'world city Select';
    worldSelectedValue2: string;
    worldData2 = [];

    constructor(private dataService: CityService) {
        this.dataService.getProvinces().subscribe(result => {
            const city = result;
            const countries = [];
            city.map(c => {
                const itemLevel1 = {value: '', label: '', children: []};
                if (countries.includes(c.country)) {
                    this.worldData.map(w => {
                        if (w.label === c.country) {
                            w.children.push({value: c.short, label: c.name, children: []});
                        }
                    });
                } else {
                    countries.push(c.country);
                    itemLevel1.value = c.short;
                    itemLevel1.label = c.country;
                    itemLevel1.children.push({value: c.short, label: c.name, children: []});
                    this.worldData.push(itemLevel1);
                }
            });
        });

        this.dataService.getCountries().subscribe(result => {
            Object.keys(result).forEach((value) => {
                const itemLevel1 = {value, label: value, children: []};
                result[value].map(c => {
                    itemLevel1.children.push({value: c, label: c, children: []});
                });
                this.worldData2.push(itemLevel1);
            });
        });
    }

    ngOnInit() {
    }

    getResult(result) {
        const value = [];
        result.map(item => value.push(item.label || item));
        return value.map(v => v).join(',');
    }

    onOk3(result) {
        this.worldResult = this.getResult(result);
    }

    onOk4(result) {
        this.worldResult2 = this.getResult(result);
    }

}
