const content_about = document.querySelector('.content-about')
function content(Donner){
    const content = document.createElement('div')
    content.innerHTML = 
    `
        <div class="content-matricule">
            <div class="matricule">Matricule : ${Donner.matricule}</div>
            <figcaption>Nombre place : ${Donner.nbplace}</figcaption>
        </div>
    `
    content_about.appendChild(content)
}
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        const data = JSON.parse(xhr.responseText);
        console.log(xhr.responseText)
        data.forEach(element => {
            content(element)
        });
    }
}
xhr.open('GET','http://localhost:8080/vehicule/getallvehicule',true)
xhr.send(null)