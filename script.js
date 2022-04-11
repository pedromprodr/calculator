const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;


function operate(operator, a, b) {
    console.log(operator, a, b);
    if (operator === 'add') return add(a, b);
    else if (operator === 'subtract') return subtract(a, b);
    else if (operator === 'multiply') return multiply(a, b);
    else if (operator === 'divide') return divide(a, b);
}

let storedValue = '0';
let displayValue = document.querySelector('#display');
let operatorV = null;
let operating = false;


let numKeys = document.querySelectorAll('.numKey');
numKeys.forEach(key => { key.addEventListener('click', () => changeDisplay(key.innerHTML)) })

let opKeys = document.querySelectorAll('.opKey');
opKeys.forEach(key => { key.addEventListener('click', () => changeOperator(key.id)) })

let equalsKey = document.querySelector("#equals")
equalsKey.addEventListener('click', () => equals(operatorV, storedValue, displayValue.innerHTML))

//TO-DO
//Melhorar o css
//Tentar optimizar o codigo
//adicionar o ponto e o parsefloat
//limitar o numero de digitos
//arranjar uma fonte bonita

let clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => clear())

function clear() {
    storedValue='0';
    displayValue.innerHTML = '0';
}
function changeOperator(op) {
    if (operatorV!=null&&!operating) {
        displayValue.innerHTML = operate(operatorV, parseInt(storedValue), parseInt(displayValue.innerHTML));
    }
    operatorV = op;
    operating = true;
    storedValue = displayValue.innerHTML;

}

function equals(op, a, b) {
    console.log(op, a, b);
    displayValue.innerHTML = operate(op, parseInt(a, 10), parseInt(b, 10))
    operatorV = null;
    
}

function changeDisplay(value) {
    let vals = ['', '_', '0']

    if (vals.includes(displayValue.innerHTML) || operating) {
        displayValue.innerHTML = value;
        operating = false;
    } else displayValue.innerHTML = displayValue.innerHTML + value;
}