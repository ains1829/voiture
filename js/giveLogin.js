const user_button = document.querySelector('.nameuser') ;
const login = document.querySelector('.login') ;
var isremove = false ;
user_button.addEventListener('click', function(event){
    event.stopPropagation();
    if(!isremove){
        login.classList.remove('notactive');
    }
    isremove = true ;
})
document.addEventListener('click', function(){
    if(isremove){
        login.classList.add('notactive');
    }
    isremove = false ;
})