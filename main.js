const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.id;

        if (value === 'clear') {
            currentInput = '';
            operator = '';
            firstOperand = '';
            secondOperand = '';
            display.textContent = '';
        } else if (value === 'backspace') {
            currentInput = currentInput.slice(0, -1);
            display.textContent = currentInput;
        } else if (value === 'equals') {
            secondOperand = currentInput;
            const result = calculate(firstOperand, operator, secondOperand);
            display.textContent = result;
            currentInput = result;
            firstOperand = '';
            operator = '';
            secondOperand = '';
        } else if (value === 'percentage') {
            if (currentInput !== '') {
                currentInput = (parseFloat(currentInput) / 100).toString();
                display.textContent = currentInput;
            }
        } else if (['addition', 'subtrac', 'multipli', 'division'].includes(value)) {
            if (operator === '') {
                firstOperand = currentInput;
                operator = value;
                currentInput = '';
            } else {
                secondOperand = currentInput;
                const result = calculate(firstOperand, operator, secondOperand);
                display.textContent = result;
                firstOperand = result;
                operator = value;
                currentInput = '';
            }
        } else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});

function calculate(a, operator, b) {
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);
    switch (operator) {
        case 'addition':
            return num1 + num2;
        case 'subtrac':
            return num1 - num2;
        case 'multipli':
            return num1 * num2;
        case 'division':
            return num1 / num2;
        default:
            return 0;
    }
}
