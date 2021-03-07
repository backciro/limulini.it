import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './import.material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData, CurrencyPipe } from '@angular/common';
import { WindmillComponent } from './windmill/windmill.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

import { MapComponent } from './map/map.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { TripComponent } from './trips/trips.component';
import { RouterModule } from '@angular/router';

import localeIt from '@angular/common/locales/it';
registerLocaleData(localeIt);

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    WindmillComponent,
    TripComponent,
    RestaurantComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: "", component: AppComponent }
      ]
    ),
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoibW50bXR0IiwiYSI6ImNqdXE2bXV2dTFjaWwzemxkdzB2bDZwYzIifQ.1a6iQej_L2WjoHlxQKJRKA', // Optionnal, can also be set per map (accessToken input of mgl-map)
      
    })
  ],
  providers: [
    CurrencyPipe,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }