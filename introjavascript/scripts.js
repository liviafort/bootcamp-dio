var number = document.getElementById('Number')
var currentNumber = 0;

function increment(){
  currentNumber++;
  number.innerHTML = currentNumber;
}

function decrement(){
  currentNumber--;
  number.innerHTML = currentNumber;
}