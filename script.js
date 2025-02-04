let display = document.getElementById('display');
let operand1 = '';
let operand2 = '';
let operator = '';

function appendToDisplay(value) {
  if (value === '+' || value === '-' || value === '*' || value === '/') {
    operator = value;
  } else if (operator === '') {
    operand1 += value;
    display.innerText = operand1;
  } else {
    operand2 += value;
    display.innerText = operand2;
  }
}

function calculate() {
  let result;
  let num1 = parseFloat(operand1);
  let num2 = parseFloat(operand2);

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      break;
  }

  display.innerText = result;
  operand1 = result.toString();
  operand2 = '';
  operator = '';
}

function clearDisplay() {
  display.innerText = '0';
  operand1 = '';
  operand2 = '';
  operator = '';
}
