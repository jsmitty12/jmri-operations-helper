import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsViewComponent } from './locations-view.component';

describe('LocationViewComponent', () => {
    let component: LocationsViewComponent;
    let fixture: ComponentFixture<LocationsViewComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LocationsViewComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LocationsViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
