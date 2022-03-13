const display = document.querySelector('.content');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');
const divideButton = document.querySelector('.divide');
const multiplyButton = document.querySelector('.multiply');
const subtractButton = document.querySelector('.subtract');
const addButton = document.querySelector('.add');
const equalButton = document.querySelector('.equal');
const pointButton = document.querySelector('.point');
const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');

function populateDisply(button){
  button.addEventListener('click', () => {
    if(display.textContent === '0'){
      display.textContent = '';
    }
    display.textContent += button.textContent;
  })
}

populateDisply(zero);
populateDisply(one);
populateDisply(two);
populateDisply(three);
populateDisply(four);
populateDisply(five);
populateDisply(six);
populateDisply(seven);
populateDisply(eight);
populateDisply(nine);
populateDisply(pointButton);
populateDisply(addButton);
populateDisply(subtractButton);
populateDisply(multiplyButton);
populateDisply(divideButton)
clearButton.addEventListener('click', () => {
  display.textContent = '';
});
deleteButton.addEventListener('click', () => {
  let splitedDisplay = display.textContent.split("");
  splitedDisplay.splice(display.textContent.length - 1, 1);
  let result = splitedDisplay.join('');
  display.textContent = result;
})




function add(num1, num2){
  return Number(num1) + Number(num2);
}

function subtract(num1, num2){
  return num1 - num2
}

function multiply(num1, num2){
  return num1 * num2
}

function divide(num1, num2){
  return num1 / num2
}

function operation(operator, num1, num2){
  if(operator === '+'){
     return add(num1, num2)
  }else if(operator === '-'){
    return subtract(num1, num2)
  }else if(operator === '*'){
    return multiply(num1, num2)
  }else if(operator === '/'){
    return divide(num1, num2)
  }
}