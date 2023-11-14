const contentmatricule = document.querySelectorAll('.content-matricule');
contentmatricule.forEach(elementofmatricule => {
    elementofmatricule.addEventListener('click', function(){
        alert('matricule clicked')
        // const matricule = elementofmatricule.querySelector('.matricule').innerText;
        // const xhr = new XMLHttpRequest();
        // xhr.onreadystatechange = function() {
        //     if (xhr.readyState == 4 && xhr.status == 200) {
        //         const data = JSON.parse(xhr.responseText);
        //         console.log(xhr.responseText)
        //         // data.forEach(element => {
        //         //     if(element.matricule == matricule){
        //         //         content(element)
        //         //     }
        //         // });
        //     }
        // }
        // xhr.open('GET','http://localhost:8080/vehicule/getvehiculebymatricule/'+matricule,true)
        // xhr.send(null)
    })
})