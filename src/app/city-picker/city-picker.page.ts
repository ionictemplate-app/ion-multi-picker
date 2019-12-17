import { Component, OnInit } from '@angular/core';
import {CityService} from '../api/city.service';

@Component({
  selector: 'app-city-picker',
  templateUrl: './city-picker.page.html',
  styleUrls: ['./city-picker.page.scss'],
})
export class CityPickerPage implements OnInit {
  usResult = 'select';
  usSelectedValue: string;
  usData = [];

  krResult = 'select';
  krSelectedValue: string;
  krData = [];

  result = 'select';
  value = [];
  cityData = [];

  irResult = 'select';
  irSelectedValue: string;
  irData = [];

  constructor(private dataService: CityService) {
    this.initCnCity();
    this.initUsCity();
    this.initKrCity();
    this.initIrCity();
  }

  initIrCity() {
    this.dataService.getIranCity().subscribe(result => {
      result.map(d => {
        const itemLevel1 = {value: d.name, label: d.name, children: []};
        d.cities.map(c => {
          itemLevel1.children.push({value: c.name, label: c.name, children: []});
        });
        this.irData.push(itemLevel1);
      });
    });
  }

  initKrCity() {
    this.dataService.getKrCity().subscribe(result => {
      result.data.map(d => {
        Object.keys(d).forEach(value => {
          const itemLevel1 = {value, label: value, children: []};
          d[value].map(c => {
            itemLevel1.children.push({value: c, label: c, children: []});
          });
          this.krData.push(itemLevel1);
        });
      });
    });
  }

  initUsCity() {
    this.dataService.getUsCity().subscribe(result => {
      Object.keys(result).forEach((value) => {
        const itemLevel1 = {value, label: value, children: []};
        result[value].map(c => {
          itemLevel1.children.push({value: c, label: c, children: []});
        });
        this.usData.push(itemLevel1);
      });
    });
  }

  initCnCity() {
    this.dataService.getCity().subscribe(districtData => {
      Object.keys(districtData).forEach((index) => {
        const itemLevel1 = {value: districtData[index].code, label: districtData[index].name, children: []};
        const data = districtData[index].cities;
        Object.keys(data).forEach((index1) => {
          const itemLevel2 = {value: data[index1].code, label: data[index1].name, children: []};
          const data2 = data[index1].districts;
          Object.keys(data2).forEach((index2) => {
            const itemLevel3 = {value: index2, label: data2[index2], children: []};
            itemLevel2.children.push(itemLevel3);
          });
          itemLevel1.children.push(itemLevel2);
        });
        this.cityData.push(itemLevel1);
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

  onOk(result) {
    this.result = this.getResult(result);
  }

  onOk1(result) {
    this.usResult = this.getResult(result);
  }

  onOk2(result) {
    this.krResult = this.getResult(result);
  }

  onOk3(result) {
    this.irResult = this.getResult(result);
  }

}
