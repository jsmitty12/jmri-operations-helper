import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JmriService } from './jmri.service';
import { Location } from 'src/app/models';

@Injectable({
    providedIn: 'root',
})
export class LocationResolverService implements Resolve<Location> {
    constructor(private readonly route: ActivatedRoute, private readonly jmriSvc: JmriService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Location | Observable<Location> | Promise<Location> {
        const locationName = route.params['locationName'];
        return this.jmriSvc.getLocation(locationName).pipe(map((response) => response.data));
    }
}
