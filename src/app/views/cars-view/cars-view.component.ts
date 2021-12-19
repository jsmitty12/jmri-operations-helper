import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Car } from 'src/app/models';
import { JmriService } from 'src/app/services';

@Component({
    selector: 'app-cars-view',
    templateUrl: './cars-view.component.html',
    styleUrls: ['./cars-view.component.scss'],
})
export class CarsViewComponent implements OnInit {
    cars$: Observable<Car[]>;

    displayedColumns: string[] = ['road', 'number', 'carType', 'location'];

    constructor(private jmriSvc: JmriService) {
        this.cars$ = this.jmriSvc.getCars().pipe(map((response) => response.map((car) => car.data)));
    }

    ngOnInit(): void {}
}
