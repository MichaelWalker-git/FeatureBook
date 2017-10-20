import { Component, OnInit } from '@angular/core';
import {FeaturesService} from '../features.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  features: any[];

  constructor(
    private featuresService: FeaturesService
  ) { }

  ngOnInit() {
    this.features = this.featuresService.getFeatures().slice(0, 3);
  }
}
