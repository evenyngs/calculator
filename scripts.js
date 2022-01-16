const history = document.querySelector('.input');
const screen = document.querySelector('#result');

// number keys
const numButtons = document.querySelectorAll('button.number');

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (calculation.waiting) {
            screen.textContent = 0;
            calculation.waiting = false;
        }
        if (calculation.equalsPushed) {
            calculation.lastOperand = null;
            screen.textContent = 0;
            calculation.equalsPushed = false;
        }
        displayInput(button);
    });
});

//display takes max 12 digits
function displayInput(button) {
    if (screen.textContent === '0') {
        screen.textContent = button.value;
    } else if (screen.textContent.length < 12) {
        screen.textContent += button.value;
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

        

        if (button.value === 'equals' && calculation.equalsPushed) {
            calculation.firstValue = parseFloat(screen.textContent);
            calculation.secondValue = calculation.lastOperand;
            screen.textContent = calculation.evaluate();
        } else if (!calculation.waiting) {
            if (calculation.firstValue === null) {
                calculation.firstValue = parseFloat(screen.textContent);
                
            } else {
                calculation.secondValue = parseFloat(screen.textContent);
                calculation.firstValue = calculation.evaluate();
                screen.textContent = calculation.firstValue;
                calculation.lastOperand = calculation.secondValue;
            }
        }
        
        if (button.value !== 'equals') {
            calculation.operator = button.value;
            calculation.waiting = true;
            history.textContent = screen.textContent;
            history.textContent += button.innerText;
        } else if (button.value === "equals") {
            calculation.firstValue = null;
            calculation.secondValue = null;
            history.textContent = "";
            calculation.equalsPushed = true;
        }

        
        
    })
})

//clear display

const clearButton = document.querySelector('button.clear');

clearButton.addEventListener('click', clearAll);

function clearAll() {
    screen.textContent = 0;
}

//delete last number inputted

const deleteButton = document.querySelector('button.delete');

deleteButton.addEventListener('click', deleteInput);

function deleteInput() {
    if (screen.textContent.length > 1) {
        screen.textContent = screen.textContent.slice(0, screen.textContent.length - 1);
    } else if (screen.textContent.length = 1) {
        screen.textContent = 0;
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
    equalsPushed: false,
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
            return calculation.firstValue();
    }
}