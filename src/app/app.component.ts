import { LocationService } from './services/location.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public tabs: any[];
    constructor(
        private locationService: LocationService
        ) {
        this.locationService.setUserLocation();
        this.tabs = [
            {
                path: 'current-temperature',
                isActive: true,
                label: 'Current Temperature'
            },
            {
                path: 'five-day-forecast',
                isActive: false,
                label: 'Five Day Forecast'
            }
        ];
    }
}
