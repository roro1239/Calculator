const add = function(num1 ,num2){
return num1 + num2;
}

const subtract = function(num1 ,num2){
return num1 - num2;
}

const multiply = function(num1 ,num2){
return num1 * num2;
}

const divide = function(num1 ,num2){
    if (num2 ===0){
        return "OPPS";
    }
    return num1/num2;
}
console.log(add(1,2));
console.log(subtract(3,4));
console.log(multiply(5,6));
console.log(divide(1,16));
console.log(divide(1,0));
//switch (+) (-) (/) (*)