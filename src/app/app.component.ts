import { Component, OnChanges, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd } from '@angular/router';
import { MapboxGeoJSONFeature, MapLayerMouseEvent } from 'mapbox-gl';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,  
  
})
export class AppComponent implements OnInit {
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    ) {
      this.points = {
        'type': 'FeatureCollection',
        'features': [{
          'type': 'Feature',
          'properties': {
            // tslint:disable-next-line:max-line-length
            'description': 'Ci trovate aperti tutti i giorni dalle 19.30 alle 24.00. Sono gradite prenotazioni',
            'icon': 'restaurant',
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [9.144259, 40.882415]
          }
        }]
      };
      
      this.router.events.subscribe( (val) => {
        if ((<any>val).anchor) {
          this.router.navigate(['/'], { skipLocationChange: true}); 
        }
      });
    }

    title = `Ristorante di Montagna / Griglieria - Li Mulini`;
    
    lat: number = 40.891715;
    lng: number = 9.129113;
    
    points: GeoJSON.FeatureCollection<GeoJSON.Point>;
    selectedPoint: MapboxGeoJSONFeature | null;
    cursorStyle: string;
  
    onClick(evt: MapLayerMouseEvent) {
      this.selectedPoint = evt.features![0];
    }

    ngOnInit(){
      
    }
  }
