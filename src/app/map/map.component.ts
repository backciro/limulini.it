import { Component } from '@angular/core';

@Component({
    selector: 'app-map',
    template: 
    `
    
    `,
    styleUrls: ['./map.component.scss']
})
export class MapComponent {
    
    geojson = {
        'type': 'FeatureCollection',
        'features': [
            {
                'type': 'Feature',
                'properties': {
                    'message': '',
                    'iconSize': [60, 60]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [
                        9.129113, 
                        40.891715
                    ]
                }
            },
        ]
    };
    
    alert(message: string) {
        alert(message);
    }
    
}

