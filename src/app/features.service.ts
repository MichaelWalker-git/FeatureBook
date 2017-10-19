import { Injectable } from '@angular/core';


interface  IFeature {
  name: string;
  number: string;
}

@Injectable()
export class FeaturesService {

  constructor() { }

  getFeatures() {
    const features: IFeature[] = [
      {
        name: 'Call RideShare',
        number: '131212341234123'
      },
      {
        name: 'Weather',
        number: '131212341234123'
      },
      {
        name: 'Mary',
        number: '131212341234123'
      },
      {
        name: 'Call RideShare',
        number: '131212341234123'
      }

    ];
    return features;
  }
}
