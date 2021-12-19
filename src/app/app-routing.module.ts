import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsViewComponent, HomeViewComponent } from './views';

const routes: Routes = [
    {
        path: '',
        component: HomeViewComponent,
    },
    {
        path: 'cars',
        component: CarsViewComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
