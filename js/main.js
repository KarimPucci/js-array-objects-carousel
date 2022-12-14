/* 
**Consegna:**
Riprendiamo l’esercizio carosello e rifacciamolo, questa volta usando un array di oggetti.
Ogni elemento deve avere un titolo, una descrizione e il riferimento ad una immagine.
Le immagini devono essere 5 e nella grafica devono essere presenti:
- immagine in evidenza
- thumbnail di tutte le immagine con in evidenza l’immagine attiva
- bottone avanti e indietro
Lo screenshot allegato è solo dimostrativo ma cercate di mettere le thumb in basso e non laterlamente
*/

const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Svezia: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Perù: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Chile: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Argentina: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Colombia: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

//elements
const containerSlider = document.querySelector(".my-carousel-container");
const containerImages = document.querySelector("my-carousel-images");
const containerThumb = document.querySelector("my-thumbnails .inner");

//deafult data
let counterImages = 0;
let isOverSlider = false;
let isNextDirection = true;

//buttons
const nextBtn = document.querySelector(".my-next-hook");
const prevBtn = document.querySelector(".my-prev-hook");
nextBtn.isNext = true; // custom propreità che legggo al click
prevBtn.isNext = false; // custom propreità che legggo al click
nextBtn.addEventListener('click', handleNextPrev);
prevBtn.addEventListener('click', handleNextPrev);

//events
containerSlider.addEventListener('mouseenter', () =>{
    isOverSlider = true;
})
containerSlider.addEventListener('mouseleave', () =>{
    isOverSlider = false;
})
containerImages.addEventListener('dblclick', () => {
    isNextDirection = !isNextDirection; // toggle della booleana che mi inverte la direzione
})
document.addEventListener('keypress', (event) => {
// intercetto il codice della barra spaziatrice
    if(event.code === 'Space'){
        isOverSlider = !isOverSlider; // toggle della booleana che mi fa andare o meno l'autoscroll
    }
})

