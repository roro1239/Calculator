let num1='';
let operators=null;
let num2='';

let num = document.querySelectorAll(".number");
let operatorButton = document.querySelectorAll(".operator");
let currentScreen = document.getElementById("currentOperationScreen");
let lastScreen = document.getElementById("lastOperationScreen");
let btnClear = document.getElementById("btnClear");
let btnEqual = document.getElementById("btnEqual");
let btnDelete = document.getElementById("btnDelete");
let btnDot = document.getElementById("btnDot");

//btnEqual.addEventListener('click',evaluate);
btnClear.addEventListener('click',clear);
btnDelete.addEventListener('click',deleting);
btnDot.addEventListener('click',dot);
//window.addEventListener('keydown',keyboardInput);

num.forEach(button =>{
    button.addEventListener('click',() =>{
        appendNumbers(button.textContent);
 });
 });

 operatorButton.forEach(button =>{
    button.addEventListener("click",()=>{
        appendOperator(button.textContent);
    
    });
});

 function appendNumbers (input){
    if(currentScreen.textContent === "0"){
        currentScreen.textContent ='';
    }
    currentScreen.textContent += input;
}
function appendOperator(op){
   /* if(operators !== null){
        
      }*/
    num1 = currentScreen.textContent;
    operators=op;
    lastScreen.textContent = num1 +" "+ operators;
    currentScreen.textContent ='';
}
function clear() {
    num1 = ''
    operators = null;
    num2 = '';
    currentScreen.textContent ='0';
    lastScreen.textContent='';
}

function deleting(){
    currentScreen.textContent = currentScreen.textContent.slice(0,-1);
}

function dot(){
    if(currentScreen.textContent ===''){
        currentScreen.textContent = '0';
    }
    if(currentScreen.textContent.includes('.')) return;
    currentScreen.textContent +='.';
}
const add = function (num1, num2) {
    return num1 + num2;
}

const subtract = function (num1, num2) {
    return num1 - num2;
}

const multiply = function (num1, num2) {
    return num1 * num2;
}

const divide = function (num1, num2) {
    return num1 / num2;
}

function operator(operator, a, b) {
    a = Number(a);
    b = Number(b);

    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            if (b === 0) return null;
            else return divide(a, b);
        default:
            return null;
    }
}
