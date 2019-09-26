import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationBlindingComponent } from './interpolation-blinding/interpolation-blinding.component';
import { PropertyBidingComponent } from './property-biding/property-biding.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationBlindingComponent,
    PropertyBidingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
