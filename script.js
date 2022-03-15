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


function deleteLastChar(){
  let splitedDisplay = display.textContent.split("");
  if(display.textContent.charAt(display.textContent.length - 1) === ' '){
    splitedDisplay.splice(display.textContent.length - 3, 3);
  }else{
    splitedDisplay.splice(display.textContent.length - 1, 1);
  }
  let result = splitedDisplay.join('');
  display.textContent = result;
}
function populateDisplay(button){
  button.addEventListener('click', () => {
    let displayText = display.textContent;
    if(displayText === '0' && button !== pointButton){
      display.textContent = '';
    }

    if(
      (button === addButton || button === subtractButton || button === multiplyButton || button === divideButton) &&
      (displayText.charAt(displayText.length - 2) === '+' ||
      displayText.charAt(displayText.length - 2) === '-' ||
      displayText.charAt(displayText.length - 2) === '×' ||
      displayText.charAt(displayText.length - 2) === '÷')){
        deleteLastChar();
      }
      
    if(button === addButton || button === subtractButton || button === multiplyButton || button === divideButton){
      if(display.textContent.split(" ")[2] !== undefined){
        display.textContent = `${operation(display.textContent.split(" ")[1], Number(display.textContent.split(" ")[0]), Number(display.textContent.split(" ")[2]))}`
      }
      display.textContent += ` ${button.textContent} `;
    }else{
      display.textContent += button.textContent;
    }
    if(display.textContent.split(" ")[1] === undefined && display.textContent.split(" ")[0].includes('.')){
      pointButton.setAttribute('disabled', true)
    }else if(display.textContent.split(" ")[1] !== undefined && display.textContent.split(" ")[2].includes('.')){
      pointButton.setAttribute('disabled', true)
    }else{
      pointButton.toggleAttribute('disabled', false)
    }
    
  })
}

populateDisplay(zero);
populateDisplay(one);
populateDisplay(two);
populateDisplay(three);
populateDisplay(four);
populateDisplay(five);
populateDisplay(six);
populateDisplay(seven);
populateDisplay(eight);
populateDisplay(nine);
populateDisplay(pointButton);
populateDisplay(addButton);
populateDisplay(subtractButton);
populateDisplay(multiplyButton);
populateDisplay(divideButton)
clearButton.addEventListener('click', () => {
  display.textContent = '';
});
deleteButton.addEventListener('click', deleteLastChar)
equalButton.addEventListener('click', () => {
  if(display.textContent.split(" ").length === 3){
    display.textContent = `${operation(display.textContent.split(" ")[1], Number(display.textContent.split(" ")[0]), Number(display.textContent.split(" ")[2]))}`
  }
})




function add(num1, num2){
  return (num1 + num2);
}

function subtract(num1, num2){
  return num1 - num2
}

function multiply(num1, num2){
  return num1 * num2
}

function divide(num1, num2){
  if(num2 === 0){
    return alert('don\'t divide by zero')
  }
  return num1 / num2
}

function operation(operator, num1, num2){
  
  if(operator === '+'){
     return add(num1, num2).toFixed(2)
  }else if(operator === '-'){
    return subtract(num1, num2).toFixed(2)
  }else if(operator === '×'){
    return multiply(num1, num2).toFixed(2)
  }else if(operator === '÷'){
    return divide(num1, num2).toFixed(2)
  }
}