import { LocationDialogComponent } from './../location-dialog/location-dialog.component';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private _location: BehaviorSubject<string> = new BehaviorSubject('Detroit');
  public readonly location: Observable<string> = this._location.asObservable();
  constructor(public dialog: MatDialog) { }

  public setUserLocation(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = { location: this.location };

    const dialogRef = this.dialog.open(LocationDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this._location.next(result);
    });
  }

  public getUserLocation(): Observable<string> {
    return this.location;
  }
}
