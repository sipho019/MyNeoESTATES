const cardDetails = document.querySelectorAll(".details");
const nameInput = document.querySelector("#client-name");
const surnameInput = document.querySelector("#client-surname");
const cardBranch = document.querySelector("#card-branch");
const cardNumber = document.querySelector("#card-number");
const secureCode = document.querySelector("#security-code");

if(secureCode === 3){
    document.textContent = "";
}else{
    document.textContent = "3 digits rquired";
}
