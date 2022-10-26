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

const slider = document.querySelector("slider");
const thumbs = document.querySelector("thumbs");
const next = document.querySelector("next");
const prev = document.querySelector("prev");

const numImages = 5;
let counterImages = 0;
let sliderHtml = '';
let thumbsHtml = '';

const immagini = [
    {
        titolo:"Svezia",
        descrizione:"",
        img:"http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg",
    },
    {
        titolo:"Perù",
        descrizione:"",
        img:"https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg",
    },
    {
        titolo:"Chile",
        descrizione:"",
        img:"https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c",
    },
    {
        titolo:"Argentina",
        descrizione:"",
        img:"https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg",
    },
    {
        titolo:"Colombia",
        descrizione:"",
        img:"https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop",
    },
]

for(let i = 1; i <= numImages; i++){
    sliderHtml += `
        <img  class="box" src="http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg${i}.jpg" alt="">
        <img  class="box" src="https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg${i}.jpg" alt="">
        <img  class="box" src="https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c${i}.jpg" alt="">
        <img  class="box" src="https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg${i}.jpg" alt="">
        <img  class="box" src="https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop${i}.jpg" alt="">
    `;
    thumbsHtml += `
        <img  class="img-thumbs" src="http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg${i}.jpg" alt="">
        <img  class="img-thumbs" src="https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg${i}.jpg" alt="">
        <img  class="img-thumbs" src="https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c${i}.jpg" alt="">
        <img  class="img-thumbs" src="https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg${i}.jpg" alt="">
        <img  class="img-thumbs" src="https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop${i}.jpg" alt="">
    `;
}
slider.innerHTML = sliderHtml;
thumbs.innerHTML = thumbsHtml;
