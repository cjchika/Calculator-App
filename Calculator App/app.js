const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

let currentResultOutput = document.getElementById('current-calc');
const currentCalculationOutput = document.getElementById('result-display');

const defualt = 0;
let currentOutput = defualt;
let logEntries = [];

// if (userInput === '') {
//     for(usrInputs of userInput) {
//         return;
//     }
// }

function outputResult(text, result) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

function logOutput(resultBefore, operator, inNumber) {
    const calcOutput = `${resultBefore} ${operator} ${inNumber}`;
    outputResult(currentOutput, calcOutput);
}

function writeToLog(operationID, inputNumber, prevResult, finalResult) {
    logEntry = {
        operation: operationID,
        num: inputNumber,
        lastResult: prevResult,
        result: finalResult
    }
    logEntries.push(logEntry);
    console.log(logEntry.operation);
    console.log(logEntries);
}

function calcResult(calcType) {
    const inputedNum = parseInt(userInput.value);
    if (
        calcType !== 'ADDITION' && 
        calcType !== 'SUBTRACTION' && 
        calcType !== 'MULTIPLICATION' && 
        calcType !== 'DIVISION' ||
        !inputedNum 
    ) {
        return;
    }

    const initialResult = currentOutput;
    let mathOperator
    if(calcType === 'ADDITION') {
        currentOutput += inputedNum;
        mathOperator = '+'
    } else if (calcType === 'SUBTRACTION') {
        currentOutput -= inputedNum;
        mathOperator = '-'
    } else if (calcType === 'MULTIPLICATION') {
        currentOutput *= inputedNum;
        mathOperator = '*'
    } else if ( calcType === 'DIVISION') {
        currentOutput /= inputedNum;
        mathOperator = '/'
    }
    
    logOutput(initialResult, mathOperator, inputedNum);
    writeToLog(calcType, inputedNum, initialResult, currentOutput)
}

function add() {
    calcResult('ADDITION');
}

function subtract() {
    calcResult('SUBTRACTION');
}

function multiply() {
    calcResult('MULTIPLICATION');
}

function divide() {
    calcResult('DIVISION');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)


