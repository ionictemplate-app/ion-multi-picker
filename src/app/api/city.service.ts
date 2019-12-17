import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CityService {

    constructor(private http: HttpClient) {
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (!error.ok) {
            errMsg = 'Can\'t connect to server.';
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Promise.reject(errMsg);
    }

    getCity(): Observable<any> {
        return this.http.get('./assets/data/location.json', {withCredentials: false})
            .pipe(
                tap(data => data),
                catchError(this.handleError)
            );
    }

    getUsCity(): Observable<any> {
        return this.http.get('./assets/data/us-states-and-cities.json', {withCredentials: false})
            .pipe(
                tap(data => data),
                catchError(this.handleError)
            );
    }

    getKrCity(): Observable<any> {
        return this.http.get('./assets/data/korea-administrative-district.json', {withCredentials: false})
            .pipe(
                tap(data => data),
                catchError(this.handleError)
            );
    }

    getIranCity(): Observable<any> {
        return this.http.get('./assets/data/iran-states-cities.json', {withCredentials: false})
            .pipe(
                tap(data => data),
                catchError(this.handleError)
            );
    }

    getProvinces(): Observable<any> {
        return this.http.get('./assets/data/provinces.json', {withCredentials: false})
            .pipe(
                tap(data => data),
                catchError(this.handleError)
            );
    }

    getMuti(): Observable<any> {
        return this.http.get('./assets/data/muti.json', {withCredentials: false})
            .pipe(
                tap(data => data),
                catchError(this.handleError)
            );
    }

    getCountries(): Observable<any> {
        return this.http.get('./assets/data/countriesToCities.json', {withCredentials: false})
            .pipe(
                tap(data => data),
                catchError(this.handleError)
            );
    }

}
