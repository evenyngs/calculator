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
        
    })
})


//initialize calculator object

//calculation

