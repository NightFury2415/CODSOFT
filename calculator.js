document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');

    function clearDisplay() {
        display.value = '';
    }

    function deleteLastChar() {
        display.value = display.value.slice(0, -1);
    }

    function appendCharacter(char) {
        display.value += char;
    }

    function handleDigitClick(digit) {
        appendCharacter(digit);
    }

    function handleOperatorClick(operator) {
        appendCharacter(operator);
    }

    function handleEqualsClick() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    }

    document.querySelectorAll('.calculator form input:not([type="text"])').forEach(button => {
        button.addEventListener('click', function () {
            const value = this.value;

            if (value === '=') {
                handleEqualsClick();
            } else if (value === 'C') {
                clearDisplay();
            } else if (value === 'DEL') {
                deleteLastChar();
            } else {
                handleDigitClick(value);
            }
        });
    });
});
