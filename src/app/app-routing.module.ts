import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationResolverService } from 'src/app/services/location-resolver.service';
import { CarsViewComponent, HomeViewComponent, LocationDetailsViewComponent, LocationsViewComponent } from './views';

const routes: Routes = [
    {
        path: '',
        component: HomeViewComponent,
    },
    {
        path: 'cars',
        component: CarsViewComponent,
    },
    {
        path: 'locations',
        children: [
            { path: '', component: LocationsViewComponent },
            {
                path: ':locationName',
                component: LocationDetailsViewComponent,
                resolve: {
                    location: LocationResolverService,
                },
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
