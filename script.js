let display = document.getElementById('display');
let clear = true;
let operator = '';
let operand1 = 0;
let operand2 = null;

function appendNumber(number) {
 if (clear) {
    display.value = number;
    clear = false;
 } else {
    display.value += number;
 }
}

function appendOperator(op) {
 if (!isNaN(display.value)) {
    operand1 = parseFloat(display.value);
    operator = op;
    display.value = '';
    clear = true;
 }
}

function calculateResult() {
 if (!isNaN(display.value)) {
    operand2 = parseFloat(display.value);
    switch (operator) {
      case '+':
        display.value = operand1 + operand2;
        break;
      case '-':
        display.value = operand1 - operand2;
        break;
      case '*':
        display.value = operand1 * operand2;
        break;
      case '/':
        display.value = operand1 / operand2;
        break;
    }
    clear = true;
 }
}

function clearDisplay() {
 display.value = '';
 clear = true;
 operator = '';
 operand1 = 0;
 operand2 = null;
}

