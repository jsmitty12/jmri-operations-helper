import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JmriService } from 'src/app/services';

import { Location } from 'src/app/models';

@Component({
    selector: 'app-locations-view',
    templateUrl: './locations-view.component.html',
    styleUrls: ['./locations-view.component.scss'],
})
export class LocationsViewComponent implements OnInit {
    locations$: Observable<Location[]>;

    displayedColumns: string[] = ['userName', 'length', 'carTypes', 'track', 'actions'];

    constructor(private jmriSvc: JmriService) {
        this.locations$ = this.jmriSvc.getLocations().pipe(map((location) => location.map((r) => r.data)));
    }

    ngOnInit(): void {}
}
