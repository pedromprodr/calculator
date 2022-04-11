const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;


function operate(operator, a, b) {
    let res;
    
    if (operator === 'add') res = add(a, b);
    else if (operator === 'subtract') res = subtract(a, b);
    else if (operator === 'multiply') res = multiply(a, b);
    else if (operator === 'divide') res = divide(a, b);

    return Math.trunc(res*10000)/10000;
}

let storedValue = '0';
let displayValue = document.querySelector('#display');
let operatorV = null;
let operating = false;


let numKeys = document.querySelectorAll('.numKey');
numKeys.forEach(key => { key.addEventListener('click', () => changeDisplay(key.innerHTML)) })

let opKeys = document.querySelectorAll('.opKey');
opKeys.forEach(key => { key.addEventListener('click', () => changeOperator(key.id)) })

let dotKey = document.querySelector('#dot');
dotKey.addEventListener('click', () => addDot());

let equalsKey = document.querySelector("#equals")
equalsKey.addEventListener('click', () => equals(operatorV, storedValue, displayValue.innerHTML))

//TO-DO
//Melhorar o css
//Tentar optimizar o codigo
//adicionar o ponto e o parsefloat
//limitar o numero de digitos
//arranjar uma fonte bonita
let floatInUse = false;

let clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => clear())

function clear() {
    storedValue='0';
    displayValue.innerHTML = '0';
}
function changeOperator(op) {
    if (operatorV!=null&&!operating) {
        displayValue.innerHTML = operate(operatorV, parseFloat(storedValue), parseFloat(displayValue.innerHTML));
    }
    operatorV = op;
    operating = true;
    storedValue = displayValue.innerHTML;
    floatInUse = false;
}
function addDot() {
    if(!floatInUse){
        displayValue.innerHTML = displayValue.innerHTML + '.';
        floatInUse = true;
    }
}
function equals(op, a, b) {
    console.log(op, a, b);
    displayValue.innerHTML = operate(op, parseFloat(a, 10), parseFloat(b, 10))
    operatorV = null;
    operating =true;
    floatInUse = false;
}

function changeDisplay(value) {
    let values = ['', '_', '0']

    if ((values.includes(displayValue.innerHTML)) || operating ) {
        displayValue.innerHTML = value;
        operating = false;
    } else displayValue.innerHTML = displayValue.innerHTML + value;
}