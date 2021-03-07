import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-windmill',
  templateUrl: './windmill.component.html',
  styleUrls: ['./windmill.component.scss'],
  encapsulation: ViewEncapsulation.None,  
})

export class WindmillComponent {
  title = 'Ristorante Li Mulini';
}
