import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-trips',
    templateUrl: './trips.component.html',
    styleUrls: ['./trips.component.scss']
})
export class TripComponent implements OnInit {
    excursions: {
        imageUrl: string,
        caption: string
    }[]

    ngOnInit(){
        this.excursions = [
            {
                caption: 'Li Mulini è anche esperienza sul campo! Prenota ora la tua escursione personalizzata in base alle tue esigenze e ai tuoi desideri. Centinaia di posti fantastici ti stanno aspettando.',
                imageUrl: '../../assets/trips/1.jpg'
            },
            {
                caption: 'Il nome di Tempio è strettamente legato al Monte Limbara che domina su tutta la Gallura, sulle sue cime sono predisposti numerosi sentieri escursionistici lungo i quali si possono ammirare le rare bellezze del paesaggio e i panorami mozzafiato.',
                imageUrl: '../../assets/trips/2.jpg'
            },
            {
                caption: 'Gite naturalistiche, a sfondo storico, ambientale o culturale, arrampicate, trekking o bird watching, e cosí via... L\'imbarazzo della scelta per una giornata da non dimenticare.',
                imageUrl: '../../assets/trips/3.jpg'
            },
            {
                caption: '(Scampagnate in cerca di funghi - stagione autunnale)',
                imageUrl: '../../assets/trips/4.jpg'
            },
            {
                caption: '(Trekking in sicurezza su profili montuosi) ',
                imageUrl: '../../assets/trips/5.jpg'
            },
            {
                caption: '(Parco Antenne Limbara)',
                imageUrl: '../../assets/trips/6.jpg'
            },
        ]
    }
 }

