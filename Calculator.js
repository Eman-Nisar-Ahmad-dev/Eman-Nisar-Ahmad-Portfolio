let display = document.getElementById('display');
// Function to add a number or operator to the screen
function appendToDisplay(value) {
    display.value += value;
}
// Function to erase the screen
function clearDisplay() {
    display.value = '';
}
// Function to calculate the final result
function calculate() {
    try {
//  'eval()' reads the string on the display and does the math
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';// If the user types bad math (like "5*/"), show Error
    }
}