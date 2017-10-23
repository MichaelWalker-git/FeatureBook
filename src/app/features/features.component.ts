import { Component, OnInit } from '@angular/core';
import {FeaturesService} from '../features.service';
import {MatDialog , MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  features: any[];

  constructor(
    private featuresService: FeaturesService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.features = this.featuresService.getFeatures().slice(0, 3);
  }

  add() {
    const dialogRef = this.dialog.open(AddFeatureDialog);

    dialogRef.afterClosed().subscribe(feature => {
      if (feature) {
        this.features.push(feature);
      }
    })
  }

  delete(feature){
    this.features.splice(this.features.indexOf(feature), 1);
  }
}

@Component({
  selector: 'add-feature-dialog',
  template: `
    <h1 mat-dialog-title> Add feature </h1>
    <mat-input-container>
      <input matInput #featureName placeholder="Feature Name">
</mat-input-container>
    <mat-input-container>
      <input matInput #featureNumber placeholder="Feature Phone number">
</mat-input-container>
<button mat-raised-button color="primary" (click)="dialogRef.close({
  name: featureName.value,
  phone: featureNumber.value
})">Save</button>
    <button mat-raised-button color="primary" (click)="dialogRef.close({})">Close</button>
`
})

export class AddFeatureDialog {
  constructor(
    public dialogRef: MatDialogRef<AddFeatureDialog>
  ) {
  }
}
