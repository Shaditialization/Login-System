let userNameInput = document.getElementById('userNameInput');
let emailInput = document.getElementById('emailInput');
let passwordInput = document.getElementById('passwordInput');
let signUpBtn = document.getElementById('signUpBtn');
let userContainer = [];
let alertMassage = document.getElementById('alertMassage');

if(localStorage.getItem('Users') != null)
{
    userContainer=JSON.parse(localStorage.getItem('Users'));
}

signUpBtn.addEventListener('click', function(){

    // user account (obj)
    let data={
        userName:userNameInput.value,
        email:emailInput.value,
        password:passwordInput.value
    }
    
    // Check if empty inputs show alert , if all inputs is full continue ur code
    if(checkInputsEmpty() == true)
    {
        getAlertMessage('All Inputs Required','red');
    }
    else
    {
        if(checkEmailExist() == true)
        {
            getAlertMessage('Email Already Exist','red');
        }
        else
        {
            // user accounts (array)
            userContainer.push(data);
            localStorage.setItem('Users', JSON.stringify(userContainer)); 
            // console.log(userContainer);

            // Clear call
            clrForm();

            // alert text call
            getAlertMessage('Success' , 'green');
        } 
    }
})


// alert
function getAlertMessage(text,color){
    alertMassage.classList.replace('d-none' , 'd-block');
    alertMassage.innerHTML=text;
    alertMassage.style.color=color;
}

// Clear
function clrForm(){
    userNameInput.value='';
    emailInput.value='';
    passwordInput.value='';
}

// Check (No empty inputs)
function checkInputsEmpty(){
    if (userNameInput.value == '' || emailInput.value == '' || passwordInput.value == '')
        return true;
    else
        return false;
}


// Check if email is already exist
function checkEmailExist(){
    for (let i=0; i<userContainer.length; i++){
        if(userContainer[i].email == emailInput.value)
            return true;
    }
}