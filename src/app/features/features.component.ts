import { Component, OnInit } from '@angular/core';
import {FeaturesService} from '../features.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  features: any[];

  constructor(private featuresService: FeaturesService) { }

  ngOnInit() {
    this.features = this.featuresService.getFeatures().slice(0, 3);
  }

}
