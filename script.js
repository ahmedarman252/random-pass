const passwordBox = document.getElementById('Password');
const lenght = 12;

const upparCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symble = "!@#$%^&*";

const allChrs = upparCase + LowerCase + number +symble; 

function creatPassword(){
    let Password = "";
    Password =+ upparCase [Math.floor(Math.random()*upparCase.length)];
    Password =+ LowerCase [Math.floor(Math.random()*LowerCase.length)];
    Password =+ number [Math.floor(Math.random()*number.length)];
    Password =+symble [Math.floor(Math.random()*symble.length)];

    while(lenght > Password.lenth){
        Password =+ allChrs [Math.floor(Math.random()*allChrs.length)];
    }
    passwordBox.value = Password;
};

function copyPassword(){
    passwordBox.select()
    document.execCommand('copy')
}
