const form = document.querySelector('#form')
const Name = document.querySelector('#name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const Cpassword = document.querySelector('#cpassword')


form.addEventListener('submit', (e)=>{
   if(!validateform()){
       e.preventDefault()
    }
    
})

function validateform(){
    const nameVal = Name.value.trim() 
    const emailVal = email.value.trim() 
    const passVal = password.value.trim() 
    const cpassVal = Cpassword.value.trim() 
    let success = true

    if(nameVal===''){
        success = false
        setError(Name,'Pls Enter Your Name')
    }else{
        setSucces(Name)
    }


    if(emailVal===''){
        success = false
        setError(email,'Pls Enter Your E-Mail')
    }else if(!validateEmail(emailVal) ){
        success = false
        setError(email,'Enter Proper E-Mail ID')
    }else{
      setSucces(email)
    }

   
    if(passVal===''){
        success = false
        setError(password,'Pls Enter Your Password')
    }else if(passVal.length<8) {
        success = false
        setError(password,'Password Must Be In 8 Charactor')
    }else{
        setSucces(password)
    }

    if(cpassVal===''){
        success = false
        setError(Cpassword,'Pls Enter Your Password')
    }else if(cpassVal!==passVal) {
        success = false
        setError(Cpassword,'Pasword Does\'t Match')
    }else{
        setSucces(Cpassword)
    }
    return success;
}

function setError(element ,message){
    const inputgrp = element.parentElement
    const value = inputgrp.querySelector('.error')
    value.innerText = message
    inputgrp.classList.add('error')
    inputgrp.classList.remove('succes')
}
function setSucces(element){
    const inputgrp = element.parentElement
    const value = inputgrp.querySelector('.error')
    value.innerText = '';
    inputgrp.classList.add('succes')
    inputgrp.classList.remove('error')
}


const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};