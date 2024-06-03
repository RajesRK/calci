let display = document.getElementById('display');
let historyList = document.getElementById('historyList');
let history = document.getElementById('history');
let memory = 0;

function clearDisplay() {
    display.textContent = '0';
}

function appendNumber(number) {
    if (display.textContent === '0' && number !== '.') {
        display.textContent = number;
    } else {
        display.textContent += number;
    }
}

function appendOperator(operator) {
    const lastChar = display.textContent.slice(-1);
    if (!isOperator(lastChar)) {
        display.textContent += operator;
    }
}

function deleteLast() {
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1);
    } else {
        display.textContent = '0';
    }
}

function calculate() {
    try {
        const result = eval(display.textContent);
        addToHistory(display.textContent + ' = ' + result);
        display.textContent = result;
    } catch (error) {
        display.textContent = 'Error';
    }
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function calculatePercentage() {
    display.textContent = (parseFloat(display.textContent) / 100).toString();
}

function calculateSquareRoot() {
    display.textContent = Math.sqrt(parseFloat(display.textContent)).toString();
}

function memoryClear() {
    memory = 0;
}

function memoryRecall() {
    display.textContent = memory.toString();
}

function memoryAdd() {
    memory += parseFloat(display.textContent);
}

function memorySubtract() {
    memory -= parseFloat(display.textContent);
}

function addToHistory(entry) {
    const li = document.createElement('li');
    li.textContent = entry;
    historyList.appendChild(li);
    // Scroll to the bottom of the history list
    historyList.scrollTop = historyList.scrollHeight;
}

function toggleHistory() {
    if (history.style.transform === 'translateX(0%)') {
        history.style.transform = 'translateX(100%)';
    } else {
        history.style.transform = 'translateX(0%)';
    }
}
