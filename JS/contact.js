function validateFName(){
  let inputName = document.querySelector("#name1");
  let valueName = inputName.value;
  let errorName = document.querySelector("#error-Fname");

  if(valueName == ""){
      errorName.innerHTML = "Name cannot be empty!"
      inputName.style.border = "1px solid red";
      return false;
  }else{
      errorName.innerHTML = ""
      inputName.style.border = "#C89D9D solid 1px";
      return true;
  }
}

function validateLName(){
  let inputName = document.querySelector("#name2");
  let valueName = inputName.value;
  let errorName = document.querySelector("#error-Lname");

  if(valueName == ""){
      errorName.innerHTML = "Name cannot be empty!"
      inputName.style.border = "1px solid red";
      return false;
  }else{
      errorName.innerHTML = ""
      inputName.style.border = "#C89D9D solid 1px";
      return true;
  }
}

function validateEmail(){
  let inputEmail = document.querySelector("#email1");
  let valueEmail = inputEmail.value;
  let errorEmail = document.querySelector("#error-email");

  if(valueEmail == ""){
      errorEmail.innerHTML = "Email cannot be empty!"
      inputEmail.style.border = "1px solid red";
      return false;
  }else if(!valueEmail.includes("@")){
      errorEmail.innerHTML = "Email must be contain '@'!"
      inputEmail.style.border = "1px solid red";
      return false;
  }else{
      errorEmail.innerHTML = ""
      inputEmail.style.border = "#C89D9D solid 1px";
      return true;
  }
}

function validatePhone(){
  let inputPhone = document.querySelector("#phone1");
  let valuePhone = inputPhone.value;
  let errorPhone = document.querySelector("#error-phone");

  if(valuePhone == ""){
      errorPhone.innerHTML = "Phone Number cannot be empty!"
      inputPhone.style.border = "1px solid red";
      return false;
  }else if(valuePhone.length < 12 || valuePhone.length > 13 ){
      errorPhone.innerHTML = "Phone Number must be 12-13 digit!"
      inputPhone.style.border = "1px solid red";
      return false;
  }else{
      errorPhone.innerHTML = ""
      inputPhone.style.border = "#C89D9D solid 1px";
      return true;
  }
}

function validateMessage(){
  let inputMessage = document.querySelector("#message1");
  let valueMessage = inputMessage.value;
  let errorMessage = document.querySelector("#error-message1");

  if (valueMessage == ""){
      errorMessage.innerHTML = "Message cannot be empty!"
      inputMessage.style.border = "1px solid red";
      return false;
  }else{
      errorMessage.innerHTML = ""
      inputMessage.style.border = "#C89D9D solid 1px";
      return true;
  }
}

let registerBtn = document.querySelector("#btn-send");
registerBtn.addEventListener("click", function(e){
    e.preventDefault();

    let isFNameValid = validateFName();
    let isLNameValid = validateLName();
    let isEmailValid = validateEmail();
    let isPhoneValid = validatePhone();
    let isMessageValid = validateMessage();


    
    if (isLNameValid && isEmailValid && isFNameValid && isPhoneValid && isMessageValid){
        let registerForm = document.querySelector("#form-contact");
        registerForm.submit(); //SUBMIT FORM
        alert("Thank You for Contacting Us!")
    }
});