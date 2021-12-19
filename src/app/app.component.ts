import { Component, OnInit } from '@angular/core';
import { JmriService } from './services';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'Operations Helper';

    constructor(private jmriSvc: JmriService) {}

    ngOnInit(): void {}
}
