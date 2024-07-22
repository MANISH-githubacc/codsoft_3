let currentOperand = ''; // Holds the current number input
let previousOperand = ''; // Holds the previous number input
let operation = null; // Holds the current operation

const display = document.getElementById('display'); // Reference to the display element

// Function to append a number to the current operand
function appendNumber(number) {
    // Prevent multiple leading zeros
    if (number === '0' && currentOperand === '0') return;
    currentOperand += number; // Append number to the current operand
    updateDisplay(); // Update the display with the current operand
}

// Function to choose the operation
function chooseOperation(op) {
    if (currentOperand === '') return; // If no current operand, do nothing
    if (previousOperand !== '') {
        compute(); // If there's a previous operand, compute the result
    }
    operation = op; // Set the current operation
    previousOperand = currentOperand; // Move the current operand to previous
    currentOperand = ''; // Clear the current operand
}

// Function to compute the result
function compute() {
    let computation;
    const prev = parseFloat(previousOperand); // Convert previous operand to number
    const current = parseFloat(currentOperand); // Convert current operand to number
    if (isNaN(prev) || isNaN(current)) return; // If either operand is not a number, do nothing
    switch (operation) {
        case '+':
            computation = prev + current; // Addition
            break;
        case '-':
            computation = prev - current; // Subtraction
            break;
        case '*':
            computation = prev * current; // Multiplication
            break;
        case '/':
            computation = prev / current; // Division
            break;
        default:
            return;
    }
    currentOperand = computation; // Set the result as the current operand
    operation = null; // Clear the operation
    previousOperand = ''; // Clear the previous operand
    updateDisplay(); // Update the display with the result
}

// Function to clear the display and operands
function clearDisplay() {
    currentOperand = ''; // Clear the current operand
    previousOperand = ''; // Clear the previous operand
    operation = null; // Clear the operation
    updateDisplay(); // Update the display
}

// Function to update the display with the current operand
function updateDisplay() {
    display.innerText = currentOperand; // Set the display text to the current operand
}
