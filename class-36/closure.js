let globalVar = "I'm global";

function outerFunction() {
    let outerVar = "I'm from outer";

    function innerFunction() {
        let innerVar = "I'm inner";
        console.log(globalVar, outerVar, innerVar);
    }

    // inner function must be called without outerFunction
    innerFunction();
}

outerFunction();

console.log(globalVar);

// closure
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count
    }
}

const counter = createCounter();
console.log(counter());

function createPasswordChecker(password) {
    return function(attempt) {
        return attempt === password;
    }
}

const checkPassword = createPasswordChecker("greatPassword123");
console.log(checkPassword("iForgot123"));
console.log(checkPassword("greatPassword123"));