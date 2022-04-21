/* 
MILESTONE 1
Per prima cosa, creiamo il markup statico: 
costruiamo il container e inseriamo l'immagine grande a sinistra e le thumbnails sulla destra in modo da poter stilare lo slider; 
avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

MILESTONE 2
Adesso rimuoviamo il markup statico in eccesso e inseriamo le immagini dinamicamente servendoci della struttura dati fornita. 
Stampiamo prima l'immagine grande e usiamo la direttiva v-for per stampare tutti i thumbnails.
Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso Vue-js.

MILESTONE 3
Ora rendiamo lo slider dimanico. 
Al click dell'utente sulle frecce verso l'alto o verso il basso, 
l'immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi: - titolo e - testo.
Allo stesso tempo nelle miniature l'immagine attiva dovrà apparire in evidenza rispetto alle altre.

Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce 
*/


const app = new Vue({
    el : "#app",
    data : {
        activeImage: 0,
        objects: [
            {
                image: './assets/img/01.jpg',
                title: 'Red',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: './assets/img/02.jpg',
                title: 'Blue',
                text: 'Lorem ipsum.',
            },
            {
                image: './assets/img/03.jpg',
                title: 'Green',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: './assets/img/04.jpg',
                title: 'Yellow',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: './assets/img/05.jpg',
                title: 'Purple',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ],
    },
    mounted: function() {
            this.start();
        },
    methods: {
        prevImage(){
            console.log('Prev image');
            if(this.activeImage === 0){
                this.activeImage = this.objects.length;
            }
            this.activeImage--;
        },
        nextImage(){
            console.log('Next image');
            this.activeImage++;
            if(this.activeImage === this.objects.length){
                this.activeImage = 0;
            }
        },

        start: function() {
            this.timer = setInterval(this.nextImage, 3000);
        },

        stop () {
            clearInterval(this.timer);
        },
    },
})
