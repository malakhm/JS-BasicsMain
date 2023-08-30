function add(){
    let firstNumber;
    let firstNumberValue; 
    let secondNumber;
    let secondNumberValue;
    let result;


    firstNumber = document.getElementById('first_number');
    secondNumber = document.getElementById('second_number');
    firstNumberValue = firstNumber.value;
    secondNumberValue = secondNumber.value;
    
    result = firstNumberValue * secondNumberValue;
    alert('the result of ' + firstNumberValue + ' * ' + secondNumberValue + ' = '+ result);
}