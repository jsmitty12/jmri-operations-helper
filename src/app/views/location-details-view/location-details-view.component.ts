import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { JmriService } from 'src/app/services';
import { Car, Location } from 'src/app/models';

@Component({
    selector: 'app-location-details-view',
    templateUrl: './location-details-view.component.html',
    styleUrls: ['./location-details-view.component.scss'],
})
export class LocationDetailsViewComponent implements OnInit {
    location: Location;
    carsAtLocation$: Observable<Car[]>;

    constructor(private readonly jmriSvc: JmriService, private readonly route: ActivatedRoute) {
        this.location = route.snapshot.data['location'];
        this.carsAtLocation$ = this.jmriSvc.getCars().pipe(
            catchError((error) => {
                console.error(error);
                return of([]);
            }),
            map((apiCars) =>
                apiCars
                    .map((apiCar) => apiCar.data)
                    .filter((car) => {
                        return car.location?.userName === this.location.userName;
                    })
            )
        );
    }

    ngOnInit(): void {}

    carTrackBy(index: number, item: Car): string {
        return item.name;
    }
}
