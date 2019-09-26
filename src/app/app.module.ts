import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationBlindingComponent } from './interpolation-blinding/interpolation-blinding.component';
import { PropertyBidingComponent } from './property-biding/property-biding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { fromsModule, FormsModule} from '@angular/forms';
import { NgIfComponent } from './ng-if/ng-if.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationBlindingComponent,
    PropertyBidingComponent,
    TwoWayBindingComponent,
    NgIfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]



})
export class AppModule { }
