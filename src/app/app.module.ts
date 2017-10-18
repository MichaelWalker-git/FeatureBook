import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { FeaturesComponent } from './features/features.component';
import { PopularComponent } from './popular/popular.component';
import { FeaturesService } from './features.service';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PopularComponent
  },
  {
    path: 'features',
    component: FeaturesComponent
  },
  {
    path: 'popular',
    component: PopularComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    PopularComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FeaturesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
