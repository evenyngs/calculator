const displayResult = document.querySelector('#result');

// number keys
const numButtons = document.querySelectorAll('button.number');

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        displayInput(button);
    });
});

function displayInput(button) {
    displayResult.textContent += button.value;
};

// operation keys
const opButtons = document.querySelectorAll('button.operator');

opButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.value === "equals") {
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
    displayResult.textContent = displayResult.textContent.slice(0, displayResult.textContent.length - 1);
}

//initialize calculator object

//calculation

const calculation = {
    firstValue: 9,
    secondValue: 5,
    operator: "divide",
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
    }
}