let welcomeMassage = document.getElementById('welcomeMassage');
let logOutBtn= document.getElementById('logOutBtn');


if(localStorage.getItem('userName') != null)
{
    welcomeMassage.innerHTML = `welcome ${localStorage.getItem('userName')}`
}

logOutBtn.addEventListener('click' , function(){
    // Navigate login page
    window.location.href='index.html';

    // Remove username from local storage
    localStorage.removeItem('userName');
})