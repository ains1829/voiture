const form = document.getElementById('login-form')
function connection(form){
    const formadata = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            alert(xhr.responseText)
        }
    }
    xhr.open('POST' , 'http://localhost:8080/users/Connexion' , true) ;
    xhr.send(formadata)
}
form.addEventListener('submit', function(e){
    e.preventDefault();
    connection(form)
})
function traitement_xhr(xhr){
    if(xhr === "Users_not_found"){
        alert('wrong password')
    }else{
        if(xhr === "Token_exist"){
            alert('U are connected')
        }else{
            localStorage.setItem('token_user' , xhr) ;
        }
    }
}