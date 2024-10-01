const pass=document.getElementById("pass");
const length=8;
const upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower=upper.toLowerCase(" ");
const number="0123456789";
const symb="!@#$%&*+=";

const rem=upper + lower + number + symb;

function randomPass(){
    let password="";
    password+=upper[Math.floor(Math.random()* upper.length)];
    password+=lower[Math.floor(Math.random()* lower.length)];
    password+=number[Math.floor(Math.random()* number.length)];
    password+=symb[Math.floor(Math.random()* symb.length)];

    while(length > password.length){
        password+=rem[Math.floor(Math.random()* rem.length)];
    }
    pass.value=password;
}
const eye=document.getElementById("eye");
function typ(){
    if(pass.type=="password"){
        pass.type="text";
        eye.classList.remove("ri-eye-off-fill");
        eye.classList.add("ri-eye-fill");
    }else if(pass.type=="text"){
        pass.type="password";
        eye.classList.add("ri-eye-off-fill");
        eye.classList.remove("ri-eye-fill")
    }
};
 function copy(){
    pass.select();
    document.execCommand("copy");
 }