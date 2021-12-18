import { TestBed } from '@angular/core/testing';

import { JmriService } from './jmri.service';

describe('JmriServiceService', () => {
    let service: JmriService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(JmriService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
