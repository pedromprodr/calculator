const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;


function operate(operator, a, b) {
    return operator(a, b);
}



let displayValue = document.querySelector('#display');

let keys = document.querySelectorAll('.numKey');
keys.forEach(key => { key.addEventListener('click', () => changeDisplay(key.innerHTML)) })

let clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => clear())

function clear() {
    displayValue.innerHTML = '';
}

function changeDisplay(value) {
    if (displayValue.innerHTML === '') displayValue.innerHTML = value;
    else displayValue.innerHTML = + displayValue.innerHTML + value;
}