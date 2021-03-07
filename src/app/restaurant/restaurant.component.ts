import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-restaurant',
    templateUrl: './restaurant.component.html',
    styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
    dishes: {
        imageUrl: string,
        author: string,
        caption: string
    }[]

    ngOnInit(){
        this.dishes = [
            {
                caption: 'Il duro lavoro e l\'impegno di tutto lo staff hanno permesso la realizzazione di un locale accogliente e familiare, che riesce attraverso il cibo a far rivivere tutte le emozioni e le sensazioni della cucina di una volta.',
                author: '',
                imageUrl: '../../assets/rest/3.jpg'
            },
            {
                caption: 'Il nostro personale qualificato saprà consigliarti e guidarti in alcuni dei viaggi enogastronomici che più hanno reso famose le nostre terre, esaltando tutte le note aromatiche dei pregiati vini che accostiamo alle portate principali.',
                author: '',
                imageUrl: '../../assets/rest/1.jpg'
            },
            {
                caption: 'Le ricette di cucina sono un bene universale estremamente democratico, un tesoro che appartiene a tutti e che come le sette note può essere combinato in migliaia e migliaia di modi e diventare personale, a volte unico.',
                author: '',
                imageUrl: '../../assets/dishes/5.jpg'
            },
            {
                caption: 'Ho bisogno di conoscere la storia di un alimento. Devo sapere da dove viene. Devo immaginarmi le mani che hanno coltivato, lavorato e cotto ciò che mangio.',
                author: '',
                imageUrl: '../../assets/dishes/3.jpg'
            },
            {
                caption: 'La vita non è fatta solo di cose belle, gioia e affetto, ma anche di dolore e lacrime. In ogni caso, per tristi o felici che siamo, tutti dobbiamo nutrirci. Sia quando si è tristi che quando si è felici ci si può sentire ristorati dopo un buon pasto.',
                author: '',
                imageUrl: '../../assets/dishes/4.jpg'
            },
        ]
    }
 }
