let emailLoginInput = document.getElementById('emailLoginInput');
let passwordLoginInput = document.getElementById('passwordLoginInput');
let loginBtn = document.getElementById('loginBtn');
let alertMassage = document.getElementById('alertMassage');
let userContainer = [];

if(localStorage.getItem('Users') != null)
{
    userContainer = JSON.parse(localStorage.getItem('Users'));
}

// function login()
// {
//     if(checkEmailPassword() == true)
//     {
//         window.location.href = 'home.html';
//     }
//     else
//     {
//         getAlertMessage('Email or Password Not Correct', 'red');
//     }
// }
// check email, password => userContainer
loginBtn.addEventListener('click' , function(){

    if(checkInputsEmpty() == true)
    {
        // alert message
        getAlertMessage('All Inputs Required' , 'red');
    }
    else
    {
        if(checkEmailPassword() == true)
        {
            // navigate home page
            window.location.href = 'home.html';
        }
        else
        {
            // alert message
            getAlertMessage('Email or Password Not Correct', 'red');
        }
    }
})

function checkEmailPassword()
{
    for(let i=0; i<userContainer.length; i++){
        if(userContainer[i].email == emailLoginInput.value && userContainer[i].password == passwordLoginInput.value)
        localStorage.setItem('userName',userContainer[i].userName)
        return true;
    }
}

function getAlertMessage(text,color){
    alertMassage.classList.replace('d-none' , 'd-block');
    alertMassage.innerHTML=text;
    alertMassage.style.color=color;
}

function checkInputsEmpty(){
    if (emailLoginInput.value == '' || passwordLoginInput.value == '')
        return true;
    else
        return false;
}
