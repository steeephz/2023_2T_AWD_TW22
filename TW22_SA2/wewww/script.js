let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    document.getElementById('display').value = result;
  } catch (error) {
    alert('Invalid expression');
  }
}
