import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'location-dialog',
  templateUrl: './location-dialog.component.html'
})
export class LocationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<LocationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) { }
}
