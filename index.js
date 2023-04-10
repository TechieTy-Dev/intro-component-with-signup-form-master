const btn = document.querySelector('.form-btn');
const errorMsg = document.querySelector('.errorMsg');
const errorIcon = document.querySelector('.errorIcon');
const errorMsgTwo = document.querySelector('.errorMsgTwo');
const errorIconTwo = document.querySelector('.errorIconTwo');
const errorMsgThree = document.querySelector('.errorMsgThree');
const errorIconThree = document.querySelector('.errorIconThree');
const errorMsgFour = document.querySelector('.errorMsgFour');
const errorIconFour = document.querySelector('.errorIconFour');
const emailInput = document.querySelector('.email');
const lnameInput = document.querySelector('.lname');
const fnameInput = document.querySelector('.fname');
const passwordInput = document.querySelector('.password')
// Email Validation matches the characters to ensure email is correct
const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const nameValidation = /^[a-zA-Z]+ [a-zA-Z]+$/;

var passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
// Function removes the error icon and message after 2 seconds
const timeoutFunction = setInterval(() => {
    errorMsg.style.display = "none";
    errorIcon.style.display = "none";
    errorMsgTwo.style.display = "none";
    errorIconTwo.style.display = "none";
    errorMsgThree.style.display = "none";
    errorIconThree.style.display = "none";
    errorMsgFour.style.display = "none";
    errorIconFour.style.display = "none";
    fnameInput.style.outline = "none"
    lnameInput.style.outline = "none"
    emailInput.style.outline = "none"
    passwordInput.style.outline = "none"




}, 2800);

// First Name Validation

btn.addEventListener("click", function(){
    if(fnameInput.value.length === 0 || !fnameInput.value.match(nameValidation)){
        errorMsg.style.display = "inline";
        errorIcon.style.display = "inline";
        fnameInput.style.outline = "2px solid red"
        errorMsg.textContent = "First Name cannot be empty";
        return timeoutFunction;
    } else {
        errorMsg.style.display = "inline";
        errorMsg.style.color = "green"
        errorMsg.textContent = "Thank you for subscribing to our newsletter";
        return timeoutFunction;
    }
})

// Last Name Validation

btn.addEventListener("click", function(){
    if(lnameInput.value.length === 0 || !lnameInput.value.match(nameValidation)){
        errorMsgTwo.style.display = "inline";
        errorIconTwo.style.display = "inline";
        lnameInput.style.outline = "2px solid red"
        errorMsgTwo.textContent = "Last Name cannot be empty";
        return timeoutFunction;
    } else {
        errorMsgTwo.style.display = "inline";
        errorMsgTwo.style.color = "green"
        errorMsgTwo.textContent = "Thank you for subscribing to our newsletter";
        return timeoutFunction;
    }
})

// Button Click Event for Email Validation
btn.addEventListener("click", function() {
    if(emailInput.value.length === 0 || !emailInput.value.match(emailValidation)) {
        errorMsgThree.style.display = "inline";
        errorIconThree.style.display = "inline";
        emailInput.style.outline = "2px solid red"
        errorMsgThree.textContent = "Looks like this is not an email";
        return timeoutFunction;
    } else {
        errorMsgThree.style.display = "inline";
        errorMsgThree.style.color = "green"
        errorMsgThree.textContent = "Thank you for subscribing to our newsletter";
        return timeoutFunction;
    }
})

// Password Validation

btn.addEventListener("click", function() {
    if(passwordInput.value.length === 0 || !passwordInput.value.match(passwordValidation)){
        errorMsgFour.style.display = "inline";
        errorIconFour.style.display = "inline";
        passwordInput.style.outline = "2px solid red"
        errorMsgFour.textContent = "Password cannot be empty";
        return timeoutFunction;
    } else {
        errorMsgFour.style.display = "inline";
        errorMsgFour.style.color = "green"
        errorMsgFour.textContent = "Thank you for subscribing to our newsletter";
        return timeoutFunction;
    }
    
})