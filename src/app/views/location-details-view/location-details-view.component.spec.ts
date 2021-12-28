import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDetailsViewComponent } from './location-details-view.component';

describe('LocationDetailsViewComponent', () => {
    let component: LocationDetailsViewComponent;
    let fixture: ComponentFixture<LocationDetailsViewComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LocationDetailsViewComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LocationDetailsViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
