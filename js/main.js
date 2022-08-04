/*let firstName="Piotr";
let lastName="Kaczmarzyk";
console.log("Uwielbiam JavaScript!");
let array =[1,2,3];
let liczba1 =5;
let liczba2 =5;
let liczba3 =5;
let array1=[liczba1,liczba2,liczba3];
alert("Skrypt działa prawidłowo!");
let liczba=12;
if (liczba>10) {
 console.log("Podana liczba jest większa od 10");   
}else {
    console.log("Podana liczba nie jest większa od 10");
}
let firstNumber=3;
let secondNumber=4;
function dodaj(num1,num2) {
    let suma=num1+num2;
    return suma;
}
let myParagraf=document.querySelector('p');
myParagraf.textContent="BoB";
let button=document.querySelector('button');
button.onclick=function(){
    alert("Klik działa!");
} 
function wieksza(num1,num2){
    if (num1>=num2)
        return num1;
        else return num2;    
}
let number1 = 2;
let number2 = 5;
console.log(wieksza(number1,number2))
let opis=document.getElementById("opis");
let button=document.querySelector('button');
button.onclick=function() {
    opis.textContent="To jest przycisk do zadania";
}
function dluzszy(num1,num2){
    if (num1.lengh>=num2.lengh)
        return num1;
        else return num2;    
}
let number1 = "Uwielbiam JavaScript";
let number2 = "Jestem świetnym programistą";
console.log(dluzszy(number1,number2));
function przedzial(number) {
  if (number<200 && number>100) {
    console.log("Liczba znajduje się w przedziale");
  } 
    else  console.log("Liczba nie znajduje się w przedziale");
}
console.log(przedzial(150));
function logic(num1,num2) {
    if (num1==20 || num2==20 || ((num1+num2) <20)) {
        return true;
    } else {
       return false; 
    }
    }
console.log(logic(21,20));*/
let tekst=document.getElementById("tekst");
let dodaj=document.getElementById("dodaj");
let usun=document.getElementById("usun");
dodaj.onclick =function() {
    tekst.textContent="klinales";
}
usun.onclick =function() {
    tekst.textContent="";
}