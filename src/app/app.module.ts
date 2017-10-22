import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatInputModule, MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule, MatDialogModule } from '@angular/material';

import { AppComponent } from './app.component';
import {AddFeatureDialog, FeaturesComponent} from './features/features.component';
import { PopularComponent } from './popular/popular.component';

import { FeaturesService } from './features.service';
import { Routes, RouterModule} from '@angular/router';

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
    PopularComponent,
    AddFeatureDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
  ],
  providers: [FeaturesService],
  bootstrap: [AppComponent],
  entryComponents: [AddFeatureDialog]
})
export class AppModule { }
