function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    if(num1 === 0 || num2 === 0)  {
        return console.error("Error, can't divide by 0.");
    }

    return num1 / num2;
};

module.exports = {
    add,
    subtract,
    multiply,
    divide
}