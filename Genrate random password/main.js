const passwordBox = document.getElementById("password");
const length = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCsae = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$&*<>?/[]~`{}_-+=()";

const allChar= upperCase + lowerCsae + number + symbol;

function createPassword(){
    let password='';

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password +=lowerCsae[Math.floor(Math.random() * lowerCsae.length)];
    password +=number[Math.floor(Math.random() * number.length)];
    password +=symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password +=allChar[Math.floor(Math.random() * allChar.length)];
    }

    passwordBox.value = password;
}


function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");

    // its' also worked!
    // document.contentEditable("copy"); 
}