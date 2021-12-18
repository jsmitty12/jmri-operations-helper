import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, Car, Location } from '../models';

@Injectable({
    providedIn: 'root',
})
export class JmriService {
    private readonly hostname = 'localhost:4200/api';

    private readonly baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `http://${this.hostname}`;
    }

    getCars(): Observable<ApiResponse<Car>> {
        const route = `${this.baseUrl}/cars`;
        return this.http.get<ApiResponse<Car>>(route);
    }

    getLocations(): Observable<ApiResponse<Location>> {
        const route = `${this.baseUrl}/locations`;
        return this.http.get<ApiResponse<Location>>(route);
    }
}
