import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, Car, Location } from '../models';

/*
 * Documentation: https://www.jmri.org/JavaDoc/doc/jmri/server/json/package-summary.html
 * /type - shows data types available
 */

@Injectable({
    providedIn: 'root',
})
export class JmriService {
    private readonly hostname = 'localhost:4200/api';
    private readonly version = 'v5';

    private readonly baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `http://${this.hostname}/${this.version}`;
    }

    getCars(): Observable<ApiResponse<Car>[]> {
        const route = `${this.baseUrl}/cars`;
        return this.http.get<ApiResponse<Car>[]>(route);
    }

    getLocations(): Observable<ApiResponse<Location>[]> {
        const route = `${this.baseUrl}/location`;
        return this.http.get<ApiResponse<Location>[]>(route);
    }

    getLocation(name: string): Observable<ApiResponse<Location>> {
        const route = `${this.baseUrl}/location/${name}`;
        return this.http.get<ApiResponse<Location>>(route);
    }
}
