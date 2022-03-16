const display = document.querySelector('.content');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');
const equalButton = document.querySelector('.equal');
const pointButton = document.querySelector('.point');
const numbers = document.querySelectorAll('.nums');
const buttons = document.querySelectorAll('#buttons');

let num1 = '';
let num2 = '';
let operator = '';

function deleting(item){
  return item.replace(item.charAt(item.length-1),'');
}

function clearing(){
  num1 = '';
  num2 = ''
  operator = '';
  display.textContent = '';
  pointButton.toggleAttribute('disabled', false)
}


numbers.forEach((number) => {
  number.addEventListener('click',function(){
    if(operator === ''){
      if(num1 === '0' && this !== pointButton){
        num1 = ''
      }
      num1 += this.textContent;
      if(num1.includes('.')){
        pointButton.setAttribute('disabled', true)
      }
      display.textContent = `${num1}${operator}${num2}`
    }else{
      if(num2 === '0' && this !== pointButton){
        num2 = ''
      }
      num2 += this.textContent;
      if(num2.includes('.')){
        pointButton.setAttribute('disabled', true)
      }
      display.textContent = `${num1}${operator}${num2}`
    }
  })
})

buttons.forEach((button) => {
  button.addEventListener('click', function(){
    if(num2 === ''){
      if(operator !== ''){
        operator = '';
      }
      operator = button.textContent;
      display.textContent = `${num1}${operator}${num2}`;
    }else{
      num1 = `${operate(operator, num1, num2)}`;
      num2 = '';
      operator = button.textContent;
      display.textContent = `${num1}${operator}${num2}`
    }
    pointButton.toggleAttribute('disabled', false);
  })
})

deleteButton.addEventListener('click', function(){
  if(num1 === 'Error'){
    clearing();
  }
  if(num2 !== ''){
    num2 = deleting(num2);
    if(!num2.includes('.')){
      pointButton.toggleAttribute('disabled', false);
    }
    display.textContent = `${num1}${operator}${num2}`;
    return;
  }
  if(operator !== '' && num2 === ''){
    operator = '';
    display.textContent = `${num1}${operator}${num2}`;
    return;
  }
  if(operator === ''){
    num1 = num1.replace(num1.charAt(num1.length-1),'');
    if(!num1.includes('.')){
      pointButton.toggleAttribute('disabled', false);
    }
    display.textContent = `${num1}${operator}${num2}`;

  }
})

clearButton.addEventListener('click',clearing)

equalButton.addEventListener('click', function(){
  num1 = `${operate(operator, num1, num2)}`;
  num2 = '';
  display.textContent = num1;
  pointButton.toggleAttribute('disabled', false)
})
function operate(operator, num1, num2){
  num1 = Number(num1);
  num2 = Number(num2);
  if(operator === '+'){
    let result = num1 + num2;
    return (Number.isInteger(result))? result: result.toFixed(2);
  }
  if(operator === '-'){
    let result = num1 - num2;
    return (Number.isInteger(result))? result: result.toFixed(2);
  }
  if(operator === '×'){
    let result = num1 * num2;
    return (Number.isInteger(result))? result: result.toFixed(2);
  }
  if(operator === '÷'){
    if(num2 === 0){
      return 'Error'
    }
    let result = num1 / num2;
    return (Number.isInteger(result))? result: result.toFixed(2);
  }
}