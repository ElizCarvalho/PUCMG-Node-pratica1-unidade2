/**
* PUC-Minas / Arquitetura de Sistemas Distribuídos
* Author: Elizabeth Carvalho
* File: moduleCalculator/calculator.js
* GitHub: https://github.com/ElizCarvalho/PUCMG-Node-pratica1-unidade2
*/

function addition(x, y){
    if(!isNaN(x) && !isNaN(y))
        return parseFloat(x) + parseFloat(y);
    else
        return NaN;
}

function subtraction(x, y){
    if(IsValid(x,y))
        return parseFloat(x) - parseFloat(y);
    else
        return NaN;
}

function subtraction(x, y){
    if(IsValid(x,y))
        return parseFloat(x) - parseFloat(y);
    else
        return NaN;
}

function multiplication(x, y){
    if(IsValid(x,y))
        return parseFloat(x) * parseFloat(y);
    else
        return NaN;
}

function division(x, y){
    if(IsValid(x,y)){
        if(y != 0)
            return parseFloat(x) / parseFloat(y);
        else
            return "It is not possible to divide by zero."
    }
    else
        return NaN;
}


function IsValid(x, y){
    if(!isNaN(x) && !isNaN(y))
        return true;
    else
        return false;
}

module.exports = {
    add: addition,
    sub: subtraction,
    mul: multiplication,
    div: division
}