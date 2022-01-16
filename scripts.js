const displayResult = document.querySelector('#result');

// number keys
const numButtons = document.querySelectorAll('button.number');

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (calculation.waiting) {
            displayResult.textContent = 0;
            calculation.waiting = false;
        }

        displayInput(button);
    });
});

function displayInput(button) {
    if (displayResult.textContent === '0') {
        displayResult.textContent = button.value;
    } else {
        displayResult.textContent += button.value;
    }
};

// operation keys
const opButtons = document.querySelectorAll('button.operator');

opButtons.forEach(button => {
    button.addEventListener('click', () => {
        
        if(calculation.waiting && button.value === 'equals') {
            calculation.operator = null;
            return;
        }

        if (!calculation.waiting) {
            if (calculation.firstValue === null) {
                calculation.firstValue = parseFloat(displayResult.textContent);
                console.log(calculation.firstValue)
                console.log(calculation.secondValue)
                console.log(calculation.operator)
                calculation.waiting = true;
            } else {
                calculation.secondValue = parseFloat(displayResult.textContent);
                console.log(calculation.firstValue)
                console.log(calculation.secondValue)
                console.log(calculation.operator)
            }
        }
        
        if (button.value !== 'equals') {
            calculation.operator = button.value;
        } else if (button.value === "equals") {
            displayResult.textContent = calculation.evaluate();
        }

        
        
    })
})

//clear display

const clearButton = document.querySelector('button.clear');

clearButton.addEventListener('click', clearAll);

function clearAll() {
    displayResult.textContent = 0;
}

//delete last number inputted

const deleteButton = document.querySelector('button.delete');

deleteButton.addEventListener('click', deleteInput);

function deleteInput() {
    if (displayResult.textContent.length > 1) {
        displayResult.textContent = displayResult.textContent.slice(0, displayResult.textContent.length - 1);
    } else if (displayResult.textContent.length = 1) {
        displayResult.textContent = 0;
    }
}

//initialize calculator object

//calculation

const calculation = {
    firstValue: null,
    secondValue: null,
    operator: null,
    lastOperand: null,
    waiting: false,
    evaluate: function () {
        let result = operate(this.firstValue, this.secondValue, this.operator);
        return result;
    }
};

function operate(x, y, operator) {
    switch(operator) {
        case 'add':
            return x + y;
            break;
        case 'subtract':
            return x - y;
            break;
        case 'multiply':
            return x * y;
            break;
        case 'divide':
            return x / y;
            break;
        default:
            return -1;
            break;
    }
}