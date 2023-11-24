import {Voiture} from './Voiture.js'
const voiture = Voiture;
const alldonne =  await voiture.getalldonnevoiture() ;
const content_about = document.querySelector('.content-about')
function content(Donner){
    Donner.forEach(element =>{
        const content = document.createElement('div')
        content.innerHTML = 
        `
            <div class="content-matricule">
                <div class="matricule">${element.matricule}</div>
                <figcaption>Nombre place : ${element.nbplace}</figcaption>
            </div>
        `
        content_about.appendChild(content)
    });
}
content(alldonne)