
var div = document.querySelector('.details')
function affichedetails(data){
    for (let index = 0; index < data.length; index++) {
        const div_content = document.createElement('div')
        div_content.innerHTML = `
            <div class='detail-vehicule'>
                <span>
                    debut :  ${data[index]._debut} km
                </span>
                <span>
                    fin : ${data[index]._fin} km
                </span>
            </div>
        `
        div.appendChild(div_content)
    }
}
const kilometrage =   (localStorage.getItem('detailKilometrage'))
const kilometra_parse =  JSON.parse(kilometrage)
affichedetails(kilometra_parse)
