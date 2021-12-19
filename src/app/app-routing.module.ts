import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsViewComponent, HomeViewComponent, LocationsViewComponent } from './views';

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
        component: LocationsViewComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
