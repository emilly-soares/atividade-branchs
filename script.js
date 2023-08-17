let displayValue = "";

function addToDisplay(value) {
   displayValue += value;
   updateDisplay();
}

function updateDisplay() {
   document.getElementById("display").value = displayValue;
}

