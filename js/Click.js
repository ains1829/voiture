import { Kilometrage } from "./Kilometrage.js";
const kilometrage = Kilometrage 
function getdonnee(){
return new Promise((resolve, reject) => {
    const intervalId = setInterval(() => {
        const elements = document.querySelectorAll('.content-matricule');
        if (elements.length > 0) {
            clearInterval(intervalId);
            resolve(elements);
        }
    }, 100);
})
}
getdonnee()
    .then((elements)=>{
        return elements ;
    })
    .catch(console.error)
function localStorages(key , valeur){
    localStorage.setItem(key , valeur)
}
const getAllnodes = await getdonnee() ;
getAllnodes.forEach(element => {
    element.addEventListener( 'click', async function(){
        const matricule = element.querySelector('.matricule').innerText ;
        const kilometrageMatricule = await kilometrage.getKimotrageByvehicule(matricule) ; 
        localStorages('matricule', matricule);
        console.log( JSON.stringify(kilometrageMatricule))
        localStorages('detailKilometrage' , JSON.stringify(kilometrageMatricule));
        // window.location.replace('./detail.html');
    })
});