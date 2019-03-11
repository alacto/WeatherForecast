import { LocationService } from './services/location.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private locationService: LocationService) {
        this.locationService.setUserLocation();
    }
}
